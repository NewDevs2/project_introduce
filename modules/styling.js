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
