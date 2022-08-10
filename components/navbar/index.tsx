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
    // create responsive Navbar with tailwind
    return (
        <>
            <div className="bg-white z-50 h-20 w-full items-center flex justify-center top-0 fixed">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between fixed">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link href='/'>
                            <a className="text-4xl text-baseColor-100 font-bold">
                                Form Anglais
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
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
