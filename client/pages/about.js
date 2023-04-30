import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={StyleSheet.main}>
                <Sidebar />
                <h1>
                    About Page
                </h1>
            </main>
        </div>
    );
}