import { useState } from "react";

export default function AddPersonForm(props) {
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");

  function e_handleChange(e) {
    setPerson(e.target.value);
    }


  function handleChangePhone(e) {
    setPhone(e.target.value);
  }


  function handleSubmit(e) {
    if(person !== '' && phone !== '') {
      props.handleSubmit(person, phone);
      setPerson('');
      setPhone('');
    }
    e.preventDefault();
  }

  return (
    <form id="topForm" onSubmit={handleSubmit} >
      <input type='text' placeholder='add new contact' value={person} onChange={e_handleChange}></input>
      <input type="text" placeholder="Add new phone number" onChange={handleChangePhone} value={phone}></input>     
      <button  type='submit'>ADD</button>
    </form>
  );
}