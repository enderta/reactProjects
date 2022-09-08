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
    firstName('')
    lastName('')
    email('')
  })
  .catch(error => console.log('error', error));
  
  }

  return (
    <>
    <div>
      <h1>Create A User</h1>
    </div>
    <div style={{"border":"solid 1px","width":"200%"}} >
      <form onSubmit={handleSubmit} className="needs-validation" noValidate="">
      <div className="form-row" >
    <div className="col-md-4 mb-3" style={{"width":"100%"}}>
      <label htmlFor="validationCustom01">First name</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom01"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        defaultValue="Mark"
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3" style={{"width":"100%"}}>
      <label htmlFor="validationCustom02">Last name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        id="validationCustom02"
        placeholder="Last name"
        defaultValue="Otto"
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3" style={{"width":"100%"}}>
      <label htmlFor="validationCustom02">Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        id="validationCustom02"
        placeholder="Email"
        defaultValue="Otto"
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    </div>
  <button className="btn btn-primary" type="submit">
    Create a User
  </button>
      </form>
    </div>
    </>
    
  )
}

export default CreateEmps