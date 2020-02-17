import React from "react";

interface props {
    options: {value: string, label: string}[],
}

const SelectFormGroup:React.FC<props> = ({options}) => {

    const [selectedVal, setSelectedVal] = React.useState<string>(options[0].value);

    const handleSelection = (evt: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedVal(evt.currentTarget.value);
    }

  return (
    <div className="form-group">
        <label>Example multiple select - Selected value = {selectedVal}</label>
      <select className="form-control" value={selectedVal} onChange={(evt)=>handleSelection(evt)}>
        {options.map((option, index) => (
            <option key={`SelectFormGroup_option_${index}`} value={option.value}>{ option.label }</option>
        ))}
      </select>
    </div>
  );
};

export default SelectFormGroup;
