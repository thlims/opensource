$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#photo1").one("click", function(){
    // 이미지 불투명도 설정
    $(this).fadeTo(100, 0.5);
    // 클릭한 부분을 나타내기 위한 메시지 표시
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    $("#result").text(h+"시"+m+"분"+s+"초에 클릭하였습니다");
  });
});