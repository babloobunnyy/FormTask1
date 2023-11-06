import React, {useState } from 'react';
import './form.css';
import {firestore} from './firebase';
import {addDoc,collection} from "@firebase/firestore"


function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const ref= collection(firestore,"information");
  

  const handlePhoneNumberChange = (event) => {
    const input = event.target;
    const inputValue = input.value;

    const numericPattern = /^[0-9\s]+$/;

    if (numericPattern.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
    else {
        setPhoneNumber('');
      }
    };   


    const check = (e)=>{
      e.preventDefault();
      if (name===''||address===''||dob===''||phoneNumber===''||email==='') {
        alert("Some field are missed. Please fill the complete forum")
        
      } else {
        let data={
          information:{
            Name:name,
            Email:email,
            Date_of_Birth:dob,
            Address:address,
            PhoneNumber:phoneNumber,
          }
        }
  
        try{
          addDoc(ref,data);
        }catch(e){
          console.log(e);
        }
        alert("The data as been submitted successfully!")
        handleClearClick()
        
      }
      
    };


  const handleClearClick = () => {
    setName('');
    setEmail('');
    setDob('');
    setAddress('');
    setPhoneNumber('');
    setGender('');
  };
  

  return (
    <div className='form'>
      <div className='container'>
        <div className="title">Registration</div>
        <div className='content'>
          <form id="registration-form" action="#" method="post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Date-of-Birth</span>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phoneNumber}
                  placeholder="Enter your phonenumber"
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
            </div>
            <div className="gender-details">
            <input type="radio" name="gender" value="male" id="dot-1"/>
                        <input type="radio" name="gender" value="female" id="dot-2" />
                        <input type="radio" name="gender" value={gender} id="dot-3" />
                        <span class="gender-title">Gender</span>
                        <div class="category">
                            <label for="dot-1">
                            <span class="dot one"></span>
                            <span class="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span class="gender">Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span class="gender">Prefer not to say</span>
                            </label>
                        </div>
                        </div>
            <div className="button">
              <input type="submit" value="Register" onClick={check}/>
              <input type="button" value="Clear" onClick={handleClearClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
