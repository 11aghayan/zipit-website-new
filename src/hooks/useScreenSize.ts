import { useState } from "react";

export default function useScreen() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const screen = width > 1500 ? 'xl' : width > 1000 ? 'lg' : width > 600 ? 'md' : 'sm';
  
  window.onresize = (e) => {
    const target = e.target as Window;
    const { innerWidth } = target;
    setWidth(innerWidth);
  }

  return {screen, width};
}