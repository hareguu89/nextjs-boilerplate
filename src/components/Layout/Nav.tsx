import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, useQueries } from "react-query";
import styled from "styled-components";
import { AutocompleteInput } from "@components/AutoCompleteInput";
import TopBrandList from "@components/TopBrandList";
import { queryKey, queryFn, options } from "src/services/topbrand";
import { evalHasTopBrands, activeOnMenu } from "src/utils/composable";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const { data, isLoading, status } = useQuery(queryKey, queryFn, options);
  const router = useRouter();
  const { pathname } = router;

  const [showPickPopupMenu, setShowPickPopupMenu] = useState<boolean>(false);
  const [hasTopBrands, setHasTopBrands] = useState<boolean>(false);
  // boolean 체크 후에 topBrand length가 있을때 팝업오픈

  useEffect(() => {
    if (data) {
      setHasTopBrands(!!evalHasTopBrands(data));
    }
  }, [data]);

  return (
    <>
      <Nav>
        <Ul>
          <li>
            <Link href="/" passHref>
              <a className="logo-box">
                <Image
                  src="/img/logo-header1.svg"
                  alt="yesbee"
                  width="30px"
                  height="40px"
                />
                <Image
                  src="/img/logo-header2.svg"
                  alt="yesbee"
                  width="117px"
                  height="30px"
                />
              </a>
            </Link>
          </li>
          <Dropdown>
            <Link href="/order-now" passHref>
              ORDER&nbsp;NOW
            </Link>
            {<TopBrandList data={data} />}
          </Dropdown>
          <li className={activeOnMenu("/trend", pathname)}>
            <Link href="/trend">TREND</Link>
          </li>
          <Dropdown>
            <Image
              src="/img/title-emoji.png"
              alt="Pick"
              width="20px"
              height="20px"
            />
            PICK
            {
              <ul
                className="header_pop haedr_sub_menu"
                style={{ display: "block" }}
              >
                <li>
                  <Link href="/pick/yesbee-choice" passHref>
                    <a>Yesbee Choice</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pick/beauty-award" passHref>
                    <a>Beauty Award</a>
                  </Link>
                </li>
              </ul>
            }
          </Dropdown>
          <li className={activeOnMenu("/about", pathname)}>
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </li>
        </Ul>
        <SearchBox />
      </Nav>
    </>
  );
};

export default NavBar;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 42px;
  border-bottom: 1px solid #cbd5e0;
  font-weight: 500;
  color: #2d3748;
  background: white;
`;

const Ul = styled.ul`
  display: flex;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 14px;
    cursor: pointer;

    a {
      display: flex;
      gap: 9px;
    }
    .logo-box {
      margin-right: 56.25px;
    }
  }
  & li:hover {
    color: #6260dc;
  }
`;

const Dropdown = styled.li`
  &:hover .dropdown_menu {
    display: flex;
    position: relative;
    justify-content: center;
  }
  .dropdown_menu {
    display: none;
  }
`;
