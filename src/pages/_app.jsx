import '@/styles/tailwind.css'
import 'focus-visible'
import NextNProgress from 'nextjs-progressbar';
import {ThemeProvider} from 'next-themes'


export default function App({Component, pageProps}) {
    return <ThemeProvider defaultTheme={'light'}>
        <NextNProgress color="#3F51B5" startPosition={0.3} stopDelayMs={200} height={5}/>
        <Component {...pageProps} />
    </ThemeProvider>
}
