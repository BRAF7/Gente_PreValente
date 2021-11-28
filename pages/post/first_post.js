import Link from "next/link";
// Head is a react component
import Head from "next/head";
// we´re going to add some styles
import Layout from "../../components/layout";
//Importing NavBar
import Navbar from "../../components/Navbar/Navbar";

export default function FirstPost() {
  return (
    <>
      {/* We're using this in order to give a tittle to the window */}
      <Navbar></Navbar> 
      <head>
        <title>First Post</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      
      <Layout>
          
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
