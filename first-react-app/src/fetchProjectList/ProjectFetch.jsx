import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { use } from 'react'

const ProjectFetch = () => {
    const [projects,setProjects] = useState([])
    const [fiteredProjects, setFilteredProjects] = useState([])
    useEffect(()=>{
        fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
        .then((response)=>response.json())
        // .then((data)=>setProjects(data))
        .then((data)=>setFilteredProjects(data))
    },[])
    console.log(projects);
    function handleFilter(x){
        console.log(x)
        setFilteredProjects(fiteredProjects.filter((p)=>p.ProjectName.toLowerCase().includes(x)))
    }

  return (
    <>
    <input type="text" onChange={(e)=>{handleFilter(e.target.value)}} />
    <table>
        <thead>
            <tr>
            <th>Sr no</th>
            <th>Project Name</th>
            </tr>
        </thead>
        <tbody>
      {fiteredProjects.map((p,i)=>(
        <tr key={i}>
            <td>{i+1}</td>
            <td>{p.ProjectName}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </>
  )
}

export default ProjectFetch
