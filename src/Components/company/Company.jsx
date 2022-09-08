import React from 'react'
import SearchEmps from './SearchEmps'
import CreateEmps from './CreateEmps'
const Company = () => {
    const [filter, setFilter] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [emps, setEmps] = React.useState([])
   
    
    React.useEffect(() => {
      let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



let requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};
fetch('http://localhost:8080/api/v1/employees/', requestOptions)
    .then(response => response.json())
    .then((result)=>{
        setEmps(result)
        setFilter(result)
    })
    .catch(error => console.log('error', error));

    }, [])





const handleSearch = (e) => {
    setSearch(e.target.value)
    const filtered = emps.filter((emp) => {
        return emp.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilter(filtered)
    
}
const handleDelete = (id) => {
    const filtered = emps.filter((emp) => {
        return emp.id !== id
    })
    setEmps(filtered)
    setFilter(filtered)
}


  return (
    <div>
        <SearchEmps data={handleSearch} s={search} />
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
        {filter.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.emailId}</td>
                    <td>
                        <button /* onClick={handleDelete(item.id)} */   className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        })}
    </tbody>
</table>
        </div>
<div>
 {/*  <CreateEmps s={setEmps} c={emps} /> */}
</div>
    </div>
  )
}

export default Company