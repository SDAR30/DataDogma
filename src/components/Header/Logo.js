import Image from "next/image"
import profileImg  from "@/public/profile-img.png"
import Link from 'next/link'


export const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark m-2">
                <Image src={profileImg} alt="Shoaib" className="w-full h-auto rounded-full"/>
            </div>
            <span className="font-bold text-xl">Shoaib</span>
        </Link>
    )
}
