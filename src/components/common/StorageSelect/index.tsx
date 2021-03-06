import React from "react";
import LocalStorageApplier from "../LocalStorageApplier";

interface Props {
  onChange: (value: string) => void;
  value: string;
  localStorageKey: string;
  options: { label: string; value: string }[];
  placeHolder?: string;
  prepend?: string;
  [properties: string]: any;  //properties are spread onto the <select> element.
}

const StorageSelect: React.FC<Props> = ({
  onChange,
  value,
  options,
  localStorageKey,
  placeHolder = undefined,
  prepend,
  ...properties
}) => {

  // auto set first value of the dropdown as default.
  React.useEffect(() => {
    // when a placeholder is given do nothing!
    if(placeHolder)return;
    // when no value is passed from two-way binding also do not assign default.
    // if there is a local storage value it will be read out later in rendering.
    if(!value)return; 
    // call onchange.
    onChange(options[0].value);
  }, [placeHolder]);


  return (
    <>
      {
        <LocalStorageApplier
          onChange={(val) => onChange(val)}
          storageKey={localStorageKey}
          value={value}
        >
          <div className="input-group mb-3">
          {prepend ? <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">{prepend}</span>
          </div> : null}
          <select
            value={value}
            onChange={evt => onChange(evt.currentTarget.value)}
            {...properties}
          >
            {/**
             * When placeholder is undefined take the first value of options
             * as default value.
             */}
            {placeHolder ? (
              <option key={`SelectFormGroup_option_-1`} value="" disabled hidden>
                {placeHolder}
              </option>
            ) : (
              <option key={`SelectFormGroup_option_-1`} value={options[0].value} disabled hidden>
                {options[0].label}
              </option>
            )}

            {options.map((option, index) => (
              <option
                key={`SelectFormGroup_option_${index}`}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select></div>
        </LocalStorageApplier>
      }
    </>
  );
};

export default StorageSelect;
