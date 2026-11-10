import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Eduardo / mystfolio',description:'Networks, home labs, and things I built to see if I could.'};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
