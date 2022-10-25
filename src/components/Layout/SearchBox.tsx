import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { AutocompleteInput } from "@components/AutoCompleteInput";
import type { BrandType } from "types";

interface Form {
  id: string;
  search: string;
}

const SearchBox = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [brands, setBrand] = useState<BrandType[] | undefined>([]);
  const [brandId, setBrandId] = useState("");

  const { register, handleSubmit } = useForm<Form>();

  const {
    query: { id, search },
  } = router;

  const brandData: BrandType[] | undefined = queryClient.getQueryData([
    "brand-list",
  ]);

  const onSubmit: SubmitHandler<Form> = data => {
    router.push(`/brand/${brandId}?search=${data.search}`);
  };

  useEffect(() => {
    setBrand(brandData);
  }, [brandData]);

  const handleSelectSearchedBrand = ({ id }: { id: string }) => setBrandId(id);

  return (
    <>
      <SearchWrap onSubmit={handleSubmit(onSubmit)}>
        <div className="search_brand">
          <AutocompleteInput
            items={brands?.map(item => ({
              id: item.id,
              value: `${item.name?.EN} / ${item.name?.KR}`,
            }))}
            placeholder="Brand"
            initialListLimit={10}
            selectedItemId={id}
            onSelect={handleSelectSearchedBrand}
            value={brandId}
          />
        </div>
        <div className="search_totall">
          <input
            {...register("search")}
            className="searchbox"
            type="text"
            placeholder="Search for barcode, product, brand"
            defaultValue={search}
          />
          <button className="search_btn" type="submit">
            <Image
              src="/img/icon-search.svg"
              alt="search button"
              width="25px"
              height="24px"
            />
          </button>
        </div>
        <Link href={`/cart`}>
          <a className="shopping_basket">
            {/* TODO: setup Cart store */}
            {/* {cartItems.length && (
                <span className="count">{cartItems.length}</span>
              )} */}
            <Image
              src="/img/icon-shopping.svg"
              alt="shopping basket"
              width="25px"
              height="24px"
            />
          </a>
        </Link>
      </SearchWrap>
    </>
  );
};

export default SearchBox;

const SearchWrap = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  .shopping_basket {
    padding: 10px;
    margin-left: 6.25rem;
  }
  .search_totall {
    position: relative;
    input {
      width: 26.25rem;
      padding: 0 3rem 0 1.1rem;
    }
    input:hover:not(:focus) {
      background-color: #f7fafc;
      color: #4a5568;
    }
  }

  .searchbox {
    border: 0;
    -webkit-box-shadow: 0 0 0 1px #cbd5e0;
    box-shadow: 0 0 0 1px #cbd5e0;
    height: 3rem;
    border-radius: 6px;
    background: url(../img/icon-selectbox.svg) no-repeat calc(100% - 14px) 50%;
  }

  .search_btn {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    left: auto;
    right: 18px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    background: inherit;
    cursor: pointer;
    border: none;
  }
`;
