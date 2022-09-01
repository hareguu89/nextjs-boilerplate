import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Seo from '@components/seo';
import Sidebar from '@components/Sidebar';
import { IDummyBackend } from 'types';
import fs from 'fs/promises';
import path from 'path';
// import { useEffect } from 'react';

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
					<Link href={`/${product.id}`} key={product.id}>
						{product.title}
					</Link>
				))}
			</ul>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	console.log(context);
	console.log('re-generated');
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData.toString());

	if (!data.products.length) {
		// if fetching is failed => 404 page shown
		return { notFound: true };
	}

	if (!data) {
		return {
			redirect: { destination: '/' },
			props: {},
		};
	}

	return {
		props: {
			products: data.products,
		},
		revalidate: 3, // ISR(incremental static regeneration) - x per sec, regenerate the pages,
	};
};

export default Home;
