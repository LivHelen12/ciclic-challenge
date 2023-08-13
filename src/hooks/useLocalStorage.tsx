import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [storagedValue, setStoragedValue] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  });

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const updateStoragedValue = (newValue: T) => {
    setStoragedValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    storagedValue,
    updateStoragedValue,
    clearLocalStorage,
  };
}
