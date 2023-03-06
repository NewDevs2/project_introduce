// 원초적인 방법
// function profileStyleData() {
//   let profile = document.getElementsByClassName('profile');
//   profile[0].style.display = "flex";
//   profile[0].style.flexDirection = "column";
//   profile[0].style.width = "35vw";
//   profile[0].style.height = "75vh";
//   profile[0].style.justifyContent = "center";
//   profile[0].style.alignItems = "center";
// }
// profileStyleData();


// console.dir(profile[0].style)
// profileStyle[0] = "하"
// console.dir(profileStyle);

// 스타일링 키, 밸류
function profileStyleBox(dis, flxD,wid,hei,justi,alignI,borR) {
let obj = {
  D : dis,
  F : flxD,
  W : wid,
  H : hei,
  J : justi,
  A : alignI,
  B : borR
  }; return obj;
};
// 데이터 얻기
let profile = document.querySelector(".profile"); 

let profilePic = document.querySelector(".profile_picture");

// let profileStyle = profile[0].style;
// let profilePic = document.getElementsByClassName('profile_picture')
// // console.dir(profilePic[0]);
// let profilePicStyle = profilePic[0].style;
// console.dir(profile[0].style);

// 스타일 선택
function profileStyleSelect(element,sty) {
  element.style.display = sty.D;
  element.style.flexDirection = sty.F;
  element.style.width = sty.W;
  element.style.height = sty.H;
  element.style.justifyContent = sty.J;
  element.style.alignItems = sty.A;
  element.style.borderRadius = sty.B;
}
// 함수에 밸류값 넣기
let profileStyling = profileStyleBox("flex","column","35vw","75vh","center","center");
let profilePicStyling = profileStyleBox("","","350px","350px","","","50%");
// 함수 실행
profileStyleSelect(profile,profileStyling);
profileStyleSelect(profilePic,profilePicStyling)