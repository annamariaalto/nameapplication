import React from 'react';
import './App.css';
import Namelist from "./names.json";

//Parent component
const App = (props) => {
   return (
    <div>
      <div className="App">     
        <Raw persons={Namelist.names}/>
        <hr></hr>
        <Popularity persons={Namelist.names}/>
        <hr></hr>
        <Alphabethically persons={Namelist.names}/>
        <hr></hr>
        <Total persons={Namelist.names}/>
        <hr></hr>
        <Length persons={Namelist.names}/>
        <hr></hr>
      </div>
    </div>
   );
}

//Child component 1 - Display raw data
const Raw = (props) => {
  return (    
    <div className="Raw">
      <h3>Display raw data</h3>
      {props.persons.map((item, i) => (
        <div key={i} style={{margin: '30px'}}>
        <div>{`Name: ${item.name}`}</div>
        <div>{`Amount: ${item.amount}`}</div>
        </div>      
      ))
      }
    </div>
  )
}

//Child component 2 - List names and amounts, order by amount, most popular first
const Popularity = (props) => {
  return (    
    <div className="Popularity">
      <h3>Display by popularity</h3>
      {props.persons.sort((a, b) => a.amount > b.amount ? -1 : 1 )
      .map((item, i) => (
        <div key={i} style={{margin: '30px'}}>
        <div>{`Name: ${item.name}`}</div>
        <div>{`Amount: ${item.amount}`}</div>
        </div>  
      ))
      } 
    </div>
  )
}

// Child component 3 - List names in alphabetical order
const Alphabethically = (props) => {
  return (
    <div className="Alphabethically">
      <h3>Display Alphabethically</h3>
      {props.persons.sort((a, b) => a.name > b.name ? 1 : -1)
      .map((item, i) => (
        <div key={i} style={{margin: '30px'}}>
        <div>{`Name: ${item.name}`}</div>
        <div>{`Amount: ${item.amount}`}</div> 
        </div>
      ))
      }
    </div>
  )
}

//Child component 4 - Return the total amount of all the names
const Total = (props) => {

  const totalAmount = props.persons.reduce((allNames, person) => allNames + person.amount, 0);
  
  return (
    <div className="Total">
      <h3>Display the total amount of all the names</h3>
      <div>Total amount of all the names: {totalAmount}</div>
    </div>
    
  )
}

//Child component 5 - Return the amount of the name given as a parameter
const Length = (props) => {

  const arrayLength = props.persons.length;

  return (
     <div className="arrayLength">
       <h3>Display the total amount of given inputs</h3>
       <div>Total amount of inputs: {arrayLength}</div>
     </div>
  )
}

export default App;
