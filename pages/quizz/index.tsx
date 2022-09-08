import Head from "next/head";
import Image from "next/image";
import imgTest from "../../img/bg-login.jpeg";

const QuizzPage = () => {
    return (
        <div className='w-full h-full bg-gradient-to-b from-red-500 to bg-purple-400'>
            <Head>
                <title>Form Anglais | Quizz</title>
                <meta name='description' content='Form Anglais Alexandra Roque' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full h-full flex justify-center items-center p-10">
                <div className="w-full h-full bg-white rounded-md flex flex-col">
                    <div className="w-full h-2/4 flex justify-center py-5">
                        <Image src={imgTest} width={600} height={400} className='rounded-md shadow-lg' />
                    </div>
                    <div className="w-full h-1/3 flex justify-center">
                        Ici les questions
                    </div>
                    <div className="w-full h-1/6 flex justify-center">Progress Bar</div>
                </div>
            </div>
        </div>
    );
}

export default QuizzPage;