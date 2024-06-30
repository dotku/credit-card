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
      <p>您好</p>
      <p>
        我是金融科技企业的工程师，入职过全球顶级的金融公司，投资过加密币、股票、保险等资产，本项目主要集中于信用卡使用经验的分享，希望能帮助到大家。
      </p>
      <h2>入门</h2>
      <p>
        无论怎么样，你都需要一张信用卡，甚至你的信用比较低的情况下，也有一些信用卡你可以使用，比如
        Chime。
      </p>
      <h2>进阶</h2>
      <p>
        市面上有不少各种格式的信用卡，比如带有旅行福利的、福利彩票性质的，甚至通过分类方式获得一定的返利的，本章节将提供这方面的内容。
      </p>
      <h2>精英</h2>
      <p>
        关于信用卡，不仅仅只是用于平常消费，针对初创企业或者想要开始自己副业的小伙伴们，信用卡也能为你带来丰厚的福利。
      </p>
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
