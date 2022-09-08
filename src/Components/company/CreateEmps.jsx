import React from 'react'

const CreateEmps = (props) => {
    const [id, setId] = React.useState(props.s.length + 1)
    const [name, setName] = React.useState('')
    const[lastname, setLastname] = React.useState('')
    const [email, setEmail] = React.useState('')

   React.useEffect(() => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "id": id,
  "first_name": name,
  "last_name": lastname,
  "email_id": email
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/v1/employees/", requestOptions)
.then(response => response.json())
.then((result)=>{
    props.s([...props.c, result])

})
.catch(error => console.log('error', error));
    }, [id, name, lastname, email])

const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setLastname('')
    setEmail('')
}


  return (
    <div>
        <div>
            <h1>Create Users</h1>
        </div>
        <form className="needs-validation" noValidate="" >
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom01">First name</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom01"
        placeholder="First name"
        defaultValue="Mark"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Last name</label>
      <input
        type="text"
        className="form-control"
        id="validationCustom02"
        placeholder="Last name"
        defaultValue="Otto"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required=""
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustomUsername">Email</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="validationCustomUsername"
          placeholder="email"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
          aria-describedby="inputGroupPrepend"
          required=""
        />
        <div className="invalid-feedback">Please choose a username.</div>
      </div>
    </div>
  </div>
  <button onSubmit={handleSubmit} className="btn btn-primary" type="submit">
    Create a User
  </button>
</form>

    </div>
  )
}

export default CreateEmps