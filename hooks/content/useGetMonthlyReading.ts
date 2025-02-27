import { supabase } from "@/utils/supabase";
import { useCallback, useEffect, useState } from "react";

export const useGetMonthlyReading = (
  columns: string = "reading_id, title, date"
) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  // 현재 날짜 정보 가져오기
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 월 (1~12)
  const day = String(currentDate.getDate()).padStart(2, "0"); // 일 (01~31)

  // 현재 월의 시작일 (예: 2024-02-01)
  const startOfMonth = `${year}-${month}-01`;

  // 현재 날짜까지의 범위 설정 (예: 2024-02-15)
  const endOfMonth = `${year}-${month}-${day}`;

  const getMonthlyReading = useCallback(async () => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    try {
      let { data: readings, error } = await supabase
        .from("readings")
        .select(columns)
        .gte("date", startOfMonth) // startOfMonth 이상
        .lte("date", endOfMonth); // endOfMonth 이하

      if (error) throw error;
      console.log("readings:", readings);

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
  }, [columns, startOfMonth, endOfMonth]);

  useEffect(() => {
    getMonthlyReading();
  }, [getMonthlyReading]);

  return { error, loading, data, getMonthlyReading };
};
