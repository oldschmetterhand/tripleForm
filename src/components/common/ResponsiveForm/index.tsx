import React from "react";
import SelectFormGroup from "../SelectFormGroup/index";
import TextFormGroup from "../TextFormGroup";
import {
  Input,
  SelectInput,
  TextInput,
  AutcompleteInput,
  RestPathVariableGroup,
  SelectValue
} from "../../../@types/types";
import Autocomplete from "../Autocomplete";
import zimUtils from "../../../utils/utils";
import { navigationUtils } from "../../../utils/navigation";

interface Props {
  restPathGroups: RestPathVariableGroup[];
  inputIsValid: boolean | undefined;
  setInputFields?: Function;
  handleSearch: (
    btnClickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  loading?: boolean;
  searchBtns?: {
    searchText: string,
    resetText: string
}
}

const ResponsiveForm: React.FC<Props> = ({
  restPathGroups,
  inputIsValid,
  setInputFields,
  handleSearch,
  loading = undefined,
  searchBtns
}) => {
  const generateTextFormGroup = (
    textInput: TextInput,
    inputFieldsIntern: Input[]
  ): JSX.Element | TypeError => {
    let keyId = `responsiveForm_TextFormGroup_${inputFieldsIntern.indexOf(
      textInput
    )}_${textInput.id}`;
    return (
      <TextFormGroup
        key={keyId}
        localStorageKey={keyId}
        options={textInput}
        onChange={value => onFormGroupChange(value, textInput)}
      ></TextFormGroup>
    );
  };

  const generateSelectFormGroup = (
    selectInput: SelectInput,
    inputGroups: Input[]
  ): JSX.Element | TypeError => {
    //first runtime validation
    runtimeValidateSelect(selectInput);
    let keyId = `ResponsiveForm_SelectFormGroup_${inputGroups.indexOf(
      selectInput
    )}_${selectInput.id}`;
    return (
      <SelectFormGroup
        key={keyId}
        localStorageKey={keyId}
        options={selectInput}
        onChange={value => onFormGroupChange(value, selectInput)}
      />
    );
  };

  const generateAutoCompleteFormGroup = (
    selectInput: AutcompleteInput,
    inputGroups: Input[]
  ) => {
    //first runtime validation
    runtimeValidateSelect(selectInput);
    let keyId = `ResponsiveForm_AutoComplete_${inputGroups.indexOf(
      selectInput
    )}_${selectInput.id}`;
    return (
      <Autocomplete
        id={`${Math.random() * 1000}`}
        key={keyId}
        autoCompleteOption={selectInput as AutcompleteInput}
        onchange={value => onFormGroupChange(value, selectInput)}
        localStorageKey={keyId}
      ></Autocomplete>
    );
  };

  const onFormGroupChange = (
    value: string,
    selectInput: AutcompleteInput | SelectInput | TextInput
  ) => {
    //when the type is text input need different procedure
    if (selectInput.type === "text") {
      //assign to intern input fields given value from input field
      selectInput.value = value;
      let formGroupsCopy = zimUtils.copyDeep(restPathGroups); //generates a deep copy of state
      return setInputFields ? setInputFields(() => formGroupsCopy) : null;
    }

    //case type is 'autocomplete' or 'select'

    //sets the _selected property to true from element linked
    //and others to false.
    let valueObjects: SelectValue[] = [...selectInput.value];
    valueObjects.forEach(select => (select._selected = select.value === value));

    //copy then set state (for resetting state errors`?)
    let formGroupsCopy = zimUtils.copyDeep(restPathGroups); //generates a deep copy of state
    return setInputFields ? setInputFields(() => formGroupsCopy) : null;
  };

  const runtimeValidateSelect = (
    selectInput: AutcompleteInput | SelectInput
  ): void | TypeError => {
    //first runtime validation
    if (typeof selectInput.value !== "object")
      throw new TypeError(
        `You have to pass in an array of objects if selected type of input is 'select'. Given input-label: ${selectInput.label}`
      );
    if (!Array.isArray(selectInput.value))
      throw new TypeError(
        `You have to pass in an array of objects if selected type of input is 'select'. Given input-label: ${selectInput.label}`
      );
    if (!selectInput.value[0].label || !selectInput.value[0].value)
      throw new TypeError(
        `You have to pass in an array of objects if selected type of input is 'select'. Given input-label: ${selectInput.label}`
      );
  };

  //state and useeffect only needed to make form fade in on render
  const [formOpacity, setFormOpacity] = React.useState<number>(0);
  React.useEffect(() => {
    let opacity = 0;
    let interval = setInterval(() => {
      opacity = opacity + 0.1;
      setFormOpacity(opacity);
      if (opacity > 1) clearInterval(interval);
    }, 40);
  }, []);

  return (
    //generate form with adequate defined form-groups.
    <form
      className="was-validated responsiveform"
      style={{ opacity: formOpacity }}
    >
      {//first iterate over different pathVarGroups
      restPathGroups.map((pathVarGroup: RestPathVariableGroup) => {
        //then over individual linked formgroups = Input type
        return (
          <div className="responsive-form--form-block">
            {" "}
            {pathVarGroup.formGroups.map(input => {
              if (input.type === "text") {
                return generateTextFormGroup(
                  input as TextInput,
                  pathVarGroup.formGroups
                );
              }
              if (input.type === "select") {
                return generateSelectFormGroup(
                  input as SelectInput,
                  pathVarGroup.formGroups
                );
              }
              if (input.type === "autocomplete") {
                return generateAutoCompleteFormGroup(
                  input as AutcompleteInput,
                  pathVarGroup.formGroups
                );
              }
            })}
          </div>
        );
      })}
      <div className="responsive-form--form-block responsive-form--button-block">
        <button
          className={`btn ${inputIsValid ? "btn-success" : "btn-warning"}`}
          onClick={evt => handleSearch(evt)}
        >
          {searchBtns ? searchBtns.searchText : "Suche"}
        </button>
        <button className="btn btn-light" onClick={(evt) =>  {evt.preventDefault(); navigationUtils.resetStorageReloadPage()} }>{searchBtns ? searchBtns.resetText : "Suche zurücksetzen"}</button>
        <div
          className="spinner-border tripleform--spinner"
          style={{ visibility: loading ? "inherit" : "hidden" }}
          role="status"
        ></div>
      </div>
    </form>
  );
};

export default ResponsiveForm;
