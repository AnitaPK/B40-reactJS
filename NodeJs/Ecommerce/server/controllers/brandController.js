import db from "../config/db.js";


const baseURL = 'http://localhost:7000'

// Helper function for validation
const validateBrandName = (brand_name) => {
  if (!brand_name || typeof brand_name !== 'string' || brand_name.trim().length === 0) {
    return 'Brand name is required and should be a valid string.';
  }
  return null;
};

function addBrand(req, res) {
  console.log(req.query)
  try {
    const { brand_name } = req.body;
    const validationError = validateBrandName(brand_name);

    if (validationError) {
      return res.status(400).send({ msg: validationError, success: false });
    }
    const brand_image = req.file ? req.file.filename : null;

    const q1 = `insert into brand (brand_name, brand_image) values('${brand_name}','${brand_image}')`;

    db.query(q1, (err, result) => {
      if (err) throw err;
      res.status(200).send({ msg: "Brand added successfully", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function getAllBrand(req, res) {
  try {
    const q2 = 'select * from brand';

    db.query(q2, (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(404).send({ msg: "No brands found", success: false });
      }
      // Convert category_image to an absolute path
      const brands = result.map((b) => ({
        ...b,
        brand_image: b.brand_image
          ? `${baseURL}/uploads/${b.brand_image}`
          : null,
      }));
      res.status(200).send({ brands: brands, success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function deleteBrand(req, res) {
  try {
    const id = req.params.id;

    if (!id || isNaN(id)) {
      return res.status(400).send({ msg: "Invalid brand ID", success: false });
    }

    const q4 = `delete from brand where brand_id = ?;`;

    db.query(q4, [id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows === 0) {
        return res.status(400).send({ msg: "Brand not found", success: false });
      }

      res.status(200).send({ msg: "Brand deleted", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function updateBrand(req, res) {
  try {
    const { brand_name } = req.body;
    const id = req.params.id;

    if (!id || isNaN(id)) {
      return res.status(400).send({ msg: "Invalid brand ID", success: false });
    }

    const validationError = validateBrandName(brand_name);
    if (validationError) {
      return res.status(400).send({ msg: validationError, success: false });
    }

    const q3 = `update brand set brand_name = ? where brand_id = ?;`;

    db.query(q3, [brand_name, id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows === 0) {
        return res.status(400).send({ msg: "Brand not found", success: false });
      }

      res.status(200).send({ msg: "Brand name updated", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

export default { addBrand, getAllBrand, deleteBrand, updateBrand };
