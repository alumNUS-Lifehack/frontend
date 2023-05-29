import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction: () => Promise<any>, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = <any>useState(null);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  const execute = async () => {
    setStatus('pending');
    setValue(null);
    setError(null);

    try {
      const response = await asyncFunction();
      setValue(response);
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('error');
    }
  };

  return { execute, status, value, error };
};

export default useAsync;