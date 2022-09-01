import fs from 'fs/promises';
import path from 'path';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IDummyBackend } from 'types';
// import { useEffect } from 'react';

const ProductDetailPage = ({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	// useEffect(() => {
	// 	console.log(product);
	// }, []);

	if (!product) {
		return <p> loading... </p>;
	}
	return (
		<>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
		</>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	const productId = params?.pid;

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const readFile = await fs.readFile(filePath);
	const data = JSON.parse(readFile.toString());

	const product = data.products.find(
		(product: IDummyBackend) => product.id === productId,
	);

	return {
		props: {
			product,
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [{ params: { pid: 'p1' } }],
		fallback: true,
	};
};

export default ProductDetailPage;

// Dynamic routing - static path is needed, the page is created just in time when the params get injected into browser.
// fallback(대체페이지) -
