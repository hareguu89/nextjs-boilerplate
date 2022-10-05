// import { useEffect } from "react";
// import Router from "next/router";
import { useSession } from "next-auth/react";
import NavBar from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const { data, status } = useSession({
  //   required: true,
  // });
  // useEffect(() => {
  //   console.log(status);
  //   if (!data) {
  //     Router.push("/login");
  //   }
  // }, [data]);

  return (
    <>
      <div>
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
}
