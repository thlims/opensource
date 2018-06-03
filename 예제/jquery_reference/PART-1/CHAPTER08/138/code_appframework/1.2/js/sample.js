$(function(){
  // 이미지에 click 이벤트를 할당한다
  $("#photo1").click(function(evt){
    // 이벤트 발생시 시간 취득
    var time = evt.timeStamp;
    // Date 오브젝트 매개 변수에 지정
    var dateObj = new Date(time);
    // 시간 취득
    var h = dateObj.getHours();
    // 분 취득
    var m = dateObj.getMinutes();
    // 초 취득
    var s = dateObj.getSeconds();
    // 밀리 초 취득
    var ms = dateObj.getMilliseconds();
    // 클릭한 시간 표시
    $("#result").text(h+"시"+m+"분"+s+"초."+ms);
  });
});