import { useEffect } from "react";

import useLang from "../hooks/useLang";

type Props = {
  children: React.ReactNode;
}

export default function LangContextProvider({ children }: Props) {
  const lang = useLang();
  
  useEffect(() => {
    if (lang !== 'am' && lang !== 'ru') {
      window.history.replaceState(null, '', '/am');
      window.location.reload();
    }

    document.documentElement.lang = lang === 'ru' ? 'ru' : 'hy';
  }, [lang])

  return (
    <>
      {children}
    </>
  );
}