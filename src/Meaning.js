import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <div className="example">{definition.example}</div>
            </p>{" "}
          </div>
        );
      })}
    </div>
  );
}
