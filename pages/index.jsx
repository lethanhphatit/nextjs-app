import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Burger Queen Combo 1</title>
        <meta name="description" content="Zing burger queen combo 1 - Zing Food" />
      </Head>
      <h1>Burger Queen Combo 1</h1>
      <img
        alt="Burger Queen Combo 1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAOQs4EuR-qmZtp4UbiOOeapFF9cp6e2WkQ&usqp=CAU&fit=crop&w=620h=413"
      />
    </main>
  );
}
