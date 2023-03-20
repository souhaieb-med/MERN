import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Navbar />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  );
}

//nutcase 22 captain 
