import React from "react";
import "./form.css";

// for videos
export * from "./Input";
export * from "./FormBtn";
export * from "./Label";
// for videos

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return <input className={"form-control " + props.inputClass} {...props} />;
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className={props.className}>
      {props.button}
    </button>
  );
}

export function Select(props) {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      className="btn btn-secondary dropdown-toggle"
    >
      {props.data.map((o, i) => (
        <option className="dropdown-item" key={i} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
}
