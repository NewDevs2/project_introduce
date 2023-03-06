function Flex(Tag){
  Tag.style.display="flex";
  Tag.style.justifyContent="center";
  Tag.style.alignItems="center";
}

const Profile = document.getElementsByClassName("profile")[0];

Profile.children[1].style.cssText="margin-top:20px; font-size:40px; text-align:center;"

const info=document.getElementsByClassName("info")[0];
info.style.cssText="width:55vw; height:75vh;"
Flex(info);
