import Head from "next/head";

interface IProps {
  title: string;
  name?: string;
  content?: string;
}

function Seo({ title, name, content }: IProps) {
  return (
    <>
      <Head>
        <title>{title} | Nextjs BoilerPlate</title>
        <meta name={name} content={content} />
      </Head>
    </>
  );
}

export default Seo;
