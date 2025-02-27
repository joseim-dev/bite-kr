import { supabase } from "@/utils/supabase";
import { Alert } from "react-native";
import { router } from "expo-router";

/**
 * 이메일과 비밀번호를 사용하여 회원가입하는 함수
 * @param email 사용자 이메일
 * @param password 비밀번호
 * @param confirmPW 비밀번호 확인
 * @param setLoading 로딩 상태를 변경하는 함수
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  confirmPW: string,
  setLoading: (loading: boolean) => void
) {
  if (password !== confirmPW) {
    Alert.alert("Passwords do not match");
    return;
  }

  setLoading(true); // 🔹 로딩 시작

  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    Alert.alert(error.message);
    console.error(error);
  } else if (!session) {
    Alert.alert("Please check your inbox for email verification!");
  } else {
    router.replace("/(auth)/profileSetting");
  }

  setLoading(false); // 🔹 로딩 종료
}
