import { supabase } from "@/utils/supabase";
import { useCallback, useEffect, useState } from "react";

const useGetReadingById = (id: string, columns: string = "*") => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  const getReading = useCallback(async () => {
    if (!id) return; // id가 없을 경우 실행하지 않음

    let isMounted = true; // 언마운트 시 상태 변경 방지
    setLoading(true);
    setError(null);

    try {
      let { data: reading, error } = await supabase
        .from("readings")
        .select(columns)
        .eq("reading_id", id)
        .single(); // 단일 데이터 반환

      if (error) throw error;

      if (isMounted) setData(reading);
    } catch (error: any) {
      console.error("Error fetching reading:", error.message || error);
      if (isMounted) setError(error.message || "Error fetching reading");
    } finally {
      if (isMounted) setLoading(false);
    }

    return () => {
      isMounted = false; // 언마운트 시 상태 변경 방지
    };
  }, [id, columns]); // id 또는 columns 변경 시 다시 실행

  useEffect(() => {
    getReading();
  }, [getReading]);

  return { error, loading, data, getReading };
};

export default useGetReadingById;
