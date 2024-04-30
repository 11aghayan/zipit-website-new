import { useEffect } from "react";

import useLang from "../hooks/useLang";

type Props = {
  children: React.ReactNode;
}

export default function LangContextProvider({ children }: Props) {
  const lang = useLang();
  
  useEffect(() => {
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'hy';
    if (lang === 'ru') {
      document.body.classList.add('font-ru');
      document.body.classList.remove('font-am');
    } else {
      document.body.classList.add('font-am');
      document.body.classList.remove('font-ru');
    }
  }, [lang])

  return (
    <>
      {children}
    </>
  );
}