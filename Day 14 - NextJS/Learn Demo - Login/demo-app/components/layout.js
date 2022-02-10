import Link from "next/link";
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return (
        <div className="layout-content">
            <ul className={styles.ul}>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/">Login</Link></li>
            </ul>
            {children}
        </div>
    )
}