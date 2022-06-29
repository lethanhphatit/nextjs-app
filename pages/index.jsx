import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Burger buns</title>
        <meta name="description" content="Burger buns - Zing Food" />
        <meta property="og:title" content="Burger buns - Zing Food" />
        <meta
          property="og:description"
          content="Burger buns - Zing Food"
        />
        <meta
          property="og:url"
          content="https://burger-buns.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-XXXXX-Y', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <h1>Burger Buns</h1>
      <img
        alt="Burger buns"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAOQs4EuR-qmZtp4UbiOOeapFF9cp6e2WkQ&usqp=CAU&fit=crop&w=620h=413"
      />
    </main>
  );
}
