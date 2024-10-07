import {
  Accordion,
  AccordionContent,
  Block,
  BlockFooter,
  BlockTitle,
  Button,
  Link,
  List,
  ListItem,
  Navbar,
  NavLeft,
  NavRight,
  Page,
  Toolbar,
} from "framework7-react";
import React from "react";

export default function Homse3() {
  const handleLinkClick = () => {
    window.open("https://ksaa.gov.sa/", "_blank");
  };
  const handleLinkClick1 = () => {
    window.open("https://almustashar.ksaa.gov.sa/", "_blank");
  };
  const handleLinkClick2 = () => {
    window.open("https://muashir.ksaa.gov.sa/", "_blank");
  };
  return (
    <Page>
      <Navbar backLink color="Green">
        <NavLeft>
          <img
            src="https://j.top4top.io/p_31843wonp1.png"
            width={"80px"}
            height={"70px"}
          />
        </NavLeft>
        <NavRight>مجمع الملك سلمان</NavRight>
      </Navbar>
      <BlockTitle>
        <p className="text-end h2">تعريف عن المجمع</p>
      </BlockTitle>
      <Block inset outline color="green">
        <div className="grid grid-cols-2">
          <div>
            <p className="h6 text-end">
              {" "}
              يأتي تأسيس مجمع الملك سلمان العالمي للغة العربية للمساهمة في تعزيز
              دور اللغة العربية إقليميًّا وعالميًّا، وإبراز قيمتها المعبّرة عن
              العمق اللغوي للثقافة العربية والإسلامية؛ ليكون مرجعية علمية على
              المستوى الوطني في اللغة العربية وعلومها، وليسهم إسهامًا مباشرًا في
              تحقيق أهداف برنامج تنمية القدرات البشرية، أحد أهم برامج تحقيق رؤية
              المملكة العربية السعودية ٢٠٣٠.
            </p>
          </div>
          <div className="text-align-center">
            <img
              //   src="https://j.top4top.io/p_31843wonp1.png"
              src="/imgs/king.png"
              width={"155px"}
              height={"280px"}
              className=""
            />
          </div>
        </div>
      </Block>
      <BlockTitle>
        <p className="text-en ">اهداف مجمع الملك سلمان العالمي للغة العربية</p>
      </BlockTitle>
      <Block inset color="green">
        <List strong outline accordionList>
          <ListItem accordionItem title={"تعزيز اللغة العربية1"}>
            <AccordionContent>
              <p>
                {" "}
                <b>تطوير محتوى اللغة:</b> العمل على تطوير محتوى باللغة العربية
                في مختلف التخصصات
              </p>
              <p>
                <b>تشجيع الاستخدام:</b>
                تعزيز استخدام اللغة العربية في جميع المجالات، بما في ذلك
                التعليم، والإعلام، والفنون.
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={" 2- البحث والدراسة"}>
            <AccordionContent>
              <p>
                <b>دعم الأبحاث:</b> تشجيع الدراسات والبحوث التي تركز على اللغة
                العربية وأدبها.
              </p>
              <p>
                <b>تطوير المناهج:</b> تطوير مناهج تعليم اللغة العربية في المدارس
                والجامعات.
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={" 3- التعليم والتدريب"}>
            <AccordionContent>
              <p>
                <b>برامج تعليمية:</b> تقديم برامج تعليمية وتدريبية للمساعدة في
                تحسين مستوى التعليم في اللغة العربية
              </p>
              <p>
                <b>دورات تدريبية:</b> تنظيم دورات تدريبية للمعلمين والمهتمين
                بتعليم اللغة العربية.
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={"  4- التعاون الدولي"}>
            <AccordionContent>
              <p>
                <b>الشراكات العالمية:</b> بناء شراكات مع مؤسسات دولية لتعزيز
                اللغة العربية على المستوى العالمي
              </p>
              <p>
                <b>المؤتمرات والندوات:</b> تنظيم مؤتمرات وندوات تجمع الباحثين
                والمختصين لتبادل المعرفة والخبرات
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={"التقنية والابتكار -5"}>
            <AccordionContent>
              <p>
                <b>التكنولوجيا في اللغة:</b>استخدام التكنولوجيا لتعزيز تعلم
                اللغة العربية، مثل تطوير تطبيقات ومواقع إلكترونية.
              </p>
              <p>
                <b>البحوث في اللغويات الحاسوبية:</b>دعم الأبحاث التي تتعلق
                باللغويات الحاسوبية وتحليل البيانات اللغوية.
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={" التوعية والتثقيف -6"}>
            <AccordionContent>
              <p>
                <b>حملات توعوية:</b>إطلاق حملات لزيادة الوعي بأهمية اللغة
                العربية.
              </p>
              <p>
                <b>المؤلفات والنشر: </b>نشر الكتب والمقالات التي تروج للغة
                العربية وتعزز مكانتها.
              </p>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={"الحفاظ على التراث -7"}>
            <AccordionContent>
              <p>
                <b>التراث اللغوي:</b>الحفاظ على التراث اللغوي والثقافي العربي من
                خلال الأبحاث والدراسات.
              </p>
              <p>
                <b>اللغة في الفنون:</b>دعم الفنون الأدبية والفنون البصرية التي
                تعكس جمال اللغة العربية.
              </p>
            </AccordionContent>
          </ListItem>
        </List>
        <BlockFooter>
          <p className="text-en">اضغط على احد الاهداف لمعرفة المزيد</p>
        </BlockFooter>
      </Block>
      <BlockTitle>
        <blockquote>
          <p className="">
            اهم المواقع لدى مجمع الملك سلمان العالمي للغةالعربية
          </p>
        </blockquote>
      </BlockTitle>
      <Block inset color="green">
        <List strong outline accordionList>
          <ListItem
            accordionItem
            title={"الموقع الرسمي للمجمع"}
            className="rigth"
          >
            <AccordionContent>
              <p>
                <b>مجمع الملك سلمان العالمي للغة العربية :</b>
                الموقع الرسمي و الرئيسي لمجمع الملك سلمان العالمي للغة العربية
              </p>
              <Button onClick={handleLinkClick}>
                {" "}
                موقع مجمع الملك سلمان العالمي للغة العربية
              </Button>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={"المستشار اللغوي"}>
            <AccordionContent>
              <p>
                <b>حول المستشار اللغوي :</b>
                منصة لغوية إثرائية، تستقبل سؤالك، وتحيله على مختص لغوي، ثم تنشر
                الإجابة في المنصة،
              </p>
              <Button onClick={handleLinkClick1}> موقع المستشار اللغوي</Button>
            </AccordionContent>
          </ListItem>
          <ListItem accordionItem title={"مؤشر للغة العربية"}>
            <AccordionContent>
              <p>
                <b>نبذة عن مؤشر للغة العربية :</b>
                مؤشر لغوي يقيس واقع استعمال اللغة العربية في النطاقات الحيوية
                المتنوعة. ويتضمن المؤشر ثمانية نطاقات رئيسة، وخمسين مؤشرًا
                فرعيًا، تقيس مجالات متعددة داخل كل نطاق؛ لإعطاء صورة تفصيلية
                لواقع اللغة العربية في الدول التي يطبق عليها المؤشر.
              </p>
              <Button onClick={handleLinkClick2}> موقع المستشار اللغوي</Button>
            </AccordionContent>
          </ListItem>
        </List>
      </Block>
    </Page>
  );
}
//grid grid-cols-2 grid-gap
