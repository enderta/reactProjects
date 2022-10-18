import React from 'react';
import DropDown from "./DropDown";
import Episodes from "./Episodes";

const Header = () => {
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [opt, setOpt] = React.useState([]);


    const handleChange = (event) => {
        setSearch(event.target.value);

    }
    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                    setSearchResults(data);
                    setOpt(data);
                }
            )
    }, [])

    let filtered = search.length === 0 ?
        searchResults : searchResults.filter((item) => item.genres.includes(search[0].toUpperCase() + search.substring(1).toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())) || opt.filter((item) => item.genres.includes(search));
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="Search"
                                   aria-label="Recipient's username" aria-describedby="button-addon2"
                                   value={search}
                                   onChange={handleChange}
                            />

                        </div>
                        <div>
                            <select id="showSelect" onChange={handleChange}>
                                {Array.from(new Set(searchResults.flatMap(x => x.genres))).map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })}
                                }
                            </select>

                        </div>
                        <span>
                    <p>Found: {filtered.length} shows</p>
                </span>
                    </div>
                </div>
                <body>
                <div className="row" style={{width: '100%', "margin": "3px"}}>
                    {filtered.map((item) => (
                        <div className="col-3">
                            <div className="card" style={{"margin": "2px"}}>
                                <img src={item.image.medium} className="card-img-top" alt="..."/>
                                <div className="card-body">

                                    <p style={{"padding": "0", "fontWeight": "bolder"}}>Genres:</p>
                                    <p style={{"padding": "0"}}>{item.genres[0]}</p>
                                    <p style={{"padding": "0"}}>{item.genres[1] === undefined ? "Drama" : item.genres[1]}</p>
                                    <p style={{"padding": "0"}}>{
                                        item.genres[2] === undefined ? "Action" : item.genres[2]
                                    }
                                    </p>
                                    <ul>
                                        <li>
                                            <a href={`https://www.imdb.com/title/${item.externals.imdb}`}>IMDB</a>
                                        </li>
                                        <li>
                                            <a href="/episodes">Episodes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
                </body>
            </div>
        </div>
    );
}


export default Header;