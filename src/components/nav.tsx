import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/login">
          <a>login</a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
