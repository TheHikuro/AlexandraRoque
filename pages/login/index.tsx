import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

interface ILoginForm {
    Username: string;
    Password: string;
}

const Login = () => {
    const router = useRouter();
    const [login, setLogin] = React.useState({
        Username: "",
        Password: "",
    });
    const [error, setError] = React.useState("");
    const { signIn } = useAuth()

    const { register, handleSubmit } = useForm<ILoginForm>();
    
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        if (login) {
            setLogin(data);
            setError("");
            await signIn(data.Username, data.Password)
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm shadow-lg p-5 rounded-md flex justify-center items-center flex-col">
                <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Login</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Username">
                            Username
                        </label>
                        <Input type="text" formcontrol={register('Username')} name='Username' />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <Input type="password" formcontrol={register('Password')} name='Password' />
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