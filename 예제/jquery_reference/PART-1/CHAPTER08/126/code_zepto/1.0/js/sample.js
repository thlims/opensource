$(function(){
  // 이미지에 click 이벤트를 연계한다(바인딩한다)
  $("img").bind("click", function(){
    // 클릭한 이미지 alt 속성을 읽는다
    var altText = this.alt;
    // 이미지 alt 속성 내용 표시
    $("#result").text("클릭 이벤트 발생："+altText);
  });
});