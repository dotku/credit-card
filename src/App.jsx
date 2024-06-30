import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Data from "./data/issuers.json";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Data", Data);
  }, []);

  return (
    <>
      <p>
        There many many finance companies in the US, here I collected{" "}
        {Data.length} companies.
      </p>
      <ol>
        {Data.map((d) => (
          <li>{d}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
