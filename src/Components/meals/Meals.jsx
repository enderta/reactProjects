import React from 'react'
import { useState,useEffect } from 'react'
import './meal.css'

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const Meals = () => {
const [meals, setMeals] = useState([])
const [loading, setLoading] = useState(false)
const [searchTerm, setSearchTerm] = useState('')

useEffect(() => {
    setLoading(true)
    fetch(allMealsUrl)
        .then((res) => res.json())
        .then((data) => {
            setMeals(data.meals)
            setLoading(false)
        })
}, [])

const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals)
                setLoading(false)
            })
    }
}
const handleChange = (e) => {
    setSearchTerm(e.target.value)
}
if (loading) {
    return <h2 className='section-title'>Loading...</h2>
}
if (meals.length < 1) {
    return <section className="section" >
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }
  const handelRandomMeal = () => {
    setLoading(true)
    fetch(randomMealUrl)
        .then((res) => res.json())
        .then((data) => {
            setMeals(data.meals)
            setLoading(false)
        })
}


console.log(meals)

  return (
    <>
    <h2 >Meals</h2>
    <form onSubmit={handleSubmit} className="search-form">
        <input type="text" placeholder="Search" className="form-input" value={searchTerm} onChange={handleChange} />
        <button type="submit" className="submit-btn">Search</button>
        <button onClick={handelRandomMeal} className="submit-btn">Random Meal</button>

    </form>
    
    <section className="section">
        
        <div className="section">
            {meals.map((meal) => {
                const { idMeal, strMeal, strMealThumb, strCategory, strArea } = meal
                return (
                    <article key={idMeal} className="meal">
                        <img src={strMealThumb} alt={strMeal} />
                        <div >
                            <h4>{strMeal}</h4>
                            <p>{strCategory}</p>
                            <p>{strArea}</p>
                            <a href={meal.strYoutube}>YouTube Recepie</a>
                            
                           

                        </div>
                    </article>
                )
            })}
        </div>
    </section>
    </>
    )
    

}

export default Meals