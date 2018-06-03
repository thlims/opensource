$(function(){
  // 자동 완성 기능을 설정한다
  $("#devicetype").autocomplete({
    // 표시 목록을 설정한다
    source:[
      "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S", "iPhone 5",
      "iPad", "iPad2", "새로운iPad", "iPad mini",
      "Android", "안드로이드", "Nexus 7", "Nexus 10",
      "Windows Phone", "Windows RT", "Windows 8", "Windows CE",
      "Galaxy", "Galaxy S2", "Galaxy Nexus", "Galaxy 3", "Galaxy Tab", "Galaxy 4"
    ],
    // 최소 3글자를 입력하지 않으면 자동 완성 검색어가 표시되지 않게 한다.
    minLength : 3
  });
});