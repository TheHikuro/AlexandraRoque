import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Button } from '../components/button'
import { useModalContext } from '../components/modal'
import { TextContainer } from '../components/textContainer'
import alex from '../img/alex.png'

const Home: NextPage = () => {
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
  return (
    <div className='w-full h-sceen'>
      <Head>
        <title>Form Anglais | Alexandra Roque</title>
        <meta name='description' content='Form Anglais Alexandra Roque' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-full w-full bg-gradient-to-b from-red-500 to bg-purple-400 overflow-scroll'>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center p-6 items-start w-5/12 h-1/2'>
            <div className='flex items-center flex-col'>
              <div className='bg-indigo-500/60 shadow-xl rounded-full items-baseline flex w-80 h-80 fixed mt-9' />
              <Image src={alex} width={400} height={300} alt='Alexandra Roque' className='z-10' />
              <div className='p-2 bg-white rounded-xl shadow-xl w-96 flex justify-center items-center flex-col -mt-6 z-20'>
                <h2 className='text-4xl font-semibold text-blue-900'>Alexandra Roque</h2>
                <span className='text-baseColor-100'>Auto-Entrepreneuse</span>
              </div>
            </div>
          </div>
          <div className='w-7/12 h-1/2 p-10'>
            <TextContainer title='Qui suis-je ?' content={
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
        <div className='w-full h-fit'>

        </div>
      </div>
    </div>

  )
}

export default Home
