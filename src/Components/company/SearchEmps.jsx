import React from 'react'

const SearchEmps = (props) => {
   




  return (
    <div>
   <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand">Company</a>
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.s}
        onChange={props.data}
      />
     
    </form>
  </nav>
    </div>
  )
}

export default SearchEmps