import PaginaPrincipal from './components/pagina-principal'

export default function Home() {
  return <PaginaPrincipal />
}


import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export { MyApp }  ;
