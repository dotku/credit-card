import { useCallback, useEffect, useState } from "react";

export default function Translation({ children }) {
  const [result, setResult] = useState();
  console.log("children", children);

  const fetchTranslation = useCallback(async () => {
    async function genTraslation() {
      try {
        const rsp = await fetch(
          `https://dotku-translation.deno.dev?s=${children}`
        );
        const { text } = await rsp.json();
        setResult(text);
      } catch (e) {
        console.error(e);
        return children;
      }
    }
    genTraslation();
  }, [children]);

  useEffect(() => {
    fetchTranslation();
  }, [fetchTranslation]);

  return <>{result || children}</>;
}
