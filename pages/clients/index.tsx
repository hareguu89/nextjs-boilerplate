import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

// interface ClientProjectPageProps {}

const ClientProjectPage: NextPage = () => {
  const router = useRouter();
  const clients = [
    {
      id: 1,
      name: "maxi",
    },
    {
      id: 2,
      name: "manu",
    },
  ];

  return (
    <>
      <div>
        <h1>The projects of a Given Client</h1>
        <ul>
          {clients.map(client => {
            return (
              <li key={client.id}>
                <Link
                  href={{ pathname: "/clients/[id]", query: { id: client.id } }}
                >
                  {client.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ClientProjectPage;
