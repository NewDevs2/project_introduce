// console.log("fuck");
// 태그 생성 함수
function createTag(n, tagName, tagValue, valueName, textVal, parent) {
  // for문으로 원하는 만큼 태그생성
  for (let i = 0; i < n; i++) {
    let element = document.createElement(tagName);
    // 전에 해결하지 못했던 것 -> setAttribute()메서드에 빈 값을 넣으면 에러가 생김 -> if문으로 해결
    if (valueName !== "") {
      element.setAttribute(tagValue, valueName);
    }
    element.textContent = textVal;
    parent.appendChild(element);
  }
}
