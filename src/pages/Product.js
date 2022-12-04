import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Products() {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );
  console.log(data);
  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return (
    <div className="container mx-auto p-12">
      <ul className="grid grid-cols-4 gap-4">
        {data.data.map((product) => (
          <li className="bg-gray-100 p-4 rounded-md" key={product.id}>
            <h2 className="text-xl">{product.attributes.name}</h2>
            <code className="text-blue-500">
              {product.attributes.price.toLocaleString("tr-TR", {
                style: "currency",
                currency: "TRY",
              })}
            </code>
            <Link
              to={`/products/${product.id}`}
              className="ml-2 bg-gray-500 text-white px-2 rounded-full"
            >
                Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
