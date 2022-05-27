import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useEffect } from "react"

const NavBar = () => {
    const router = useRouter()

    useEffect(() => {
        
        console.log(router)
    }, [router])

    return (
        <div>
            <Link href='/'>
                <a>home</a>
            </Link>
            <Link href='/test'>
                <a>test</a>
            </Link>
        </div>
    )
}

export default NavBar