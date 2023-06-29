import Head from 'next/head'
import Link from 'next/link'

import {AuthLayout} from '@/components/auth/AuthLayout'
import {Button} from '@/components/Button'
import {TextField} from '@/components/Fields'
import {signIn, useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Login() {
    const {data: session} = useSession()
    const router = useRouter();

    useEffect(() => {
        session && router.push('/dashboard')
    }, [router, session])
    return (
        <>
            <Head>
                <title>Sign In - Pocket</title>
            </Head>
            <AuthLayout
                title="Sign in to account"
                subtitle={
                    <>
                        Don’t have an account?{' '}
                        <Link href="/register" className="text-indigo-600">
                            Sign up
                        </Link>{' '}
                        for a free trial.
                    </>
                }
            >
                <form>
                    <div className="space-y-6">
                        <TextField
                            label="Email address"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                        />
                        <TextField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        color="cyan"
                        className="mt-8 w-full bg-indigo-600"
                    >
                        Sign in to account
                    </Button>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        <span
                            className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>
                    <Button
                        type="submit"
                        color="cyan"
                        className="w-full bg-zinc-900"
                        onClick={() => signIn()}
                    >
                        Sign in with GitHub
                    </Button>
                </form>
            </AuthLayout>
        </>
    )
}
