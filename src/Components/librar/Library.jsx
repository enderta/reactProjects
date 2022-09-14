import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleDoubleRight,faAngleDoubleLeft,faAngleLeft} from '@fortawesome/free-solid-svg-icons'



const Library = () => {
    const [books, setBooks] = React.useState([])

   React.useEffect(() => {
        fetch('https://fakerapi.it/api/v1/books?_quantity=10')
            .then(response => response.json())
            .then(data => setBooks(data.data))
    }, [])

    console.log(books)
  return (
    <div>
      
        <main role="main" id="spapp" className="container">
  <section id="dashboard" data-load="dashboard.html" className="" />
  <section id="users" data-load="users.html" className="spapp-created">
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <div className="portlet-title">
        <span style={{ float: "right" }}>
          <a
            className="btn btn-lg btn-outline btn-primary btn-sm"
            href="tpl/add-user.html"
            data-target="#ajax"
            data-toggle="modal"
          >
            <i className="fa fa-plus" aria-hidden="true" /> Add User
          </a>
        </span>
        <h3>User Management</h3>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">User Group</label>
            <select
              id="user_groups"
              className="form-control select2"
              onchange="Users.get_users();"
            >
              <option value="null" selected="selected">
                ALL
              </option>
              <option value={2}>Librarian</option>
              <option value={3}>Students</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="control-label">Status</label>
            <select
              id="user_status"
              className="form-control select2"
              onchange="Users.get_users();"
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>
        </div>
      </div>
      <div id="tbl_users_wrapper" className="dataTables_wrapper no-footer">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="dataTables_length" id="tbl_users_length">
              <label>
                Show{" "}
                <select
                  name="tbl_users_length"
                  aria-controls="tbl_users"
                  className="form-control input-sm input-xsmall input-inline"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={200}>200</option>
                  <option value={500}>500</option>
                </select>{" "}
                records
              </label>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div
              id="tbl_users_filter"
              className="dataTables_filter"
              style={{ textAlign: "right" }}
            >
              <label>
                Search:
                <input
                  type="search"
                  className="form-control input-sm input-small input-inline"
                  placeholder=""
                  aria-controls="tbl_users"
                />
              </label>
            </div>
          </div>
          <div
            id="tbl_users_processing"
            className="dataTables_processing"
            style={{ display: "none" }}
          >
            <div className="loading-message loading-message-boxed">
              <img src="./img/loading-spinner-grey.gif" align="" />
              <span>&nbsp;&nbsp;LOADING...</span>
            </div>
          </div>
        </div>
        <div className="table-scrollable">
          <table
            className="table table-striped table-bordered table-hover table-header-fixed dataTable no-footer"
            id="tbl_users"
            role="grid"
            aria-describedby="tbl_users_info"
            style={{ width: 1082 }}
          >
            <thead>
              <tr role="row">
                <th
                  data-name="actions"
                  className="sorting_disabled"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 111 }}
                  aria-label="Actions"
                >
                  Actions
                </th>
                <th
                  data-name="id"
                  className="sorting_desc"
                  tabIndex={0}
                  aria-controls="tbl_users"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 90 }}
                  aria-sort="descending"
                  aria-label="User ID: activate to sort column ascending"
                >
                  User ID
                </th>
                <th
                  data-name="full_name"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="tbl_users"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 161 }}
                  aria-label="Full Name: activate to sort column ascending"
                >
                  Full Name
                </th>
                <th
                  data-name="email"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="tbl_users"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 278 }}
                  aria-label="Email: activate to sort column ascending"
                >
                  Email
                </th>
                <th
                  data-name="group_name"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="tbl_users"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 80 }}
                  aria-label="Group: activate to sort column ascending"
                >
                  Group
                </th>
                <th
                  data-name="status"
                  className="sorting"
                  tabIndex={0}
                  aria-controls="tbl_users"
                  rowSpan={1}
                  colSpan={1}
                  style={{ width: 81 }}
                  aria-label="Status: activate to sort column ascending"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) => {
                    return (
                        <tr role="row" className="odd">
                        <td>
                            <a
                            className="btn btn-xs btn-default"
                            href="tpl/edit-user.html"
                            data-target="#ajax"
                            data-toggle="modal"
                            >
                            <i className="fa fa-edit" />
                            </a>
                            <a
                            className="btn btn-xs btn-default"
                            href="javascript:;"
                            onclick="Users.delete_user(1);"
                            >
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        <td className="sorting_1">{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.published}</td>
                        <td>{book.publisher}</td>
                        
                        </tr>
                    );
                    })
              }
                        
              </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <div
              className="dataTables_info"
              id="tbl_users_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 10 of 978 entries
            </div>
          </div>
          <div className="col-md-7 col-sm-7">
            <div
              className="dataTables_paginate paging_bootstrap_full_number"
              id="tbl_users_paginate"
              style={{ borderBottom: "unset", textAlign: "right" }}
            >
              <ul className="pagination" style={{ visibility: "visible" }}>
                <li className="page-item prev disabled">
                  <a href="#" className="page-link" title="First">
                   <i>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                   </i>
                  </a>
                </li>
                <li className="page-item prev disabled">
                  <a href="#" className="page-link" title="Prev">
                   <i>
                    <FontAwesomeIcon icon={faAngleLeft} />
                   </i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item next">
                  <a href="#" className="page-link" title="Next">
                   
                    <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                    </i>
                    
                  </a>
                </li>
                <li className="page-item next">
                  <a href="#" className="page-link" title="Last">
                    <i>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </i>
                                      </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        id="edit_user_btn"
        href="tpl/edit-user.html"
        data-target="#ajax"
        data-toggle="modal"
      />
    </div>
    <div className="modal fade" tabIndex={-1} id="ajax" role="basic">
      <div className="modal-dialog modal-lg" role="dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img
              src="./img/loading-spinner-grey.gif"
              alt=""
              className="loading"
            />
            <span> &nbsp;&nbsp;Loading... </span>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade hide"
      id="mdl_manuel_add_user_card"
      tabIndex={-1}
      role="document"
      aria-hidden="true"
      data-keyboard="false"
    >
      <form
        id="manuel_add_user_card"
        action="#"
        className="form-horizontal"
        noValidate="novalidate"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{ boxShadow: "0 5px 20px rgba(0, 0, 0, 0.88)" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Add Card</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <div className="form-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label">CSN</label>
                        <input
                          type="text"
                          name="csn"
                          className="form-control"
                          placeholder="CSN"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label">Status</label>
                        <select
                          id="status"
                          name="status"
                          className="form-control"
                        >
                          <option value="ACTIVE">ACTIVE</option>
                          <option value="INACTIVE">INACTIVE</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input type="hidden" name="id" className="form-control" />
            </div>
            <div className="modal-footer">
              <input
                type="button"
                data-dismiss="modal"
                className="btn dark btn-outline"
                defaultValue="Close"
              />
              <input
                type="submit"
                className="btn btn-primary"
                defaultValue="Save"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section id="books" data-load="books.html" />
</main>

    </div>
  )
}

export default Library