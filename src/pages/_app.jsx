import '@/styles/tailwind.css'
import 'focus-visible'
import NextNProgress from 'nextjs-progressbar';
import {ThemeProvider} from 'next-themes'
import {SessionProvider} from "next-auth/react";


export default function App({Component, pageProps: {session, ...pageProps}}) {
    return <ThemeProvider defaultTheme={'light'}>
        <SessionProvider session={session}>
            <NextNProgress color="#3F51B5" startPosition={0.3} stopDelayMs={200} height={5}/>
            <Component {...pageProps} />
        </SessionProvider>
    </ThemeProvider>
}
