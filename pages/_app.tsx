import type { AppProps } from 'next/app';

// import '../styles/globals.css' // remove
import 'tailwindcss/tailwind.css'; // add

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;