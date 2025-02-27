// utils/validateUsername.ts

export const validateUsername = (
  text: string
): { isValid: boolean; error: string } => {
  const usernameRegex = /^(?!.*\..)(?!^\.)[a-z0-9._]{4,30}$/; // 대문자 허용 안함, 특정 규칙 적용

  if (!usernameRegex.test(text)) {
    return {
      isValid: false,
      error:
        "Username must be 4-30 characters, using lowercase letters, numbers, '_', and '.'. '.' cannot be consecutive or at the start/end.",
    };
  }

  return { isValid: true, error: "" };
};
