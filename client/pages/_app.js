import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <head>
        <link rel="stylesheet" href="/css/style.css"/>
    </head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
