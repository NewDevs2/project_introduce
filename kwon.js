// .info_text > p {
//   font-size: 24px;
// }
// .info_text {
//   display: flex;
//   justify-content: center;
// }


const info_text = document.getElementsByClassName("info_text");
const pTag = document.querySelector(".info_text > p ");
//부모 태그 안에 자식 태그 만들기
// function layoutTag(qnahTag,childTag){
//   const qntag = document.getElementsByClassName(qnahTag);
//     const tag = document.createElement(childTag);
//     qntag.appendChild(tag);
// }
console.log(pTag);

pTag.style.fontSize = "24px";

let infoStyle = {
  fontSize : "20xp",
  display: "flex",
  justifyContent : "conter"
}

let infoStylelist = ["  display","justifyContent"];
let infolist = ["flex","conter"];

function ptagStyle(tagName){
  for(let i = 0; i < info.length; i++){
    tagName.style[infoStylelist[i]] = infolist[i];
  }
}

ptagStyle(info_text);