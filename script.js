import {License} from 'License'

const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const dob = document.getElementById('dob')
const address = document.getElementById('address')
const license = document.getElementById('lnum')
const card = document.getElementById('card')

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const bday = document.getElementById('bday')
const street = document.getElementById('street')
const lic = document.getElementById('lic')

function submit(){
  const lic = new License(fName,lName,dob,address,license,card)

  firstName.innerHTML = lic.fName
}

console.log(new License('Curtis'))
console.log('Hello')