import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    if (!url) return; 
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed with status ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setErr(null);
      } catch (e) {
        console.error("fetch error:", e);
        setErr(e.message || "something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, loading, err };
};
export default useFetch;
