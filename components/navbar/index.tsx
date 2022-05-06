import Link from "next/link"
import { useRouter } from "next/router"

// create Navbar with tailwind
export const Navbar = () => {
    const router = useRouter()
    const listNav = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Prix', href: '/prix' },
        { name: 'Faux amis', href: '/faux_amis' },
        { name: 'Contact', href: '/contact', rounded: true },
    ]
    return (
        <>
            <div className="bg-slate-200 z-50 h-20 w-full items-center flex justify-center">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link href='/'>
                            <a className="text-slate-600 text-lg font-semibold">
                                Form Anglais
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center">
                        {listNav.map((item, index) => (
                            <Link href={item.href} key={index}>
                                <a className={`${router.pathname === item.href ? 'text-black' : !item.rounded ? 'text-baseColor-100' : 'text-white'} text-lg font-semibold mr-4 ${item.rounded ? 'px-6 py-2 rounded-full bg-baseColor-100 text-white' : ''}`}>
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