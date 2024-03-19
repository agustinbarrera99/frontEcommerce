import { useState, useEffect } from "react";
import { CardContainer } from "../CardContainer/CardContainer.jsx";
import axios from "axios";
import { PaginationComponent } from "../Pagination/Pagination.jsx";
import { Loader } from "../Loader/Loader.jsx";

export const Index = () => {
  const [products, setProducts] = useState([]);
  const [maxPages, setMaxPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios("http://localhost:8080/api/products");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/?page=${currentPage}`);
        setMaxPages(response.data.response.totalPages);
        console.log(response.data.response)
        setProducts(response.data.response.docs);
        setIsLoading(true)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      {!isLoading ? <Loader /> : (
        <div className="bg-dark min-h-screen flex flex-col items-center">
          <CardContainer products={products} />
          <PaginationComponent maxPages={maxPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </>
  );};
