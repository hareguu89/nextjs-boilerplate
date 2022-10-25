import { useCallback, useEffect, useState } from "react";
import DatalistInput, {
  Filter,
  includesValueFilter,
} from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

interface IAutoCompleteInput {
  onSelect: any;
  selectedItemId: any;
  items: any;
  initialListLimit: any;
  error?: any;
  props?: any;
  placeholder: any;
  value?: any;
}

export const AutocompleteInput = ({
  onSelect,
  selectedItemId,
  items = [],
  initialListLimit = 20,
  error,
  placeholder,
  value,
}: IAutoCompleteInput) => {
  return (
    <>
      <DatalistInput
        label=""
        onSelect={onSelect}
        value={""}
        items={items}
        // inputProps={
        //   {
        //     required: true,
        //   }
        // }
        placeholder={placeholder}
        // filters={filters}
      />

      {error && (
        <div className="invalid-feedback">
          <img src="/img/icon_error.svg" alt="error" />
          <p>{error}</p>
        </div>
      )}
    </>
  );
};
