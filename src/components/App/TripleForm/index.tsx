import React from "react";
import ResponsiveForm from "../../common/ResponsiveForm";
import QueryBuilder from "../QueryBuilder"
import {
  QueryInput,
  SelectValue,
  TripleForm,
  RestPathVariableGroup
} from "../../../@types/types";
import { copyDeep } from "../../../utils/gamsUtils";

import { GAMSWidgetProps } from "../../common/GamsWidget";
// extending the prop-type of the GamsWidgetComponent
interface GAMSTripleFormProps extends GAMSWidgetProps {
  widgetDef?: TripleForm 
}


const TripleFormReact: React.FC<GAMSTripleFormProps> = ({
  widgetDef
}) => {
  
  //state constructs the query string
  const [query, setQuery] = React.useState<"" | string>("");

  // copy of widgetdef.gui.params
  // RestpathVariable type is manipulated by user -> React needs that for two-way binding.
  const [queryInputs, setInputs] = React.useState<
    RestPathVariableGroup[] | undefined
  >(undefined);

  const [inputIsValid, setInputIsValid] = React.useState<boolean | undefined>(
    undefined
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  // initial useEffect to copy data structure inside the gui.
  React.useEffect(() => {
    if(!widgetDef)return;
    if(!widgetDef.gui)return;
    setInputs(copyDeep(widgetDef.gui.params));
  }, [widgetDef]);

  //Use Effect build the query as url string
  React.useEffect(() => {
    if(!widgetDef)return;
    if (!queryInputs) return;
    let query = "";

    //delimiter set in widgetDefinition
    if(!widgetDef.gui)return;
    let paramDelimiter = widgetDef.gui.parameterDelimiter;

    queryInputs.forEach(restVargroup => {
      if (query.includes(restVargroup.restPathVariable))
        throw new TypeError(
          `Found RestPathVariable a second time: ${restVargroup.restPathVariable}`
        );
      if (query === "undefined" || !query) {
        query = `${restVargroup.restPathVariable}=`;
      } else {
        query += `&${restVargroup.restPathVariable}=`;
      }

      restVargroup.formGroups.forEach((queryInput, inputObjIndex) => {
        //check which type queryInput has
        if (queryInput.type === "text") {
          query += `${inputObjIndex === 0 ? "" : paramDelimiter}${
            queryInput.parameter
          }${queryInput.value}`;
        }

        //check if type is queryInput or autocomplete
        if (
          queryInput.type === "select" ||
          queryInput.type === "autocomplete"
        ) {
          //if array
          if (Array.isArray(queryInput.value)) {
            (queryInput.value as SelectValue[]).forEach(inputObj => {
              //if _selected property set to true
              if (inputObj._selected === true) {
                query += `${inputObjIndex === 0 ? "" : paramDelimiter}${
                  queryInput.parameter
                }${inputObj.value}`;
              }
            });
          } else {
            throw new TypeError(
              `Encountered a not array type inside an queryInput marked as 'select'. Input's label is: ${queryInput.label}`
            );
          }
        }
      });
    });
    if (query === "undefined") return setQuery("");
    setQuery(query);
  }, [queryInputs]);

  //validates when query changes.
  //sets inputIsValid state to true | false.
  React.useEffect(() => {
    if(!widgetDef)return;
    if (!queryInputs) return;
    try {
      queryInputs.forEach(restPathGroup => {
        restPathGroup.formGroups.forEach(formGroup => {
          if (!formGroup.value && formGroup.required) throw new TypeError();
          if (Array.isArray(formGroup.value) && formGroup.required) {
            let oneIsTrue = false;
            formGroup.value.forEach(input => {
              if (input._selected === true) oneIsTrue = true;
            });
            if (!oneIsTrue) throw new TypeError();
          }
        });
      });
      setInputIsValid(true);
    } catch (e) {
      setInputIsValid(false);
    }
  }, [query]);

  const handleSearch = (
    btnClickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(!widgetDef)return;
    btnClickEvent.preventDefault(); //prevents default submit action on form.
    if (!query)
      return alert("wählen Sie einen gültigen Wert für die Suche aus.");
    if (!queryInputs)
      throw new TypeError(
        "Cannot start a search without any formGroups defined for the tripleForm!"
      );
    if (!inputIsValid)
      return alert(
        "Bitte wählen Sie für alle Suchfelder einen gültigen Wert aus."
      );
    if(!widgetDef.gui)return;

    //last navigate to page
    let url = widgetDef.gui.queryStart + query;
    setLoading(true);
    window.location.href = encodeURI(url);
  };

  return (
    <div className="tripleform">
      {widgetDef && widgetDef.gui && queryInputs ? (
        <>
          <ResponsiveForm
            restPathGroups={queryInputs}
            setInputFields={setInputs}
            handleSearch={handleSearch}
            inputIsValid={inputIsValid}
            loading={loading}
            searchBtns={widgetDef.gui.searchBtns}
          ></ResponsiveForm>
          {/**
           * Display help to construct query via the query builder.
           * see TripleForm type -> only displayed when lifecycle set to develop
           */}
          {(widgetDef.lifecycle) && (widgetDef.lifecycle  === "develop") ? (
            <QueryBuilder query={query} queryStart={widgetDef.gui.queryStart} paramDelimiter={widgetDef.gui.parameterDelimiter}/>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default TripleFormReact;
