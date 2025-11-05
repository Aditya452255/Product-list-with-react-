import React from 'react';
import useFetch from './useFetch'; 
import './App.css'; 

function App() {
  const { data: products, loading, error } = useFetch(
    'https://api.escuelajs.co/api/v1/products'
  );
  if (loading) {
   return <div >Loading products...</div>;  }
    if (error) {
     return <div >Oops — {error}</div>;
  }
console.log('Products data:', products); 
  return (
    <div className="gallery-container">
      <h1>Photos</h1>
      <div className="gallery-grid">
        {products &&
          products.map((product) => (
            <div key={product.id} className="gallery-item">
              <img
                src={product.images[0]}
                alt={product.title}
                onError={(e) => {
                  e.target.src = 'https://i.imgur.com/g0R5sYd.png'; 
                }}
              />
              <p>{product.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default App;

