import { Page } from "framework7-react";
import React, { useState } from "react";
import "../css/app.less";
export default function Counrt1() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  const [show6, setshow6] = useState(false);
  const [show7, setshow7] = useState(false);
  return (
    /* هنا محتويات صفحة كاملة */
    <Page>
      {/* head */}
      <div className="container-fluid text-bg-success p-4">
        <div className="row">
          <div className="col-sm-3">
            <button
              onClick={() => {
                setshow7(!show7);
              }}
              type="button"
              className="btn btn-outline-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              حول المجمع
            </button>
            {show7 ? (
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">List Button 1</a>
                </li>
                <li>
                  <a className="dropdown-item">List Button 2</a>
                </li>
                <li>
                  <a className="dropdown-item">List Button 2</a>
                </li>
              </ul>
            ) : null}
          </div>
          <div className="col-sm-3">
            <img
              src="https://ksaa.gov.sa/o/ksgaal-redesign-theme/images/logo/logo-white.png"
              width={"150px"}
              height={"80px"}
              alt="hiii"
              className="float-end"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://ksaa.gov.sa/o/ksgaal-redesign-theme/images/logo/logo-white.png"
              width={"150px"}
              height={"80px"}
              alt="hiii"
              className="float-end"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://ksaa.gov.sa/o/ksgaal-redesign-theme/images/logo/logo-white.png"
              width={"250px"}
              height={"80px"}
              alt="hiii"
              className="float-end "
            />
          </div>
        </div>
      </div>

      {/* bodyyyyy */}

      <div className="bg-light  container-fluid p-5">
        <div className="row">
          <div className="col-sm-9">
            <blockquote className="display-6">
              <p>
                <header className="h3 text-end">تعريف عن المجمع</header>
                يأتي تأسيس مجمع الملك سلمان العالمي للغة العربية للمساهمة في
                تعزيز دور اللغة العربية إقليميًّا وعالميًّا، وإبراز قيمتها
                المعبّرة عن العمق اللغوي للثقافة العربية والإسلامية؛ ليكون
                مرجعية علمية على المستوى الوطني في اللغة العربية وعلومها، وليسهم
                إسهامًا مباشرًا في تحقيق أهداف برنامج تنمية القدرات البشرية، أحد
                أهم برامج تحقيق رؤية المملكة العربية السعودية ٢٠٣٠.
              </p>
            </blockquote>
          </div>
          <div className="col-sm-3">
            <img
              src="https://c.top4top.io/p_318396ygg1.jpg"
              alt="aaa"
              width={"370px"}
              height={"360px"}
            />
          </div>
        </div>
        <div className="row p-5">
          <div className="col-sm-9">
            <p className="display-6 text-end">
              اهداف مجمع الملك سلمان العالمي للغة العربية
            </p>

            <dl className="text-end">
              <dt
                onClick={() => {
                  setshow(!show);
                }}
              >
                تعزيز اللغة العربية -1
              </dt>
              {show ? (
                <div>
                  <dd>
                    <b>تشجيع الاستخدام:</b>
                    تعزيز استخدام اللغة العربية في جميع المجالات، بما في ذلك
                    التعليم، والإعلام، والفنون.
                  </dd>
                  <dd>
                    <b>تطوير محتوى اللغة:</b> العمل على تطوير محتوى باللغة
                    العربية في مختلف التخصصات
                  </dd>
                </div>
              ) : null}
              <dt
                onClick={() => {
                  setshow1(!show1);
                }}
              >
                2- البحث والدراسة
              </dt>
              {show1 ? (
                <div>
                  <dd>
                    <b>دعم الأبحاث:</b> تشجيع الدراسات والبحوث التي تركز على
                    اللغة العربية وأدبها.
                  </dd>
                  <dd>
                    <b>تطوير المناهج:</b> تطوير مناهج تعليم اللغة العربية في
                    المدارس والجامعات.
                  </dd>
                </div>
              ) : null}
              <dt
                onClick={() => {
                  setshow2(!show2);
                }}
              >
                {" "}
                3- التعليم والتدريب
              </dt>
              {show2 ? (
                <div>
                  <dd>
                    <b>برامج تعليمية:</b> تقديم برامج تعليمية وتدريبية للمساعدة
                    في تحسين مستوى التعليم في اللغة العربية
                  </dd>
                  <dd>
                    <b>دورات تدريبية:</b> تنظيم دورات تدريبية للمعلمين والمهتمين
                    بتعليم اللغة العربية.
                  </dd>
                </div>
              ) : null}
              <dt
                onClick={() => {
                  setshow3(!show3);
                }}
              >
                4- التعاون الدولي
              </dt>
              {show3 ? (
                <div>
                  <dd>
                    <b>الشراكات العالمية:</b> بناء شراكات مع مؤسسات دولية لتعزيز
                    اللغة العربية على المستوى العالمي
                  </dd>
                  <dd>
                    <b>المؤتمرات والندوات:</b> تنظيم مؤتمرات وندوات تجمع
                    الباحثين والمختصين لتبادل المعرفة والخبرات
                  </dd>
                </div>
              ) : null}
              <dt
                onClick={() => {
                  setshow4(!show4);
                }}
              >
                التقنية والابتكار -5
              </dt>
              {show4 ? (
                <div>
                  <dd>
                    <b>التكنولوجيا في اللغة:</b>استخدام التكنولوجيا لتعزيز تعلم
                    اللغة العربية، مثل تطوير تطبيقات ومواقع إلكترونية.
                  </dd>
                  <dd>
                    <b>البحوث في اللغويات الحاسوبية:</b>دعم الأبحاث التي تتعلق
                    باللغويات الحاسوبية وتحليل البيانات اللغوية.
                  </dd>
                </div>
              ) : null}

              <dt
                onClick={() => {
                  setshow5(!show5);
                }}
              >
                التوعية والتثقيف -6
              </dt>
              {show5 ? (
                <div>
                  <dd>
                    <b>حملات توعوية:</b>إطلاق حملات لزيادة الوعي بأهمية اللغة
                    العربية.
                  </dd>
                  <dd>
                    <b>المؤلفات والنشر: </b>نشر الكتب والمقالات التي تروج للغة
                    العربية وتعزز مكانتها.
                  </dd>
                </div>
              ) : null}

              <dt
                onClick={() => {
                  setshow6(!show6);
                }}
              >
                الحفاظ على التراث -7
              </dt>
              {show6 ? (
                <div>
                  {" "}
                  <dd>
                    <b>التراث اللغوي:</b>الحفاظ على التراث اللغوي والثقافي
                    العربي من خلال الأبحاث والدراسات.
                  </dd>
                  <dd>
                    <b>اللغة في الفنون:</b>دعم الفنون الأدبية والفنون البصرية
                    التي تعكس جمال اللغة العربية.
                  </dd>
                </div>
              ) : null}
            </dl>
            <p className="text-end">اضغط على احد الاهداف لمعرفة المزيد</p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://h.top4top.io/p_31833t4lw1.png"
              alt="dsd"
              width={"370px"}
              height={"360px"}
            />
          </div>
        </div>
        <div></div>
      </div>
      {/* ooter */}
    </Page>
  );
}
