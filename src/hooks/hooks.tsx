import { useLocation } from "react-router-dom";

export const IsMatch = (e: string): boolean => {
  const location = useLocation();
  const match = location.pathname === e;

  return match;
};
