import React from "react";
import { arrayItems } from "../AIOptions";
import { v4 as uuidv4, v4 } from 'uuid';

const OptionSelection = ({ arrayItems, selectOption }) => {
  return (
    <>
      <h1 className="heading">ChatGPT Clone</h1>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h4 key={uuidv4()}>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OptionSelection;
