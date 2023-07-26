import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';

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