
   //부모 태그 만들기
 
function layoutRoot(tagName) {
  const tagQustn = document.createElement(tagName);
  root.appendChild(tagQustn);
}

//태그를 만들어서 사용 할려고 한다.
layoutRoot("header");
layoutRoot("nav");
layoutRoot("main");

//자식 태그 만들기
function childerLayout(qnahtagName, childerntagName, counter) {
  for (let i = 0; i < counter; i++) {
    const tag = document.querySelector(qnahtagName);
    const child = document.createElement(childerntagName);
    tag.appendChild(child);
  }
}

//자식 태그 만드는 함수를 호출 하여 자식 태그 생성


childerLayout("header", "div",1);
childerLayout("nav", "div", 5);
childerLayout("main","div",2);

childerLayout("main > div:nth-child(2)","div",1);

