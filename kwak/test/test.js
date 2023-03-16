module.exports = {
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
  },
  A : 100000000000,
  B : ()=>{console.log(module.exports.A)}
}

// console.log(module.exports.B());
// export const B = ()=>{console.log(':D')}