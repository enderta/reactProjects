import React from 'react'

const SearchEmps = (props) => {
   




  return (
    <div>
   <nav className="navbar navbar-dark bg-dark">
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
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
    </div>
  )
}

export default SearchEmps