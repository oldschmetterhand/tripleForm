import React from "react";
import { TextInput } from "../../../@types/types";

interface props {
    options: TextInput
    onChange?: (value: string) => void
}

const TextFormGroup: React.FC<props> = ({options, onChange = undefined}) => {

    const [value, setValue] = React.useState<string>("");

    React.useEffect(()=>{
        if(!value)return;
        if(onChange)onChange(value);
    }, [value]);

    //small runtime validation to run only on mount
    React.useEffect(() => {
      if (options.type !== "text"){
        throw new TypeError(
            `Tried to generate a textInputFormGroup, which type is not set to 'text'. Input with label: ${options.label}`);}
      
      if (typeof options.value !== "string"){
        throw new TypeError(
        `You have to pass in a string, when the input type is set to 'text'. Error at input with label: ${options.label}`
      )}
    }, []);

    return (
    <div className="form-group">
        <label>{options.label}</label>
        <input
        required={options.required}
        className="form-control"
        type="text"
        id={options.id}
        placeholder={options.placeHolder}
        value={options.value}
        onChange={evt => setValue(evt.currentTarget.value)}
        />
    </div>); 
}


export default TextFormGroup;