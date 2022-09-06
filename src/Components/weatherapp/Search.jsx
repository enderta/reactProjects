import React from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import './main.css'

const Search = ({onSearchCange}) => {
    const [search, setSearch] = React.useState(null)

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchCange(searchData)
    }
    const loadOptions = async (inputValue) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '07475edaadmsh706c2d5e735b7aep1e4912jsnbb5010132758',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        
       const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`, options)
        const response_1 = await response.json()
        return response_1.data.map((city) => {
            return {
                value: `${city.latitude},${city.longitude}`,
                label: `${city.name},${city.country}`
            }
        })
    }


         
  return (
    <div>
        <AsyncPaginate 
        palceholder="Search for the City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search