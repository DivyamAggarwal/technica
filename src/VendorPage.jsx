import React, { useState } from 'react';

function VendorPage() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState(null); // State for image

  const handleAddProduct = () => {
    if (newProductName.trim() !== '' && newImage) { // Ensure name and image are provided
      const newProduct = {
        id: Math.random().toString(36).substr(2, 9),
        name: newProductName.trim(),
        description: newDescription.trim(),
        image: newImage
      };
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewDescription('');
      setNewImage(null); // Reset image input
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div claasName="card">
    <div style={{width:'60%' , marginLeft:'20%'}}>
      <h1 style={{textAlign:'center', color:'black',fontFamily:"calibri", fontStyle:"italic", border:"2px solid black", marginBottom:'30px' ,marginTop:'20px' , borderRadius:'10px'}} >Vendor Page</h1>
      <div class="input-group input-group-sm mb-3" style={{width:'60%' ,textAlign:'center'}}>
        <div class="input-group-prepend" >
          <span class="input-group-text" id="inputGroup-sizing-sm"  >Name</span>
        </div>
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
        placeholder="Enter Product Name"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Enter Description</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" 
        placeholder="Enter Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
      </div>
      <div class="input-group mb-3" style={{marginTop:"10px"}}>
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01"
          accept="image/*"
          onChange={(e) => setNewImage(e.target.files[0])}
          className="btn btn-outline-secondary" style={{marginLeft:"10px"}}/>
          {/* <label class="custom-file-label" for="inputGroupFile01">Choose file</label> */}
        </div>
      </div>
      
      <a href='login.html'><button onClick={handleAddProduct} className="btn btn-outline-info" style={{margin:"10px", marginLeft:"40px"} }>Add Product</button></a>


      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <img src={URL.createObjectURL(product.image)} alt={product.name} width={"20%"}/>
            </div>
            <button onClick={() => handleDeleteProduct(product.id)}  className="btn btn-outline-danger" style={{marginTop:"10px"}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default VendorPage;
