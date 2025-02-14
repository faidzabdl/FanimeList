import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="p-4 flex justify-between text-center">
            <h1 className="md:text-2xl text-sm text-color-primary">{title}</h1>

            {
            linkHref && linkTitle ?
            <Link href={linkHref} className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all">{linkTitle}</Link>
            :
            null    
        }
        
        </div>
    )
}

export default Header