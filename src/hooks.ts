import { useEffect } from "react";
import { changeWindowSize } from "actions";

export function useWindowSize() {
  function f() {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    changeWindowSize(windowSize);
  }
  useEffect(() => {
    window.addEventListener("resize", f);
    f();
    return () => window.removeEventListener("resize", f);
  }, []);
}
