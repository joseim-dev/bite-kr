import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase"; // Supabase 설정이 제대로 되어 있어야 합니다.

export function useGetUser() {
  const [user, setUser] = useState<any>(null); // 유저 객체 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Supabase에서 세션 정보를 가져옴
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError || !sessionData?.session) {
          setError("Error fetching session or no active session");
          console.error(
            "Error fetching session or no active session",
            sessionError
          );
          return;
        }

        setUser(sessionData.session.user); // 유저 정보 설정
      } catch (err) {
        console.error("Unexpected error occurred", err);
        setError("Unexpected error occurred");
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchUser(); // 세션 및 유저 정보 가져오기
  }, []);

  return { user, loading, error };
}
