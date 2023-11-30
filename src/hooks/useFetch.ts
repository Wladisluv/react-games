import { useEffect, useState } from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
  progress: number;
}

export const useFetch = <T, P>(
  fetchFunction: FetchFunction<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setProgress(100);
        const result = await fetchFunction(params);

        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
        setProgress(0);
      }
    })();
  }, [fetchFunction, params, stringParams]);

  return { data, isLoading, error, progress };
};