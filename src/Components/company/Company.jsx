import React from 'react'
import SearchEmps from './SearchEmps'
import CreateEmps from './CreateEmps'
import Tables from './Tables'
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
    fetch(`http://localhost:8080/api/v1/employees/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then((result)=>{
        const newEmps = emps.filter((emp)=>{
            return emp.id !== id
        })
        setEmps(newEmps)
        setFilter(newEmps)
    })
    .catch(error => console.log('error', error));
}

  return (
    
    <div>
        <SearchEmps s={search} data={handleSearch} />
        <div className="container">
  <div className="row">
    <div className="col">
    <Tables data={emps} on={handleDelete} />
    </div>
    <div className="col" >
    <CreateEmps s={setEmps} c={emps} />
    </div>
    <div  />
    
  </div>
</div>

    </div>
  )
}

export default Company
