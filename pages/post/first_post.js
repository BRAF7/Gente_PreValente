import Link from "next/link";
// Head is a react component
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
    {/* Were using this in order to give a tittle to the window */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
