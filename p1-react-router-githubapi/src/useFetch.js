import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url);
      setItem(data);
      setIsLoading(false);
    };
    getData();
  }, [url]);
  return { items, isLoading };
};
