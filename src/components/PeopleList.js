import { useState } from "react";

export default function PeopleList(props) {
  const arr = props.data;

  const listItems = arr.map((val, index) =>
    <div className='contacts' key={index}><p id='val'>{val}</p></div>
  );

  
  return listItems;
}