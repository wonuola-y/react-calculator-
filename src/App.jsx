import React, { useState} from 'react'
import './App.css';


export default function App() {

  const [values, setValue] = useState('');
  const buttons = [];
  const btn = [9, 8, 7, 6, 5, 4 ,3, 2, 1, 0,'.']
  btn.forEach(i => buttons.push(
    <button onClick={ b =>{
      setValue(values + b.target.value)
    }}
    value = {i}
    key = {i}
    
    >{i}</button>
  ));

   function handleClick (e)  {
    setValue(values + e.target.value)
  }

    return (

    <div className='calculator-all'>
      <div className="alt">Alt school React Assignment</div>
      <div className="functions">
      <div className="output">
        {values}
      </div>
      <div className="symbols">
      <button className='clear' onClick={()=> setValue(values.substring(0, values.length -1))}>CLEAR</button>
<button className='all-clear' onClick={()=> setValue('')}>AC</button>
      </div>
<div className="all-keys">
<div className="keys">
  {buttons}
  <button onClick={ e => {
  try {
    setValue(
      String(eval(values)).length > 9 && String(eval(values)).includes('.') ? String(eval(values).toFixed(7)) : String (eval (values))
    )
  }
  catch(err){
console.log('warning');
  }
 
}}
value = '='
> = </button>
  </div>
 <div className="symbol"> 
 <button  onClick={handleClick} value="+"> +</button>

<button onClick={handleClick} value="-">-</button>
<button onClick={handleClick} value="*"> *</button>
<button onClick={handleClick} value="/">/</button>


 </div>
 
</div>
      </div>

 
 
</div>
     
  )
}
