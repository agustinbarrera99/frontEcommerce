import { ProductCard } from "../Card/ProductCard.jsx";

export const CardContainer = ({ products }) => (
  <div className="gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 mb-6 sm:mb-7">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
