import { useState } from "react";


const UseGeneratedPassword = () => {
    const [password , setPassword] = useState('');
    const [error , setError] = useState('')

    const generatePassword = (checkboxdata , length) =>  {

        let charset = '';
        let generatedPassword = ''

        const selectedOption = checkboxdata.filter((curElem)=> curElem.state)


        if(selectedOption.length === 0 ){
            setPassword('')
            setError('Please select one option')
            return;
        }

        selectedOption.forEach(element => {
            switch(element.title){
                case 'Include Uppercase Letters' :
                    charset += 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
                    break ;
                case 'Include Lowercase Letters' :
                    charset += 'abcdefghijklmnopqrstvwxyz'
                    break;   
                case 'Include Numbers' :
                    charset += '0123456789'
                    break;
                case 'Include Symbols' :
                    charset += '!@#%$&()*'    
                    break
                default :
                break;    
            }
            
        });

        for( var i = 0 ; i < length ;i++){
            let randomIndex = Math.floor(Math.random() * charset.length)
            generatedPassword += charset[randomIndex]
        }
    
    
        setPassword(generatedPassword)
        setError('')

    }
    

    return {password , error , generatePassword}

};


export default UseGeneratedPassword