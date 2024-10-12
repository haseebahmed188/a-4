import Link from "next/link";




export default function Header(){
    return(
<nav >
    <div className="logo">
        <p>Blogs & News</p>
    </div>
    <ul>
        <li> <Link href="/">Home</Link></li>
        <li> <Link href="/about">About</Link></li>
        <li> <Link href="/contact">Contact us</Link></li>
    </ul>
</nav>
    )
}