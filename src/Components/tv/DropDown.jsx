import React from 'react';

const DropDown = () => {
    const [opts, setOpts] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {
                setOpts(data);
            })
    },[]);
    const filterOpts= () => {
        let filtered = opts.filter((item) => item.genres.includes(search[0].toUpperCase() + search.slice(1).toLowerCase()) ||
            item.name.toLowerCase().includes(search.toLowerCase()));
        return filtered;
    }
    const handleSelect = (event) => {
        event.preventDefault();
    }
    console.log(filterOpts());

    return (
        <div>
            <select id="showSelect" onChange={handleSelect}>
                {Array.from(new Set(opts.flatMap(x => x.genres))).map((item, index) => {
                    return <option key={index} value={item}>{item}</option>

                }
                )}
            </select>
            {
                opts.filter((item)=>item.genres.includes(document.getElementById("showSelect").value)).map((item, index) => {
                    return <div key={index}>
                        <h1>{item.name}</h1>
                       {/* <img src={item.image.medium} alt=""/>*/}
                    </div>
                }
                )
            }

            </div>



    );
};

export default DropDown;