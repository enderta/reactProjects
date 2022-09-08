import React from 'react'

const Tables = (props) => {
  return (
    <div>
        <table className="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((emp) => {
        return (
            <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email_id}</td>
                <td> <button className="btn btn-danger" onClick={() => props.on(emp.id)}>Delete</button></td>
                </tr>
        )
    })}


  </tbody>
  
  
</table>
    </div>
  )
}

export default Tables