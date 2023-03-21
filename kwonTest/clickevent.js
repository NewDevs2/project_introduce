const park = document.querySelector("nav > div:nth-child(1)");
const kwon = document.querySelector("nav > div:nth-child(2)");
const kwak = document.querySelector("nav > div:nth-child(3)");
const he = document.querySelector("nav > div:nth-child(4)");
const jang = document.querySelector("nav > div:nth-child(5)");
const maintext = document.querySelector("header > div");
console.log(park);
const clear = document.querySelector("main > div:nth-child(1)");
const cleartwo = document.querySelector("main > div:nth-child(2)");


maintext.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");

  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://avatars.githubusercontent.com/u/127065539?s=200&v=4");
  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>메인 페이지 입니다.";

});

park.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");
  
  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://ca.slack-edge.com/T02JAN3TFEU-U04PP5ELBEW-1623fd59ef56-512");
  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>팀장입니다.";
});
kwon.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");
  
  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://avatars.githubusercontent.com/u/127065539?s=200&v=4");
  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>팀원1입니다.";
});
kwak.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");
  
  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://avatars.githubusercontent.com/u/127065539?s=200&v=4");
  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>팀원2입니다.";
});
he.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");
  
  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://avatars.githubusercontent.com/u/127065539?s=200&v=4");
  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>팀원3입니다.";

});
jang.addEventListener('click',function(){
  clear.replaceChildren();
  cleartwo.replaceChildren();
  childerLayout("main > div:nth-child(1)","img",1);
  childerLayout("main > div:nth-child(2)","div",1);

  const One = document.querySelector("main > div:nth-child(1) > img");
  const Two = document.querySelector("main > div:nth-child(2) > div");
  
  Object.assign(clear.style, clearStyle);
  Object.assign(One.style , OneStyle);
  Object.assign(Two.style , TwoStyle);
  One.setAttribute("src" , "https://ca.slack-edge.com/T02JAN3TFEU-U04P8T3FB0F-d0f61132ff87-512");

  Two.innerHTML = "안녕하세요 <br>반갑습니다.<br>팀원4입니다.";
});