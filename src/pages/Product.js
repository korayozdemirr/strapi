import { useState, useEffect } from "react";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:1337/api/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return (
    <div>
      <ul>
        {data.data.map((product) => (
          <li key={product.id}>
            <h2>{product.attributes.name}</h2>
            <code>{product.attributes.price}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
