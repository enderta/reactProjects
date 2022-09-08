import React from 'react'

const CreateEmps = (props) => {
  const [firstName,setFirstName] = React.useState('')
  const [lastName,setLastName] = React.useState('')
  const [email,setEmail] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
  const emp=props.c
  const newEmp = {
    firstName: firstName,
    lastName: lastName,
    email_id: email
  }
  fetch('http://localhost:8080/api/v1/employees/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(newEmp)
  })
  .then(response => response.json())
  .then((result)=>{
    props.s([...emp, result])
  })
  .catch(error => console.log('error', error));
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
      </form>
    </div>
  )
}

export default CreateEmps