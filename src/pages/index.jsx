import Head from 'next/head'
import {Header} from '@/components/Header'
import {Footer} from "@/components/Footer";
import {PrimaryFeatures} from "@/components/PrimaryFeatures";
import {Hero} from "@/components/Hero";
import {Pricing} from "@/components/Pricing";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.push('/login')
    }, [router])

    return (
        <>
            <Head>
                <title>Pocket - Invest at the perfect time.</title>
                <meta
                    name="description"
                    content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
                />
            </Head>
            <Header/>
            <main>
                <Hero/>
                <PrimaryFeatures/>
                {/*<SecondaryFeatures/>*/}
                {/*<CallToAction/>*/}
                {/*<Reviews/>*/}
                <Pricing/>
                {/*<Faqs/>*/}
            </main>
            <Footer/>
        </>
    )
}
