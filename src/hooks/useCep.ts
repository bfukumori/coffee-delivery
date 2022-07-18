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

interface UseCepHookResponse {
  cepInfo: apiCEPResponse;
  loading: boolean;
}

export const useCep = (cep: string): UseCepHookResponse => {
  const [cepInfo, setCepInfo] = useState<apiCEPResponse>({} as apiCEPResponse);
  const [loading, setLoading] = useState(false);

  const cepFormatted = useMemo(() => {
    return cep.replace(/\W/g, "");
  }, [cep]);

  const viaCEPUrl = `https://ws.apicep.com/cep/${cepFormatted}.json`;

  const fetchCep = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(viaCEPUrl);
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

  return { cepInfo, loading };
};
