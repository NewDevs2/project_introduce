const styleBox = {
  allStyleKey: ["margin", "padding"],
  sizeStyleKey: ["width", "height"],
  displayStyleKey: [
    "display",
    "flexDirection",
    "justifyContent",
    "alignItems",
    "flexWrap",
    "overFlow",
    "position",
    "userSelect",
    "flexShrink",
    "transition",
  ],
  fontStyleKey: ["fontFamily", "fontSize", "color"],
  MarginStyleKey: [],
  BorderStyleKey: ["border"],
  ColorStyleKey: ["backgroundColor"],
  // sizeValue: ["100vw", "100vh"],
  // allSty: function (styObj, styleValue) {
  //   for (let i = 0; i < this.allStyleKey.length; i++) {
  //     styObj.style[this.allStyleKey[i]] = styleValue[i];
  //   }
  // }
  // ,
  Styling: function (styObj, styleKey, styleValue) {
    for (let i = 0; i < styleKey.length; i++) {
      styObj.style[styleKey[i]] = styleValue[i];
    }
  },
};
// test
// const bbb = {
//   dj: function (a) {
//     a.style.display = "flex";
//   },
//   aas: function (a) {
//     a.style.color = 'red';
//   }
// };
// bbb.dj(mainContent)
// bbb.aas(mainContent)

// 점심메뉴 랜덤 출력
const lunch = [
  "설해돈",
  "둔산짬뽕",
  "한식뷔페",
  "촌두부",
  "어메이징카츠",
  "도리가",
  "굴세상",
];
// let pick = Math.floor(Math.random() * lunch.length);
// console.log(pick);
function randomSelect(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// let lunchChoice = randomSelect(lunch);
// console.log(lunchChoice); 이렇게 해도 됑
console.log(randomSelect(lunch));
