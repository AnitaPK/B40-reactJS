import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const DeleteBrand = ({
  show,
  handleClose,
  brand,
  handleBrandDelete,
}) => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    // console.log(brand);
    setLoading(true);
    if (!token) {
      alert("User is not authenticated.");
    }
    try {
     await axios.delete(
        `http://localhost:7000/brand/deleteBrand/${brand.brand_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleBrandDelete(brand.brand_id);
    } catch (error) {
      console.error("Error deleting category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete this brand? This action cannot be
          undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBrand;
