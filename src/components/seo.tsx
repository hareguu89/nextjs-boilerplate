import Head from "next/head";

interface IProps {
  title: string;
}

function Seo({ title }: IProps) {
  return (
    <>
      <Head>
        <title>{title} | Nextjs BoilerPlate</title>
      </Head>
    </>
  );
}

export default Seo;
