import Link from "next/link";

export default function Footer(){
    return(
<div className="footer">
    <ul>
    <li> <Link href="/">Home</Link></li>
        <li> <Link href="/about">About</Link></li>
        <li> <Link href="/contact">Contact us</Link></li>

    </ul>
    <p className="copyright">Copyright @2024 All Right Reserved By Haseeb Ahmed</p>
</div>
    )
}