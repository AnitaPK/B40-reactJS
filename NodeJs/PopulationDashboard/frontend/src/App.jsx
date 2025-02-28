import { useEffect, useState } from 'react'
import axios from 'axios'
import {ResponsiveContainer,BarChart,XAxis,YAxis,Tooltip,Legend, Bar } from 'recharts'
import './App.css'

function App() {
  const [TotalPopulation, setTotalPopulation] = useState()
  const [TotalCountries, setTotalCountries] = useState()
  const [TopTenPopulated, setTopTenPopulated] = useState([])

useEffect(()=>{
      axios.get('http://localhost:7000/TotalContries')
      .then(res=>setTotalCountries(res.data.totalCountries))

      axios.get('http://localhost:7000/TotalPopulation')
      .then(res=>setTotalPopulation(res.data.totalPop))

      axios.get('http://localhost:7000/Top-10-populated-countries')
      .then(res=>setTopTenPopulated(res.data.topTen))
})


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col bg-success"> TotalPopulation : {TotalPopulation}</div>
          <div className="col">Total Contries : {TotalCountries}</div>

        </div>
      </div>
      <hr></hr>
<div className="container">
      <ResponsiveContainer width="90%" height={250}>
                        <BarChart data={TopTenPopulated}>
                            <XAxis dataKey="Name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Population" fill="#28a745" barSize={50} />
                        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  )
}

export default App
