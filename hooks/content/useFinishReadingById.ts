import { supabase } from "@/utils/supabase";
import { useCallback, useState } from "react";
import { useGetUser } from "@/hooks/User/useGetUser";

const useFinishReadingById = (id: string) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const { user } = useGetUser(); // 현재 사용자 정보 가져오기

  const finishReading = useCallback(async () => {
    if (!id || !user?.id) {
      setError("Invalid reading ID or user not found");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("my_finished_readings")
        .insert([{ reading_id: id, user_id: user.id }]) // user_id 추가
        .select()
        .single();

      if (error) throw error;

      setData(data);
      // console.log("Finish Reading Success:", data);
    } catch (error: any) {
      console.error("Finish Reading Error:", error.message || error);
      setError(error.message || "Error finishing reading");
    } finally {
      setLoading(false);
    }
  }, [id, user?.id]); // 의존성 최적화

  return { error, loading, data, finishReading };
};

export default useFinishReadingById;
