import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Admin = () => {
    const router = useRouter();
    // not secured yet
    
    React.useEffect(() => {
        router.push('/admin/quizz')
    }, [router])
    // if user is not connected with firebase, redirect to login page
    // if (!useAuth().isConnected) {}
    return (
        <>
            <Head>
                <title>Admin - FormAnglais</title>
            </Head>
        </>
    )
}

export default Admin