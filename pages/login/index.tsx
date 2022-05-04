import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import bg from "../../img/bg-login.jpeg"
import Head from "next/head";

interface ILoginForm {
    username: string;
    password: string;
}

const Login = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        fetch(`/api/users/${data.username}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => {
            if (res.status === 200) {
                // login success, store token in localStorage
                res.json().then((user) => {
                    localStorage.setItem("token", user.token);
                })
                router.push("/admin/quizz");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex flex-col items-center justify-center h-screen">
                <Image src={bg} alt='bg-login' layout="fill" className="blur-sm" />
                <form onSubmit={handleFormSubmit} className="w-full max-w-sm shadow-xl p-5 rounded-md flex justify-center items-center flex-col z-50 bg-white">
                    <h1 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Login</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Username">
                                Username
                            </label>
                            <Input type="text" formcontrol={register('username')} name='Username' />
                        </div>
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <Input type="password" formcontrol={register('password')} name='Password' />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button name="GO" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;