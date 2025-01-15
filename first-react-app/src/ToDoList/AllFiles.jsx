import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Table from './Table';

const AllFiles = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = projects.filter((project) =>
      project.ProjectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="container mt-4">
        <Table data={filteredProjects} />
      </div>
    </div>
  );
};

export default AllFiles;
