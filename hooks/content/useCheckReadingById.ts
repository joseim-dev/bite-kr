import { supabase } from "@/utils/supabase";
import { useCallback, useEffect, useState } from "react";
import { useGetUser } from "@/hooks/User/useGetUser";

const useCheckReadingById = (id: string, columns: string = "*") => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [isDone, setIsDone] = useState<boolean>(false);
  const { user } = useGetUser(); // 현재 로그인된 사용자 정보 가져오기

  const checkReading = useCallback(async () => {
    if (!id || !user?.id) return; // id 또는 user.id가 없으면 실행하지 않음

    setLoading(true);
    setError(null);

    try {
      const { data: reading, error } = await supabase
        .from("my_finished_readings")
        .select(columns)
        .eq("reading_id", id)
        .eq("user_id", user.id)
        .single();

      // 받아온 데이터가 null이면 실행 종료 (에러 발생 X)
      if (!reading) {
        setLoading(false);
        setIsDone(false);
        return;
      }

      setData(reading);
      setIsDone(true);
    } catch (error: any) {
      console.error("Error fetching reading:", error.message || error);
      setError(error.message || "Error fetching reading");
    } finally {
      setLoading(false);
    }
  }, [id, user?.id, columns]); // id, user.id, columns가 변경될 때 재실행

  useEffect(() => {
    if (user) {
      checkReading();
      // console.log("CheckReading", data);
    } // user가 존재하는 경우에만 실행
  }, [user]); // user가 변경될 때 실행

  return { error, loading, data, checkReading, isDone };
};

export default useCheckReadingById;
