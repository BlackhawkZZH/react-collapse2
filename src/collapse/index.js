import React, { Fragment, useState } from "react";
import "./index.css";

const Collapse = props => {
  const { data } = props;

  const getInitItems = () => {
    return data.map((item, idx) => {
      item.isShow = false;
      return item;
    });
  };

  let [items, setItems] = useState(getInitItems());

  const handler = idx => {
    let item = items[idx];
    item.isShow = !item.isShow;
    items[idx] = { ...item };
    setItems(items.slice());
  };

 
    return items.map((item, idx) => {
      return (
        <Fragment key={idx}>
          <div className="title" onClick={() => handler(idx)}>
            {item.title}
          </div>
          <div className={item.isShow ? "content" : "hidden"}>
            {item.content}
          </div>
        </Fragment>
      );
    });
 

  
};

export default Collapse;
