import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import TopBar from "./TopBar";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4";

const Products = () => {
  const [list, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then((result) => {
        if (!result.ok) throw new Error("Failed to fetch products");
        return result.json();
      })
      .then((json) => {
        setList(json);
        setProductList(json);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const Category1 = list.map((item) => item.category);
  const category = [...new Set(Category1)];

  useEffect(() => {
    let filteredList = list;

    if (selectedCategory) {
      filteredList = filteredList.filter(
        (obj) => obj.category === selectedCategory
      );
    }

    if (searchTerm) {
      filteredList = filteredList.filter((obj) =>
        obj.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProductList(filteredList);
  }, [selectedCategory, searchTerm, list]);

  return (
    <>
      <TopBar
        category={category}
        setSelectedCategory={setSelectedCategory}
        setSearchTerm={setSearchTerm}
      />
      <div>
        <h1>Products</h1>
      </div>

      {loading && (
        <div className="loading-state">
          <p>Loading products...</p>
        </div>
      )}

      {error && (
        <div className="error-state">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && productList.length === 0 && (
        <div className="empty-state">
          <p>No products found. Try adjusting your search or category.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="row">
          {productList.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
