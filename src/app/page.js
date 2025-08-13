import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Welcome to My First Next.js App</h1>
            <p className={styles.description}>
                This is a simple application to demonstrate Next.js features.
            </p>
            <Image
                src="/file.svg"
                alt="Next.js Logo"
                width={200}
                height={200}
                className={styles.logo}
            />
        </main>
    );
}
