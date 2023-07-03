import { useEffect, useState } from 'react';
import UseGeneratedPassword from './hooks/useGeneratePassword';
import PasswordChecker from './component/passwordStrengthChecker';

import './App.css'

function App() {
   

const [range , setRange] = useState(4);
const [copy ,  setCopy] = useState(false)

const [checkboxData, setCheckboxData] = useState([
  { title: "Include Uppercase Letters", state: false },
  { title: "Include Lowercase Letters", state: false },
  { title: "Include Numbers", state: false },
  { title: "Include Symbols", state: false }
]);

  const onCheckedHandler = (index) => {
    const newCheckBoxData = [...checkboxData]
    newCheckBoxData[index].state  = !newCheckBoxData[index].state
    setCheckboxData(checkboxData)
  }

  const { password , error , generatePassword}  = UseGeneratedPassword()

  const copyHandler = () => {
    setCopy(true)
    navigator.clipboard.writeText(password);

  }
  setTimeout(() => {
    setCopy(false)
  }, 2000);


 

  return (
        <div className = 'container'>
          <h1 style={{textAlign : 'center' , padding : '10px 0px ' ,color : 'blue' , marginBottom : '20px'}}>Password Generator</h1>
          
          {password && ( <div className = 'password'> 
            <p>{password}</p>
            <button className = 'common_btn' onClick={()=>copyHandler()}>{copy ? 'copied'  :'copy'}</button>
          </div>)}
          <div className='range_value'>
            <p>Select length</p>
            <p >{range}</p>
          </div>
          <div>
            <input type = 'range'
            className = 'range' 
            max = '20'  
            min = '4' 
            value = {range}  
            onChange = {(e)=>{setRange(e.target.value)}}
            />
          </div>

          <div className = 'input_container'>
            {checkboxData.map((ele , i)=>{
              return (
                <div className= 'checkbox' key = {i}>
                  <input type = 'checkbox' id = {`check${i}`} name={`check${i}`} checked = {ele.state} onChange = {()=>{onCheckedHandler(i)}}/>
                  <lable htmlFor= {`check${i}`} >{ele.title}</lable>
                </div>
              )
            })}

            {error && <p style={{color : 'red'}}>{error}</p>}
          </div>
            {password && <PasswordChecker password = {password}/>}
            <button className ='common_btn generate_btn' onClick={()=> generatePassword(checkboxData , range)}>GENERATE PASSWORG</button>
        </div>     
  )
}

export default App

