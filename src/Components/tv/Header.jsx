import React from 'react';
import './tv.css'
import DropDown from "./DropDown";
const Header = () => {
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [opt, setOpt] = React.useState([]);
    const [id, setId] = React.useState(1);




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

    console.log();

   let filtered=search.length===0?
       searchResults: searchResults.filter((item)=>item.genres.includes(search[0].toUpperCase()+search.slice(1).toLowerCase())||
           item.name.toLowerCase().includes(search.toLowerCase()))||opt.filter((item) => item.genres.includes(search));
    return (
        <div>
            <div>

            </div>
            <div id="controlPanel">
                <span >
                    <h1>Found: {filtered.length} shows</h1>
                </span>


            </div>
            <div>
                <span ><h1>Search</h1> </span>
                <div style={{"margin":"3px"}}>
                    <input
                        id="showsSearchInput"
                        className="control"
                        type="text"
                        placeholder="search for a show"
                        defaultValue="mystery"
                        onChange={handleChange}
                        value={search}

                    />
                </div>
            </div>
            <div>
                <select id="showSelect" onChange={handleChange}>
                    {Array.from(new Set(searchResults.flatMap(x => x.genres))).map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })}
                    }
                </select>
            </div>

            <div id="shows">
                {
                    filtered.map((item) => (
                        <div key={item.id} className="show" style={{"height":"100%","width":"100%"}}>
                            <img src={item.image.medium} alt={item.name} style={{"height":"300px","width":"300px"}}/>
                            <h2>{item.name}</h2>
                            <p >{item.summary}</p>
                            <p style={{"padding":"0","fontWeight":"bolder"}}>Genres:</p>
                            <p style={{"padding":"0"}}>{item.genres[0]}</p>
                            <p style={{"padding":"0"}}>{item.genres[1]}</p>
                            <p style={{"padding":"0"}}>{item.genres[2]}</p>

                        </div>
                    ))

                }


            </div>


        </div>
    );
};

export default Header;