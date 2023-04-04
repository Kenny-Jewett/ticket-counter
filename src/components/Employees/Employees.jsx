import React from 'react'
import "./Employees.scss";
import Counter from "../Counter/Counter.jsx";

const Employees = (props) => {
const { teamArr } = props;

const employeeCards = teamArr.map((team, id) => (
    
    <div className='employee__cards' key={id + 1}>
        <p className='employee__cards--name' >
        {team.name} <br/> {team.role}</p> 
        <div className='counter__cards'>
            <Counter />
        </div>      
    </div> 
          
));

console.log(employeeCards);


  return (
    <div className='employee__container'>
        {employeeCards}
    </div>
  )
}

export default Employees