import Link from "next/link"
import { useRouter } from "next/router"

// create Navbar with tailwind
export const Navbar = () => {
    const router = useRouter()
    const listNav = [
        { name: 'Home', href: '/' },
        { name: 'Cours', href: '/cours' },
        { name: 'Tarifs', href: '/prix' },
        { name: 'Faux amis', href: '/faux_amis' },
        { name: 'Contact', href: '/contact', rounded: true },
    ]

    return (
        <>
            <div className="bg-white z-40 h-fit w-full items-center flex justify-center fixed shadow-lg">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between fixed">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link href='/'>
                            <a className="text-4xl text-baseColor-100 font-bold">
                                Form Anglais
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center w-2/4 justify-evenly">
                        {listNav.map((item, index) => (
                            <Link href={item.href} key={index}>
                                <a className={`${router.pathname === item.href ? 'text-black' : !item.rounded ? 'text-baseColor-100' : 'text-white'} mr-4 ${item.rounded ? 'px-6 py-2 rounded-full bg-baseColor-100 text-white' : ''} text-xl `}>
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
