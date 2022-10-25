import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import styled from "styled-components";
import type {
  CategoryTopBrandsType,
  TopBrandSummaryType,
} from "types/topBrand";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  gap: 32px;
  z-index: 99;
  position: absolute;
  background: #2d3748;
  border-radius: 8px;
  margin-top: 30px;
  cursor: default;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;

  .name {
    color: #9a96f7;
    font-weight: 800;
  }
  .side {
    font-weight: 400;
    font-size: 10px;
    color: #718096;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 60px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  text-align: left;

  .brand-list-header {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  .brand-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    color: #a0aec0;
  }
  a:hover {
    color: white;
  }
  li {
    padding: 0;
  }
`;

interface IProps {
  data: CategoryTopBrandsType[] | undefined;
}

const TopBrandList = ({ data }: IProps) => {
  return (
    <>
      <div className="dropdown_menu">
        <Container>
          <Head>
            <span className="name">TOP 10 BRANDS</span>
            <span className="side">by Yesbee sales</span>
          </Head>
          <Article className="header_pop order_now_pop">
            {data?.map((catTopBrands: CategoryTopBrandsType) => (
              <ListContainer key={catTopBrands.category.id}>
                <div className="brand-list-header">
                  <h5>{catTopBrands.category.name}</h5>
                </div>
                <ul className="brand-list">
                  {catTopBrands.topBrands.map(
                    (topBrand: TopBrandSummaryType) => (
                      <li key={topBrand.id}>
                        <Link href={`/brand/${topBrand.id}`} passHref>
                          <a>{topBrand.name}</a>
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </ListContainer>
            ))}
          </Article>
        </Container>
      </div>
    </>
  );
};

export default TopBrandList;
