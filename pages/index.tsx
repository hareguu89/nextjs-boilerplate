import Link from 'next/link';
import { NextPage, InferGetStaticPropsType } from 'next';
import Seo from '@components/seo';
import Sidebar from '@components/Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IDummyBackend, IResponse } from 'types';
import fs from 'fs/promises';
import path from 'path';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [products, setProducts] = useState<IDummyBackend[]>([]);
  // console.log(products);
  // useEffect(() => {
  //   const test = async () => {
  //     await axios.get<IResponse>('/dummy-backend.json').then(res => {
  //       setProducts(res.data.product);
  //     });
  //   };
  //   test();
  // }, []);

  return (
    <>
      <Seo title={'Home'} />
      <Sidebar />

      <Link href="/login">path</Link>
      <ul>
        {products.map((product: IDummyBackend) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
  };
}

export default Home;
