import React, {useState, useEffect, useDebugValue} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AddPersonForm(props) {
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
      <input type="text" placeholder="Add new phone" onChange={handleChangePhone} value={phone}></input>     
      <button  type='submit'>ADD</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;

  const listItems = arr.map((val, index) =>
    <div className='contacts' key={index}><p id='val'>{val}</p></div>
  );

  
  return listItems;
}



function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name, phone) {
    let informations = "Contact name: " + name + "\n Phone number: " + phone;
    setContacts([...contacts, informations]);
  }




  return (
    <div>
      <div>
        <AddPersonForm handleSubmit={addPerson} />
      </div>
      <div id='peoplelist'>
        <PeopleList data={contacts}/>
      </div>
    </div>
  );
}

const contacts = [];

const el = <ContactManager data={contacts}/>;

ReactDOM.render(
  el, 
  document.getElementById('maincontent_contactmenager')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
