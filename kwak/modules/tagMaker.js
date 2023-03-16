export const _y = {
  C : (tagName,setAttri,target,wantText)=>{
    const E = document.createElement(tagName);
    if (setAttri) {
      for (let key in setAttri) {
        E.setAttribute(key,setAttri[key]);
      }
    }
    if (wantText) {
      E.innerText = wantText;
    }
    target.appendChild(E)
  }
}


// module.exports = {
//   C : (tagName,setAttri,target,wantText)=>{
//     const E = document.createElement(tagName);
//     if (setAttri) {
//       for (let key in setAttri) {
//         E.setAttribute(key,setAttri[key]);
//       }
//     }
//     if (wantText) {
//       E.innerText = wantText;
//     }
//     target.appendChild(E)
//   }
// }