import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { SiteType } from "src/utils/Enums";

const TopContact = styled.div`
  background-color: #201f49;
  height: 49px;
  display: flex;
  padding: 13.5px 45px;
  justify-content: space-between;
  align-items: center;
`;

const Contact = styled.ul<{ gap?: string }>`
  display: flex;
  ${props => (props.gap ? `gap: ${props.gap};` : null)};
  & li {
    display: flex;
    align-items: center;
    color: white;
    a {
      display: flex;
      justify-items: flex-start;

      align-items: center;
      padding: 5px;
    }
  }
  & p {
    margin-left: 7.5px;
  }
`;

const TopBar = () => {
  return (
    <>
      <TopContact>
        <Contact gap="40px">
          <li>
            <Image
              src={`/img/icon-call.svg`}
              alt="contact number"
              width="16px"
              height="16px"
            />
            <p>+82-70-4772-9339</p>
          </li>
          <li>
            <Image
              src="/img/icon-mail.svg"
              alt="e-mail"
              width="16px"
              height="16px"
            />
            <p>yesbee@yesbee.com</p>
          </li>
        </Contact>
        <Contact gap="32px">
          <li>
            <Link href={SiteType.INSTAGRAMURL} passHref>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/img/icon-social3.svg"
                  width="19px"
                  height="18"
                  alt="instagram"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href={SiteType.INSTAGRAMURL} passHref>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/img/icon-social2.svg"
                  width="19px"
                  height="18"
                  alt="facebook"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href={SiteType.INSTAGRAMURL} passHref>
              <a target="_blank" rel="noreferrer">
                <Image
                  src="/img/icon-social1.svg"
                  width="19px"
                  height="18"
                  alt="medium"
                />
              </a>
            </Link>
          </li>
        </Contact>
      </TopContact>
    </>
  );
};

export default TopBar;
