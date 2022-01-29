import Link from 'next/link';
export default function About() { // khong the su dung CS6 arrow function
    return (
        <div className="about-content">
            <p>This is about page</p>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </div>
    )
}