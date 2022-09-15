import React from 'react';

const Tables = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])


    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            users.map(user => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <p className="card-text">{user.name}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                                        View
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                                        Edit
                                                    </button>
                                                </div>
                                                <small className="text-muted">{user.email}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                            </div>
                        </div>
                    </div>
                </div>

    );
};

export default Tables;