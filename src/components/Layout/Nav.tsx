import Link from "next/link";
import Div from "@components/Atoms/Div";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <Div as="header">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Div as="nav">
          <Div as="ul">
            {/* <Div as="li">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Div> */}
            <Div as="li">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </Div>
            <Div as="li">
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default NavBar;
