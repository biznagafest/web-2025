import { useState } from "preact/hooks";

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");

  const updateFormProperty = (property: keyof T, value: T[keyof T]) => {
    setState((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const clearForm = () => {
    setState(initialState);
  };

  return {
    state,
    updateFormProperty,
    status,
    setStatus,
    clearForm,
  };
};
