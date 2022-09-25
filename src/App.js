import React from 'react';
import Mason from "./Components/masonry/Mason";
import './App.css';
const App = () => {
    const movies = [
        {
            title: "Color Out of Space",
            director: "Richard Stanley",
            type: "sci-fi",
            haveWatched: true,
        },
        {
            title: "A Twelve-Year Night",
            director: "Álvaro Brechner",
            type: "horror",
            haveWatched: false,
        },
        {
            title: "The Whistlers",
            director: "Corneliu Porumboiu",
            type: "comedy",
            haveWatched: true,
        },
        {
            title: "The Invisible Man",
            director: "Leigh Whannell",
            type: "horror",
            haveWatched: false,
        },
    ];

    const [mov,SetMov]=React.useState(movies)
    const [fav,SetFav]=React.useState({title: "The Invisible",director: "Leigh Whannell",type: "horror",haveWatched: false,})
    const [title,setTitle]=React.useState("");
    const [director,setDirector]=React.useState("");
    const [type,setType]=React.useState("");
    const [haveWatched,setHaveWatched]=React.useState(false);

    const handleChange=(e)=>{
        if(e.target.name==="title"){
            setTitle(e.target.value);
        }
        if(e.target.name==="director"){
            setDirector(e.target.value);
        }
        if(e.target.name==="type"){
            setType(e.target.value);
        }
        if(e.target.name==="haveWatched"){
            setHaveWatched(e.target.value);
        }
    }
    return (
        <div className="App">
            <div className={"form"}>
                <input type="text" name={"title"} placeholder={"title"} onChange={handleChange}/>
                <input type="text" name={"director"} placeholder={"director"} onChange={handleChange}/>
                <input type="text" name={"type"} placeholder={"type"} onChange={handleChange}/>
              <input type={"checkbox"} name={"haveWatched"} placeholder={"haveWatched"} onChange={handleChange}/>
                <button onClick={()=>{
                    SetMov([...mov,{title:title,director:director,type:type,haveWatched:haveWatched}])

                }
                }>Add</button>
            </div>
            <div className={"movies"}>
               <ul className={"list"}>
                     {mov.map((item,index)=>{
                            return <li key={index}>{item.title} {item.director} {item.type} {item.haveWatched}</li>

                     }
                        )}
                </ul>
            </div>
        </div>

    );
};

export default App;