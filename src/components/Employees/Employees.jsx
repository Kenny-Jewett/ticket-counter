import React from 'react'
import "./Employees.scss";
import Counter from "../Counter/Counter.jsx";

const Employees = (props) => {
const { teamArr } = props;

const employeeCards = teamArr.map((team, id) => (
    <>
    <div>
        <p className='employee__cards--name' key={id + 1}>
        {team.name} <br/> {team.role}</p> 
        <div className='counter__cards'>
            <Counter counterID={id + 1} />
        </div>      
    </div> 
    </>       
));

console.log(employeeCards);


  return (
    <div className='employee__cards'>
        {employeeCards}
    </div>
  )
}

export default Employees