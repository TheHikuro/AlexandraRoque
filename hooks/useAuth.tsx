/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";

interface AuthProviderProps {
    children: React.ReactNode;
}
interface IAuth {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<IAuth>({
    user: null,
    signIn: async () => {},
    logout: async () => {},
    loading: false,
}) 

export const AuthProvider = ({children}: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [initialLoading, setInitialLoading] = React.useState(true);
    const [isConnected, setIsConnected] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => 
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                localStorage.setItem('isConnected', isConnected.toString());
            } else {
                setUser(null);
                setInitialLoading(false);
                localStorage.setItem('isConnected', isConnected.toString());
            }

            setInitialLoading(false);
        })
    , [auth, isConnected, loading])

    const signIn = async (email: string, password: string) => {
        const user = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            setLoading(false);
            setIsConnected(true);
            router.push("/admin");
        })
        .catch((error) => error.message)
        .finally(() => { setLoading(false) });
        return user;
    }

    const logout = async () => {
        await signOut(auth)
        .then(() => {
            setUser(null);
            setIsConnected(false);
            router.push("/login");
        })
        .catch((error) => { alert(error.message) });
    }

    const memo = React.useMemo(() => ({
        user,
        signIn,
        logout,
        loading,
    }), [user, loading]);

    return (
        <AuthContext.Provider value={memo}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return React.useContext(AuthContext);
}