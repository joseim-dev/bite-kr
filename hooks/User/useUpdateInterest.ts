import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Alert } from "react-native"; // ✅ Alert 추가
import { router } from "expo-router"; // ✅ router 추가

export const useUpdateInterest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [data, setData] = useState<any>(null);

  const updateInterest = async (
    userId: string,
    updateData: Record<string, any>
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update(updateData)
        .eq("id", userId)
        .select();

      if (error) {
        throw new Error(error.message);
      }

      setData(data);
      setSuccess(true); // ✅ 업데이트 성공
      return data;
    } catch (err: any) {
      setError(err.message || "Unknown error occurred");
      setSuccess(false); // ✅ 실패 상태 업데이트
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      router.push("/(auth)/notificationSetting");
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      if (error.includes("duplicate key value")) {
        Alert.alert("Username already exists");
      } else {
        Alert.alert("Error", error);
      }
    }
  }, [error]);

  return { updateInterest, loading, error, success, data };
};
