import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {
  Table,
  Button,
  Badge,
  Dropdown,
  Form,
  InputGroup,
  OverlayTrigger,
  Tooltip,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { FiFilter } from "react-icons/fi";
// import { UserContext } from "../../context/userContext";

const ProductList = () => {
  // const { user } = useContext(UserContext);

  const [productCount, setProductCount] = useState();
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:7000/product/getAllProduct",
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      console.log("response.data",response.data);
      setProducts(response.data.products);
      setFilteredProduct(response.data.products);
    } catch (err) {
      setError("Error fetching products");
    }
  };

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/product/countProduct",
          // {
          //   headers: {
          //     Authorization: `Bearer ${localStorage.getItem("token")}`,
          //   },
          // }
        );
        setProductCount(response.data.count.totalProds);
      } catch (error) {
        console.error("Error fetching product count:", error);
      }
    };

    const fetchCategories = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:7000/category/getAllCategories",
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
        );
        setCategories(response.data.categories);
      } catch (err) {
        setError("Error fetching categories");
      }
    };

    fetchProductCount();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);
console.log("filteredProduct",filteredProduct)
console.log("categories", categories)
  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = selectedCategory
        ? product.category.name === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredProduct(filtered);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterProducts();
  };

  const handleCategorySelect = (categoryName) => {
    console.log(categoryName);
    setSelectedCategory(categoryName); 
    filterProducts(); 
    setFilterOpen(false);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Products
             <Badge bg="secondary">
             {productCount || 0}</Badge>
          </Link>
          <div className="d-flex align-items-center">
            <InputGroup className="me-2">
              <Form.Control
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
              />
              <InputGroup.Text>
                <CgSearch />
              </InputGroup.Text>
            </InputGroup>
            <DropdownButton
              id="dropdown-basic-button"
              title={<FiFilter size={24} />}
              show={filterOpen}
              onClick={() => setFilterOpen(!filterOpen)}
              variant="link"
              className="me-2"
            >
              <Dropdown.ItemText>Filter by Category</Dropdown.ItemText>
              {error && (
                <Dropdown.ItemText className="text-danger">
                  {error}
                </Dropdown.ItemText>
              )}

              {categories.map((category) => (
                <Dropdown.Item
                  key={category.category_id}
                  onClick={() => handleCategorySelect(category.category_name)}
                >
                  {category.category_name}
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={() => handleCategorySelect("")}>
                All Categories
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
      <h2>Product List</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {filteredProduct.length > 0 ? (
        <div className="row">
          {filteredProduct.map((product, index) => (
            <div
              key={product.product_id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <ProductCard
                product={product}
                onProductUpdated={fetchProducts}
                onProductDeleted={fetchProducts}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Products are not available</div>
      )}
    </div>
  );
};

export default ProductList;
