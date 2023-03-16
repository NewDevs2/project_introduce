23.03.06
장루빈 팀원
-> 팀 소개 페이지 제작

1. 개인성향 파악을 위해 정해진 UI에 별도의 기준 없이 작업.
2. 정적으로 제작했습니다
header, main, footer(일단 제작)
header > div(NewDevs로고)
nav(팀원 리스트) > div(팀원 명)
main > left_Section(사진, 팀원 명)
main > right_Section(개인 소개)
footer(현재 공란)
<body>
header
main > nav
footer
</body>

3. 각 설명은 주석에
4. 23.03.16 -> 태그생성 함수를 활용해 동적으로 element를 생성중입니다
   동적으로 요소를 생성하던 중 style값들이 필요해서 스타일 함수 제작필요
   -> 스타일링 함수를 제작했는데 내가 원하는 최적의 환경은 아닌 것 같다 -> 리터럴을 몽땅 거두고 호출도 많이 하고싶지 않은데 현재는 여기가 한계인 듯
