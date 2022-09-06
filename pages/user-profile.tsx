import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';

const UserProfile: NextPage = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
	return <h1>{props.username}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
	// const { params, req, res } = context;

	const username = new Promise(function (resolve) {
		const name = 'max';
		resolve(name);
	});
	console.log({ username });

	return {
		props: { username: 'max' },
	};
};

export default UserProfile;
