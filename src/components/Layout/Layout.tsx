import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./Nav";
import TopBar from "./TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavContainer>
        <ToastContainer limit={3} />
        <TopBar />
        <NavBar />
      </NavContainer>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;
