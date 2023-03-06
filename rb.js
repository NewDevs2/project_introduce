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
// 프로필 
let pro = document.querySelector(".profile_picture");
let profile = document.getElementsByClassName('profile');
let profileStyle = profile[0].style;
let profilePic = document.getElementsByClassName('profile_picture')
// console.dir(profilePic[0]);
let profilePicStyle = profilePic[0].style;
// console.dir(profile[0].style);
function profileStyleSelect(profileStyle,sty) {
  profileStyle.display = sty.D;
  profileStyle.flexDirection = sty.F;
  profileStyle.width = sty.W;
  profileStyle.height = sty.H;
  profileStyle.justifyContent = sty.J;
  profileStyle.alignItems = sty.A;
  profileStyle.borderRadius = sty.B;
}

let profileStyling = profileStyleBox("flex","column","35vw","75vh","center","center");
let profilePicStyling = profileStyleBox("","","350px","350px","","","50%");
profileStyleSelect(profileStyle,profileStyling);
profileStyleSelect(profilePicStyle,profilePicStyling)