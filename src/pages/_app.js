import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { GetStaticProps } from "next";
export default function App({ Component, pageProps }, props) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export async function getStaticProps() {
  const data = await import("../data/vocabulary.json");
  const array = data.vocabulary;

  return {
    props: { array },
    revalidate: 20,
  };
}
