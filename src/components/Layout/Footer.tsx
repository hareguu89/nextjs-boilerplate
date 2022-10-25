import Image from "next/image";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import styled from "styled-components";
import ToastInfoBody from "@components/ToastInfoBody";
import { SiteType } from "@utils/enums";

const Footer = styled.footer`
  display: flex;
  background-color: #3a394c;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;
`;

const Article = styled.article<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  min-height: 33vh;
  align-items: flex-start;
  box-shadow: 0.5px 0 0 #9a96f7;

  gap: ${({ gap }) => gap};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding: ${({ padding }) => padding};

  :last-child {
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  .about {
    color: #e2e8f0;
    font-weight: 700;
  }

  .overview img {
    width: 100%;
    max-width: 7rem;
  }

  p {
    color: #a0aec0;
    margin: 0.8rem 0 1.25rem;
    max-width: 19.5rem;
    line-height: 1.5;
    text-align: start;
  }
  h5 {
    text-align: start;
    font-weight: 700;
    font-size: 1.25rem;
    color: #f7fafc;
  }

  .link_wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
      color: #a0aec0;
      margin-bottom: 1.1rem;
      cursor: pointer;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  text-align: start;

  li {
    margin-right: 15px;
    a {
      color: #a0aec0;
    }
  }
  .contact_way {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 28px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  p {
    margin: 0;
  }
  .test {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    line-height: 10px;
  }
  .address_img {
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
  }
`;

const FooterBar = () => {
  const showToast = (message: string) => {
    toast(<ToastInfoBody message={message} />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 3000,
      closeButton: false,
      closeOnClick: false,
    });
  };

  const onCopy = (message: string) => (_: string, result: boolean) => {
    if (result) {
      showToast(message);
    }
  };

  return (
    <>
      <Footer>
        <Article className="overview" paddingRight="7.5rem" color="white">
          <Image
            width="112.4px;"
            height="29.3px; "
            src="/img/logo-footer.svg"
            alt="yesbee"
          />
          <p>
            Based in South Korea, Yesbee distributes K- Brand products including
            cosmetics, food, functional food, household supplies.
            <br />
            <br />
            Yesbee offers and guarantees 100% authentic products. If you are
            interested in K-brand products, feel free to contact our team for
            quotation & product details.
          </p>
          <div className="about">
            <Link
              href={{
                pathname: "/about",
                hash: "#one-stop-solution",
              }}
            >
              Why Yesbee ?
            </Link>
          </div>
        </Article>
        <Article gap="28px" padding="0 7.5rem">
          <h5>Contact</h5>
          <Ul>
            <li>
              <CopyToClipboard
                text={SiteType.SUPPORTEMAIL}
                onCopy={onCopy("Yesbee's E-mail address has been copied")}
              >
                <Image
                  width="28px"
                  height="28px"
                  src="/img/icon-footer1.svg"
                  alt="e-mail"
                />
              </CopyToClipboard>
            </li>
            <li>
              <Link passHref href={SiteType.KAKAOTALKCONTACT}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    width="28px"
                    height="28px"
                    src="/img/icon-footer2.svg"
                    alt="kakao"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link passHref href={SiteType.INSTAGRAMURL}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    width="28px"
                    height="28px"
                    src="/img/icon-footer3.svg"
                    alt="instagram"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link passHref href={SiteType.FACEBOOKURL}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    width="28px"
                    height="28px"
                    src="/img/icon-footer4.svg"
                    alt="facebook"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link passHref href={SiteType.MEDIUMURL}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    width="28px"
                    height="28px"
                    src="/img/icon-footer5.svg"
                    alt="medium"
                  />
                </a>
              </Link>
            </li>
          </Ul>
          <Div>
            <Address>
              <div className="address_img">
                <Image
                  src="/img/icon-office.svg"
                  alt="Headquarter Office"
                  width="14px"
                  height="14px"
                />
              </div>
              <div className="test">
                <p>Headquarter Office</p>
                <p>420, Dosan-daero, Gangnam-gu, Seoul, Korea, 06021</p>
              </div>
            </Address>
            <Address>
              <div className="address_img">
                <Image
                  width="14px"
                  height="14px"
                  src="/img/icon-warehouse.svg"
                  alt="Warehouse : Hive Center Incheon"
                />
              </div>
              <div>
                <p>Warehouse : Hive Center Incheon</p>
                <p>435-2, Wonchang-dong, Seo-gu, Incheon, Republic of Korea</p>
              </div>
            </Address>
          </Div>
        </Article>
        <Article className="more_info" gap="24px" paddingLeft="7.5rem">
          <h5>More Information</h5>
          <div className="link_wrap">
            <Link href={SiteType.COMPANYURL}>
              <a target="_blank" rel="noopener noreferrer">
                Company
              </a>
            </Link>
            <Link href={SiteType.PRIVATEPOLICY}>
              <a target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </Link>
            <Link href={SiteType.TERMANDCONDITON}>
              <a target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </Link>
          </div>
          <p className="copyright">
            Copyright © Yesbee. All Rights Reserved 2022
          </p>
        </Article>
      </Footer>
    </>
  );
};

export default FooterBar;
