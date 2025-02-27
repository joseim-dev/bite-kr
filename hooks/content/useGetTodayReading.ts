import { supabase } from "@/utils/supabase";
import { useCallback, useEffect, useState } from "react";

export const useGetTodayReading = (columns: string = "*") => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  const date = new Date().toISOString().split("T")[0];

  const getTodayReading = useCallback(async () => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    try {
      let { data: readings, error } = await supabase
        .from("readings")
        .select(columns)
        .eq("date", date)
        .single(); // 단일 데이터 반환

      if (error) throw error;

      if (isMounted) setData(readings);
    } catch (error: any) {
      console.error("Error fetching reading:", error.message || error);
      if (isMounted) setError(error.message || "Error fetching reading");
    } finally {
      if (isMounted) setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [columns, date]);

  useEffect(() => {
    getTodayReading();
  }, [getTodayReading]);

  return { error, loading, data, getTodayReading };
};
