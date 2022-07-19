import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";

type apiCEPResponse = {
  address: string;
  city: string;
  code: string;
  ok: boolean;
  district: string;
  state: string;
  status: number;
  statusText: string;
};

type UseCepHookErrorResponse = {
  message: string;
  ok: boolean;
  status: number;
  statusText: string;
};

interface UseCepHookResponse {
  cepInfo: apiCEPResponse;
  loading: boolean;
  error: UseCepHookErrorResponse | null;
}

export const useCep = (cep: string): UseCepHookResponse => {
  const [cepInfo, setCepInfo] = useState<apiCEPResponse>({} as apiCEPResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<UseCepHookErrorResponse | null>(null);

  const cepFormatted = useMemo(() => {
    return cep.replace(/\W/g, "");
  }, [cep]);

  const apiCEPUrl = `https://ws.apicep.com/cep/${cepFormatted}.json`;

  const fetchCep = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(apiCEPUrl);

      if (response.data.status !== 200) {
        setError(response.data);
        setLoading(false);
      }
      setCepInfo(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [cepFormatted]);

  useEffect(() => {
    if (cepFormatted.length === 8) {
      fetchCep();
    }
  }, [fetchCep]);

  return { cepInfo, loading, error };
};
