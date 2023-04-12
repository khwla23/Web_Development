import { useState, useEffect, useMemo } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = () => {
    console.log("refreshing");
    setLoading(true);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const timestamp = Date.now();
        const response = await fetch(`${url}?timestamp=${timestamp}`);
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const cachedData = useMemo(() => data, [data]);

  return { data: cachedData, error, loading, refresh };
};

export default useFetch;
