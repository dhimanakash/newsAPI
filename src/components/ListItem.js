import React from "react";

const ListItem = ({ val }) => {
  return (
    <div className="box col-lg-12 border border-primary m-2 shadow">
      <span className="name row text-primary">{val.source.name}</span>
      <span className="title row text-success">{val.title}</span>
      <span className="author row ">{val.author}</span>
      <span className="description row text-secondary">{val.description}</span>
    </div>
  );
};

export default ListItem;
