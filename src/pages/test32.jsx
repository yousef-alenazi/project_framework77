import {
  Block,
  BlockTitle,
  Button,
  Input,
  List,
  ListButton,
  ListInput,
  Navbar,
  NavTitle,
  Page,
} from "framework7-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function HomePag() {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [sign, setSgin] = useState("+");
  const [birthday, setbirthday] = useState();
  const [sisday, setSisday] = useState();
  const [age, setAge] = useState();
  const [birth, setBirth] = useState();

  const [agey, setAgey] = useState({ years: 0, months: 0, days: 0 });

  const [seconds, setSeconds] = useState();

  const agge = () => {
    const bir = new Date(birth);
    const today2 = new Date();

    let years = today2.getFullYear() - bir.getFullYear();
    let months = today2.getMonth() - bir.getMonth();
    let days = today2.getDate() - bir.getDate();
    setAgey({ years, months, days });
  };
  useEffect(() => {
    if (sign == "+") {
      setResult(number1 + number2);
    } else if (sign == "-") {
      setResult(number1 - number2);
    } else if (sign == "*") {
      setResult(number1 * number2);
    } else if (sign == "/") {
      setResult(number1 / number2);
    }
  }, [number1, number2, sign]);
  useEffect(() => {
    const today = new Date();
    const ffrom = today.getFullYear();
    setSisday(ffrom);
  });
  useEffect(() => {
    setAge(sisday - Number(birthday));
  });
  useEffect(() => {
    // دالة للحصول على الثواني
    const updateSeconds = () => {
      const currentDate = new Date();
      const currentSeconds = currentDate.getSeconds();
      setSeconds(currentSeconds);
    };

    // إعداد المؤقت لتحديث الثواني كل ثانية
    const interval = setInterval(updateSeconds, 1000);

    // تنظيف المؤقت عند فك التركيب
    return () => clearInterval(interval);
  }, []);
  return (
    <Page>
      <Navbar backLink>
        <NavTitle>نجرب نبني كل الاكواد بنفسي</NavTitle>
        <p />
      </Navbar>
      {seconds}
      <Block strong>
        <Block>
          <List inset strong outline>
            <ListButton title={"+"} value={"+"} onClick={() => setSgin("+")} />
            <ListButton title={"-"} value={"-"} onClick={() => setSgin("-")} />
            <ListButton title={"*"} value={"*"} onClick={() => setSgin("*")} />
            <ListButton title={"/"} value={"/"} onClick={() => setSgin("/")} />
          </List>
        </Block>
        <h1>{result}:ناتج المعادلة</h1>
        <h2>{sign} :ماهي العملية الحسابية التي سوف تتم</h2>
        <select onChange={(e) => setSgin(e.target.value)}>
          <option value={"+"}>+</option>
          <option value={"-"}>-</option>
          <option value={"*"}>*</option>
          <option value={"/"}>/</option>
        </select>
        <Input
          type="text"
          value={number1}
          onChange={(e) => setnumber1(Number(e.target.value))}
        />
        <Input
          type="text"
          value={number2}
          onChange={(e) => setnumber2(Number(e.target.value))}
        />
        <List
          strongIos
          outlineIos
          dividersIos
          form
          formStoreData
          id="demo-form"
        >
          <ListInput
            type="text"
            value={number1}
            onChange={(e) => setnumber1(Number(e.target.value))}
          />
          <ListInput
            type="text"
            value={number2}
            onChange={(e) => setnumber2(Number(e.target.value))}
          />
        </List>
      </Block>

      <BlockTitle>حساب العمر</BlockTitle>
      <Block strong>
        <h2>{sisday}:سنة الحالية</h2>
        {/*{age == null ? <h3>ggg</h3> : age}*/}
        <h2>{age}:عمرك</h2>
        <Input
          type="text"
          value={birthday}
          onChange={(e) => setbirthday(e.target.value)}
          placeholder="قم بي ادخال تاريخ ميلادك سنة فقط"
        />
        <List>
          <ListInput
            type="text"
            value={birthday}
            onChange={(e) => setbirthday(e.target.value)}
            placeholder="قم بي ادخال تاريخ ميلادك سنة فقط"
          />
        </List>
      </Block>
      <BlockTitle>العمر مع شهور و الايام</BlockTitle>
      <Block strong>
        <Input
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
        {birth}
        <List>
          <ListInput
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </List>
        <Button onClick={agge}>احسب عمرك</Button>
        <h3>عمرك</h3>
        <h4>
          {agey.years} سنة،
          <p /> {agey.months} شهور،
          <p /> {agey.days}الايام
          <p />
        </h4>
      </Block>
    </Page>
  );
}
