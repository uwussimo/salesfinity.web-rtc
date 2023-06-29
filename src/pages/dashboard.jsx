import Head from "next/head";
import DashboardLayout from "@/components/dashboard/Layout";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard | Salesfinity.io</title>
                <meta
                    name="description"
                    content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
                />
            </Head>
            <main>
                <DashboardLayout>
                    <h2 className="text-2xl">
                        Current call
                    </h2>
                </DashboardLayout>
            </main>
        </>
    );
}
