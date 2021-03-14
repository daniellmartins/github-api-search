import { useEffect, useState } from "react";

import api from "../services/api";

const useGitHubQuery = (path) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const response = await api.get(path);
        setData(response.data);
      } catch (error) {
        // console.error(error);
        setError(true);
      }

      setLoading(false);
    }

    loadData();
  }, [path]);

  return { loading, error, data };
};

export default useGitHubQuery;
