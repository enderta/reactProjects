import React from 'react';

const DropDown = () => {
    const [opts, setOpts] = React.useState([]);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {
                setOpts(data);
            })
    },[]);
    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <select id="showSelect" onChange={handleChange}>
                {Array.from(new Set(opts.flatMap(x => x.genres))).map((item, index) => {
                    return <option key={index} value={item}>{item}</option>

                }
                )}
            </select>
            {
                opts.filter((item) => item.genres.includes(search)).map((item, index) => {
                    return(
                        <div key={item.id} className="show" style={{"height":"100%","width":"100%"}}>
                            <img src={item.image.medium} alt={item.name} style={{"height":"300px","width":"300px"}}/>
                            <h2>{item.name}</h2>
                            <p >{item.summary}</p>
                            <p style={{"padding":"0","fontWeight":"bolder"}}>Genres:</p>
                            <p style={{"padding":"0"}}>{item.genres[0]}</p>
                            <p style={{"padding":"0"}}>{item.genres[1]}</p>
                            <p style={{"padding":"0"}}>{item.genres[2]}</p>

                        </div>
                    )

                }
                )
            }

            </div>



    );
};

export default DropDown;