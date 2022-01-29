import Layout from "../components/layout";
import Link from 'next/link';
export default function About() {
    return (
        <Layout>
            <h1>This is the about page</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}