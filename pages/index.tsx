import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button } from '../components/button'
import { useModalContext } from '../components/modal'
import { Testimonials } from '../components/testimonials'
import { TextContainer } from '../components/textContainer'
import alex from '../img/alex.png'
import usa from '../img/flag_usa.jpg'

type Data = {
    name: string
    comment: string
    company: string
}

const Home: NextPage = (props: any) => {
    const { data } = props
    const { openModal, updateModalContent, updateModalTitle } = useModalContext()
    const handleModal = () => {
        updateModalTitle('Mon Parcours')
        updateModalContent(
            <Fragment>
                <span></span>
            </Fragment>
        )
        openModal()
    }
    const handleModalQuizz = () => {
        updateModalTitle('Mon Quizz')
        updateModalContent(
            <Fragment>
                <span></span>
            </Fragment>
        )
        openModal()
    }
    return (
        <div className='w-full h-full bg-gradient-to-b from-red-500 to bg-purple-400'>
            <Head>
                <title>Form Anglais | Alexandra Roque</title>
                <meta name='description' content='Form Anglais Alexandra Roque' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='h-full w-full '>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center p-6 items-start w-5/12 h-1/2'>
                        <div className='flex items-center flex-col justify-center'>
                            <div className='bg-indigo-500/60 shadow-xl rounded-full items-baseline justify-center flex w-96 h-96 mt-9'>
                                <div className='flex justify-center items-center flex-col mt-10'>
                                    <Image src={alex} width={700} height={560} alt='Alexandra Roque' className='z-10' />
                                    <div className='p-2 bg-white rounded-xl shadow-xl w-96 flex justify-center items-center flex-col -mt-6 z-20'>
                                        <h2 className='text-4xl font-semibold text-blue-900'>Alexandra Roque</h2>
                                        <span className='text-baseColor-100'>Auto-Entrepreneuse</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-7/12 h-1/2 p-10'>
                        <TextContainer title='Qui suis-je ?' large content={
                            <Fragment>
                                <div className='flex text-justify justify-center w-full h-full flex-col'>
                                    <div>
                                        <span className='text-blue-900 font-bold'>Passioné par les langues</span>
                                        <span>, les cultures et les cultures, Alexandra Roque est une auto-entrepreneuse qui a décidé de créer une plateforme de connexion entre les langues.</span>
                                    </div>
                                    <br />
                                    <div>
                                        <span>Parfaitement bilingue</span>
                                        <span className='text-baseColor-100 mx-1 font-bold'>je souhaite transmettre ma passion</span>
                                        <span>de l&apos;anglais et encourager ceux qui pensent qu&apos;il est impossible d&apos;apprendre une langue à l&apos;âge adulte. Beaucoup de motivation, et un bon accompagnement sont les deux ingrédients d&apos;</span>
                                        <span className='text-blue-900 mr-1 font-bold'>une réussite assurée.</span>
                                        <span>Je vous apporterai l&apos;aide personnalisée et le</span>
                                        <span className='text-baseColor-100 mx-1 font-bold'>soutien dont vous avez besoin</span>
                                        <span> pour acquérir ou améliorer les </span>
                                        <span className='text-blue-900 mx-1 font-bold'>compétences orales et écrites.</span>
                                        <span> Si vous êtes « fâchés » avec l&apos;anglais depuis l&apos;école, mon approche communicative combinée à un </span>
                                        <span className='text-baseColor-100 mx-1 font-bold'>esprit positif et dynamique</span>
                                        <span> vous réconciliera avec celle-ci !</span>
                                    </div>
                                    <div className='w-full flex justify-center mt-3'>
                                        <div onClick={handleModal} className='w-44 flex justify-center items-center hover:cursor-pointer rounded-full px-2 py-1 h-10 bg-baseColor-100 text-white font-bold'>Mon parcours</div>
                                    </div>
                                </div>
                            </Fragment>
                        } />
                    </div>
                </div>
                <div className='w-full p-5 flex'>
                    <div className='w-1/2 h-full'>
                        <TextContainer title='Mon livre' large={false} content={
                            <Fragment>
                                <div className='flex justify-center items-center flex-col w-full h-full'>
                                    <span className='text-2xl'>
                                        Les 300 principaux faux amis anglais à connaître
                                    </span>
                                    <span className='font-bold text-baseColor-100 text-2xl'>Mots en context et exercices corrigés</span>
                                    <Link href='https://livre.fnac.com/a10160018/Alexandra-Roque-Les-300-principaux-faux-amis-anglais-a-connaitre-Mots-en-contexte-et-exercices-corriges?Origin=fnac_google'>
                                        <a className='w-32 mt-8 flex justify-center items-center hover:cursor-pointer rounded-full px-2 py-1 h-10 bg-baseColor-100 text-white font-bold hover:shadow-lg' target='_blank'>
                                            Voir le livre
                                        </a>
                                    </Link>
                                </div>
                            </Fragment>
                        } />
                    </div>
                    <div className='w-1/2 h-56 flex justify-center items-center px-20 flex-col'>
                        <div className='-mb-5 flex w-full justify-center'>
                            <div className={`w-32 h-20 -rotate-[9deg] rounded-sm shadow-md bg-[url('../img/flag_usa.jpg')] bg-cover bg-white`} />
                            <div className="w-32 h-20 shadow-md bg-[url('../img/flag_uk.jpg')] bg-cover z-40 rounded-sm mx-10 -mt-3" />
                            <div className="w-32 h-20 shadow-md bg-[url('../img/flag_aust.jpg')] bg-cover rotate-[9deg] rounded-sm" />
                        </div>
                        <div className='w-full h-20 rounded-full bg-white shadow-lg text-center flex items-center justify-center text-indigo-800 text-xl font-bold flex-col z-30'>
                            <span className='mb-2'>
                                Connais-tu les drapeaux des pays anglophones ?
                            </span>
                            <div onClick={handleModalQuizz} className='-mb-12 hover:cursor-pointer p-2 bg-baseColor-100 shadow-md rounded-full text-white'>Faire le quizz</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-64 bg-white flex items-center justify-center'>
                <Testimonials data={data} />
            </div>
            <div className='h-20 bg-gradient-to-b from-purple-400 to bg-purple-300' />
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/testimonials")
    const data: Data = await res.json()
    return {
        props: { data }
    }
}

export default Home
