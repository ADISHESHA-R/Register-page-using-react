import React from 'react'
import './Register.css'

export default function Regsiter() {
  return (
    <>
    <div>
    <form>
        <h1><b><u>Register Here </u></b></h1>
        <label><b>Username: </b></label><input type="text" placeholder="Enter the user name"/>
        <br></br><br></br>
        <label><b>Email: </b></label><input type="email" placeholder="Enter the Email"/>
        <br></br><br></br>
        <label><b>Password: </b></label><input type="password" placeholder="Enter the password"/>
        <br></br><br></br>
        <label><b>Gender : </b>Male :</label><input type="radio"></input>
        <label> Female: </label><input type="radio"></input>
        <label> Transgender: </label><input type="radio"></input>
        <br></br><br></br>
        <label><b>DOB : </b>Year :</label><input type="text"></input>
        <label> Month: </label><input type="text"></input>
        <label> Date: </label><input type="text"></input>
        <br></br><br></br>
        <button><b>Register</b></button>
        </form>
    </div>
    </>
  )
}
