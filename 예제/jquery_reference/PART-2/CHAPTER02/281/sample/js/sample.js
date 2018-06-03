$(function(){
  // 스피너를 설치한다
  $("#orderNumber").spinner({
    // 1회 증감 값을 설정한다
    step : 5,
    // pageup/pagedown 버튼을 눌렀을 때의 증감 값을 설정한다
    page: 20
  });
});