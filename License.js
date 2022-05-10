class License {
  constructor(firstName,lastName,dob,street,licNum){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = dob
    this.street = street
    this.licNum = licNum
  }

  get getfirstName(){
    return this.firstName
  }

  get getlastName(){
    return this.lastName
  }

  get getDob(){
    return this.dob
  }

  get getStreet(){
    return this.street
  }

  get getLicNum(){
    return this.licNum
  }
  
  
}

module.exports = License


