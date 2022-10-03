import React from 'react';
import './tv.css'

const Header = () => {
    const [search, setSearch] = React.useState('Adventure');
    const [searchResults, setSearchResults] = React.useState([]);
    const [opt, setOpt] = React.useState([]);


    const handleChange = (event) => {
        setSearch(event.target.value);

    }
    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {

                    setSearchResults(data);
                    setOpt(data);
                }
            )
    }, [])

    console.log(searchResults.map((item) => item.name));
    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(response => response.json())
            .then(data => {
                    setOpt(data);
                }
            );
    }, []);
    let filtered = searchResults.filter((item) => item.genres.includes(search) || item.name.includes(search));


    return (
        <div>
            <div id="controlPanel">
                <span className="control">Filtering for </span>
                <input
                    id="showsSearchInput"
                    className="control"
                    type="text"
                    placeholder="search for a show"
                    defaultValue="mystery"
                    onChange={handleChange}
                    value={search}

                />
                <div className="control" id="filterSummary">
                    <h1>{opt.length}</h1>
                </div>
                <select id="showSelect">
                    {opt.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                    )}
                </select>
            </div>
            <div id="shows">
                {
                    filtered.map((item) => (
                        <div key={item.id} className="show">
                            <img src={item.image.medium} alt={item.name}/>
                            <h2>{item.name}</h2>
                            <p>{item.summary}</p>
                            <p>{item.genres[0]}</p>
                            <p>{item.genres[1]}</p>
                            <p>{item.genres[2]}</p>

                        </div>
                    ))

                }

            </div>

        </div>
    );
};

export default Header;