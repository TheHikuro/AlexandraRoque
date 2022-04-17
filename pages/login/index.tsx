import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/inputs";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill all fields");
        }
        else {
            setError("");
            router.push("/admin");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-sm shadow-lg p-5 rounded-md flex justify-center items-center flex-col">
                <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Login</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Username
                        </label>
                        <Input name="Username" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <Input name="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <p className="text-red-500 text-xs italic mb-3">{error}</p>
                <div className="flex items-center justify-center">
                    <Button name="GO" />
                </div>
            </form>
        </div>
    );
}

export default Login;