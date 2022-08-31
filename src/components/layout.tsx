import NavBar from './nav';
// React 의 Children 기능은 Vue 의 slot 기능과 같음.

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};
