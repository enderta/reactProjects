import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Create = () => {
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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    backgroundColor:'black',
    plugins: {
      legend: {
        position: 'top' 
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  let d=(inflation.map((emp) => {
    return (emp[0])
  }))
  let labels= d
  let e=(inflation.map((emp) => {
    return (emp[1])
  }))
  console.log(e)
  const data = {
    labels,
    datasets: [
      {
        label: 'enflation',
        data: e,
        
        backgroundColor: ' rgba(253,187,45,100)',
        
      },
    ]
  };
  return (
    <div>
  <Bar options={options} data={data} />
   </div>
  )
}

export default Create