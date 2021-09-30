import React, { useState } from 'react';
import { data } from './data';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [age, setAge] = useState('');
    const [status, setstatus] = useState('');
    // const [data, setData] = useState([]);
    // const array = [];
    // const changeHandler = (event) => {
    //     setName(event.target.value)
    //   }
    const submitButton = (e) => {

        e.preventDefault();
       var a=true;
        if(name.length > 10)
        {
            document.getElementById("name").innerHTML="Name leghth can not be greater than 10<br>";
            a=false;
            return a;
        }
        else
        {
            document.getElementById("name").innerHTML="";
            a=true;
            
        }
        
        if(age > 100 || age < 1)
        {
            document.getElementById("age").innerHTML="Age can not be greater than 100 or less than 1<br>";
            a=false;
            return a;

        }
        else
        {
            document.getElementById("age").innerHTML="";
            
        }

        let obj =
        {
            "name":name,
            "email":email,
            "age":age,
            "status":status,
        
        }
        // setData(oldArray => [...oldArray, obj]);
        console.log(data);
        data[data.length]=obj;
        console.log(data);
        
      
            
    }
   
    
    return (
        <>
        <div className="headerf">
            <h1>Login form</h1>
            </div>

        <div className="mainf">
            <form >
                <label >
                    Name:
                    <input  type="text" name="name"  placeholder="Enter Name" onChange={event => setName(event.target.value)} /> <br />
                </label>
                <span id="name"></span>
                
                <label>
                    Email:
                    <input type="text" name="email" placeholder="Enter email" onChange={event => setemail(event.target.value)} /> <br /> <br />
                  
                </label>
                
                <label >
                    Age:
                    <input type="number" name="age" placeholder="Enter age" onChange={event => setAge(event.target.value)} /> <br /> <br />
                    <span id="age"></span>
                </label>
                 
                <label>
                    Status:
                    <input type="text" name="status" placeholder="Enter status" onChange={event => setstatus(event.target.value)} /> <br /> <br />
                    
                </label>
                <button type="submit" onClick={submitButton}>Submit</button>
            </form>
        </div>


        </>
    )
}




export default Login;
