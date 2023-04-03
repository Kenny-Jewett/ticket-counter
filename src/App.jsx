import React from 'react'
import "./App.scss";
import team from "../src/data/team";
import Employees from './components/Employees/Employees';

const App = () => {


  
//Next start on counter


  return (
    <div>
      <Employees teamArr={team} />
    </div>
  )
}

export default App