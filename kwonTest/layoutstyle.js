// //함수를 이용해 스타일을 주기 위해 만들었다.
// function layoutRootStyle(tagName, styleName, styleTag) {

//   tagName.style[styleName] = styleTag;

// }
// //기본적인 레이아웃 스타일을 주기 위하여 배열에 값을 넣어두고 함수를 이용 하여 출력 해보았다.
// function tagStyle(tagName, tagStyle) {
//   const tag = document.querySelector(tagName);
//   for (let i = 0; i < styleName.length; i++) {
//     layoutRootStyle(tag, styleName[i], tagStyle[i]);
//   }
// }

// // 폰트 스타일도 위에 함수 처럼 따로 가져와 만들어 주었다 한번에 모든걸 하기 보다는 따로 분류 하여 만들어야 할거 같아 해보았다.
// function fountStyle(tagName, tagStyle) {
//   const tag = document.querySelector(tagName);
//   for (let i = 0; i < textStyle.length; i++) {
//     layoutRootStyle(tag, textStyle[i], tagStyle[i]);
//   }
// }

function tagText(tagName, text) {
  const tag = document.querySelector(tagName);
  tag.innerText = text;
}


// //원하는 태그의 기본적인 레이아웃 스타일을 주는 함수 호출
// tagStyle("#root", objStyle.rootStyle);
// tagStyle("header", objStyle.header);
// tagStyle("nav", objStyle.nav);
// tagStyle("main", objStyle.main);

// //원하는 태그의 스타일을 주는 함수를 호출 하였다.
// fountStyle("header > div", fountObj.headerFount);

// //nav태그안에 div가 많아 반복문을 사용해 보았다.
// for (let i = 0; i < fountObj.navDiv.length; i++) {
//   fountStyle(fountObj.navDiv[i], fountObj.navFount);
//   tagText(fountObj.navDiv[i], fountObj.nameText[i]);
// }

// //main태그 자식의 큰 영역을 나누어 주고 세분화 할 것이다.
// tagStyle(mainobj.mainDiv[0], mainobj.mainlayoutStyleOne);
// tagStyle(mainobj.mainDiv[1], mainobj.mainlayoutStyleTwo);


// for (let key in objStyle) {
//   listTest.push(key);
// }

function stylefor(tagName, objname) {
  const taget = document.querySelector(tagName);
  Object.assign(taget.style, objname);
}
stylefor("#root", rootStyle);
stylefor("header", headerStyle);
stylefor("nav", navStyle);
stylefor("main", mainStyle);
stylefor("header > div", headerdivStyle);
for (let i = 1; i < 6; i++) {
  stylefor(`nav > div:nth-child(${i})`, navdivStyle);

}
stylefor(`main>div:nth-child(1)`, maindivStyle);
stylefor(`main>div:nth-child(2)`, maindivStyle);


// const button = document.querySelector("nav > div:nth-child(1)");

// button.addEventListener("click", function () {

//   for (let i = 0; i < listTest.length; i++) {

//     for (let j = 0; j < listTest.length;j++) {
//       console.log(objStyle[listTest[j]][i]);
//     }

//   }

// });



// //태그에 택스트 내용 입력 함수

tagText("header > div", "NewDevs");

console.log(fountObj.navDiv.length);
function testfont(){

  for(let i =0; i < fountObj.navDiv.length;i++){
    const tag = document.querySelector(fountObj.navDiv[i]);
  console.log(tag);
  tag.textContent = fountObj.nameText[i];
  
  }}
  testfont();

