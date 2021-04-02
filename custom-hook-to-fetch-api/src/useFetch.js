import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItem] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch(url);
      const resData = await res.json();
      setItem(resData);
      setIsLoading(false);
    };
    getItems();
  }, []);

  return { isLoading, items };
};
