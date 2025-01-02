import Link from "next/link"
export default function NotFound() {
    return (
        <>
            <h1 className="text-center">Page Not Found!</h1>
            <Link href="/">Go to home page</Link>
        </>
    )
}