import React from 'react'

const PasswordChecker = ({password = ''}) => {

    let length = password.length


    let strength = '';

    if(length < 6 ){
        strength = 'Very week'
    } else if(length < 10){
        strength = 'Poor'
    }else  if(length < 13 ){
        strength = 'Medium'
    }else  if(length < 16){
        strength = 'Strong'
    } else{
        strength = 'Very Strong'
    }


  return (
    <div className='strength_check'> 

        <h4>Strength : - </h4>
        <p  className={strength === 'Very week' ? 'week' : strength === 'Poor' ? 'poor' : strength === 'Medium' ? 'Medium' : strength === 'Strong' ? 'Strong' : 'very_strong'}>{strength}</p>
    
    </div>
  )
}

export default PasswordChecker