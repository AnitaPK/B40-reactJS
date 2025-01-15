import React from 'react';

const Navbar = ({ rowCount, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Project Manager</a>
        <div className="d-flex">
          <span className="navbar-text me-3">
            Rows: {rowCount}
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search projects..."
            onChange={handleInputChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
