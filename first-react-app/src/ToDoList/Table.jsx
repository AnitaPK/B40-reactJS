import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Project Name</th>
          <th>Details</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Priority</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.ProjectName}</td>
            <td>{project.Details}</td>
            <td>{new Date(project.startDate * 1000).toLocaleDateString()}</td>
            <td>{new Date(project.EndDate * 1000).toLocaleDateString()}</td>
            <td>{project.priority}</td>
            <td>{project.Department}</td>
            <td>{project.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
