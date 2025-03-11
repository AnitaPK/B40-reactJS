import React, { useState } from 'react';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';

const ProductCard = ({ product, onProductUpdated, onProductDeleted }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
console.log(product, "In Product Card")
  return (
    <div className="card mb-3">
      {/* <img src={product.productImage || 'https://via.placeholder.com/100'} className="card-img-top" style={{height:"200px"}} alt={product.name} /> */}
      <div className="card-body">
        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">Category:<b> {product.category_id || 'N/A'}</b></p>
        <p className="card-text">Brand: <b>{product.brand_id || 'N/A'}</b></p>
        <p className="card-text">Price: <b>${product.price}</b></p>
        <p className="card-text">Available: <b>{product.stock > 0 ? <span className='text-success'>Yes</span> : <span className='text-warning'>No</span>}</b></p>
        <p className="card-text">Quantity: <b>{product.stock}</b></p>

        <button className="btn btn-warning me-2" onClick={() => setShowEditModal(true)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => setShowDeleteModal(true)}>
          Delete
        </button>

        <EditProductModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          product={product}
          onProductUpdated={onProductUpdated}
        />

        <DeleteProductModal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          product={product}
          onProductDeleted={onProductDeleted}
        />
      </div>
    </div>
  );
};

export default ProductCard;
