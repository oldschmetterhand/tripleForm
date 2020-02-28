import React from "react";
import LocalStorageApplier from "../LocalStorageApplier";

interface Props {
  onChange: (value: string) => void;
  value: string;
  localStorageKey: string;
  options: { label: string; value: string }[];
  placeHolder?: string;
  [properties: string]: any;
}

const StorageSelect: React.FC<Props> = ({
  onChange,
  value,
  options,
  localStorageKey,
  placeHolder = undefined,
  ...properties
}) => {
  return (
    <>
      {
        <LocalStorageApplier
          onChange={(val) => onChange(val)}
          storageKey={localStorageKey}
          value={value}
        >
          <select
            value={value}
            onChange={evt => onChange(evt.currentTarget.value)}
            {...properties}
          >
            {placeHolder ? (
              <option key={`SelectFormGroup_option_-1`} value="" disabled hidden>
                {placeHolder}
              </option>
            ) : (
              undefined
            )}

            {options.map((option, index) => (
              <option
                key={`SelectFormGroup_option_${index}`}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </LocalStorageApplier>
      }
    </>
  );
};

export default StorageSelect;
