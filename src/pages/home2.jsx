import { Navbar, NavTitle, Page, Block } from "framework7-react";
import React from "react";
import Counrt1 from "./counrt1";
import Test333 from "./test333";

/*    ""راح تحصل كل محتويات صفحة في ملف (count1.jsx)بسبب انه ما استدعي صفحتين""    */
export default function Home2() {
  return (
    <Page>
      <Navbar backLink color="green">
        <Navbar title="hihi" />
        <img
          src="https://j.top4top.io/p_3183qenyn1.png"
          width={"50px"}
          height={"50px"}
        />
        <h4 className="text-success right">
          مجمع الملك سلمان العالمي للغة العربية
        </h4>
      </Navbar>
      <Counrt1 />
    </Page>
  );
}
//<Test333 />
