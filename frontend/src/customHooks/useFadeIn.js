import { useState, useEffect } from "react";

export function useFadeIn(delay = 100) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return isVisible;
}
