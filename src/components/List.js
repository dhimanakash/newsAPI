import React, { useReducer } from "react";
import "./list.css";
import data from "./data.json";
import ListItem from "./ListItem";
import { reducer } from "../reducer/reducer";
const List = () => {
  // const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <div className="container-fluid row">
        {data.map((val) => (
          <>
            <ListItem val={val} />
          </>
        ))}
      </div>
    </>
  );
};

export default List;
