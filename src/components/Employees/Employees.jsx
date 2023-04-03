import React from 'react'
import "./Employees.scss";

const Employees = (props) => {
const { teamArr } = props;

const employeeCards = teamArr.map((team, id) => (
    <><p className='employee-cards' key={id + 1}>
        {team.name} <br/> {team.role}</p>       
    </>       
));

console.log(employeeCards);



  return (
    <div>
        {employeeCards}
    </div>
  )
}

export default Employees