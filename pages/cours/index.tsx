import Head from "next/head";
import TableTab from "../../components/tableTab/TableTab";

const CoursPage = () => {

    const data = [
        {
            title: 'Cours de Anglais 🇬🇧', text: (
                <div className="flex w-full h-full justify-evenly flex-col">
                    <div className="text-lg w-full h-fit mb-3">
                        L&apos;apprentissage d&apos;une langue étrangère doit passer par, outre votre motivation, une exposition répétée à des sons non-familiers.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        ÉCOUTER, PARLER, LIRE et ÉCRIRE sont les 4 compétences qu&apos;il faut travailler régulièrement pour devenir autonome dans une langue étrangère. Ainsi, à travers la conversation, les exercices de grammaires, la lecture et l&apos;écoute de documents écrits, vidéos et audio variés, vous gagnerez progressivement confiance en vous et pourrez vous exprimer de plus en plus facilement grâce à un accompagnement personnalisé et régulier.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        Nous établirons ensemble un parcours pédagogique cohérent et réaliste en fonction de votre niveau de base (A1- débutant à C2-avancé). Je propose des cours d&apos;anglais sur mesure selon vos priorités et vos objectifs. Je serai votre unique formateur, et votre seul référent pédagogique.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        • Enseignement à tous les niveaux, étudiants ou professionnels, anglais général ou « Business English » <br />
                        • Préparation aux examens et concours TOEFL, TOEIC, IELTS, BRIGHT, BULATS, LINGUASKILL, DELF, DALF <br />
                        • Utilisation d&apos;outils pédagogiques variés, adaptés à vos objectifs et votre niveau <br />
                        • Cours particuliers en présentiel (à domicile ou sur votre lieu de travail) ou en distanciel (par webcam)
                    </div>
                </div>
            )
        },
        {
            title: 'French Lessons 🇫🇷', text: (
                <div className="flex w-full h-full justify-evenly flex-col">
                    <div className="text-lg w-full h-fit mb-3">
                        Learning a new language requires repeated exposures to new sounds and patterns of speech which contradict the familiar ones. To form new habits, you must hear and repeat as much as possible what is unnatural.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        It will not come without effort, but it will eventually. My goal is to help you communicate easily in French and understand better the French culture.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        I will urge you to speak as much as possible and correct your mistakes so that you won't keep "bad habits". We will work on various tools/websites/printed exercises/videos to make your training fun, dynamic and diverse. I will suggest some homework so you can practice between our lessons. Learning a language is a demanding long term project. It needs commitment, persistence and regular work.
                    </div>
                    <div className="text-lg w-full h-fit mb-3">
                        But don't worry, I will be there to help you gain confidence every step of the way, to encourage and support you through a positive approach! In-person or on- line learning. Tailor-made program according to your level, objectives and availabilities.
                    </div>
                </div>
            )
        },
    ]

    return (
        <>
            <Head>
                <title>Form Anglais | Cours</title>
            </Head>
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-b from-red-500 to bg-purple-400">
                <div className="w-3/4 h-3/4 rounded-md shadow-md bg-white">
                    <TableTab values={data} />
                </div>
            </div>
        </>
    );
}

export default CoursPage;