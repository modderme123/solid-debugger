import { JSONNode } from "./JSONNode";
import { Component, createEffect } from "solid-js";
import { contextKey } from "./context";
import "./tmp.css";

export const Root: Component<{ key?: string; value: object; onChange?: (v: object) => void }> = (props) => {
  // createEffect(()=>{

  //   console.log(props.value);
  // })
  return (
    <ul
      style={{
        "font-family": "'Nausti Sans',monospace",
        "list-style": "none",
        "margin": 0,
        "padding": 0,
        "padding-left": "1em",
      }}
    >
      <contextKey.Provider value={{}}>
        <JSONNode key={props.key} value={props.value} isParentExpanded={true} isParentArray={false} />
      </contextKey.Provider>
    </ul>
  );
};
