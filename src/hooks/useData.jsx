import { useEffect, useState } from "react";

const useData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useData;
