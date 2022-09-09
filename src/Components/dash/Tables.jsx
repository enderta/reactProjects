import React from 'react'

const Tables = () => {
    const [inflation, setInflation] = React.useState([])
    React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '07475edaadmsh706c2d5e735b7aep1e4912jsnbb5010132758',
            'X-RapidAPI-Host': 'inflation-by-api-ninjas.p.rapidapi.com'
          }
        };
        
        fetch('https://inflation-by-api-ninjas.p.rapidapi.com/v1/inflation', options)
          .then(response => response.json())
          .then(data => {
            let c = [];
            c.push(['Country', 'Inflation']);
            data.forEach(element => {
                c.push([element.country, element.monthly_rate_pct]);
            });
            setInflation(c)
           
          }
          )
      }, [])
        console.log(inflation)
  return (
    <>
    <div>
    <table className="table table-sm table-dark" style={{"width":"1000px","height":"800px","margin":"2px"}}> 
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Inflation</th>
        </tr>
    </thead>
    <tbody>
        {inflation.map((emp) => {
            return (
                <tr key={emp.id}>
                    <th scope="row">{emp.id}</th>
                    <td>{emp[0]}</td>
                    <td>{emp[1]}</td>
                    </tr>
            )
        })}
    </tbody>
    
        </table>
    </div>
    </>
       
       
       
    
  )
}

export default Tables