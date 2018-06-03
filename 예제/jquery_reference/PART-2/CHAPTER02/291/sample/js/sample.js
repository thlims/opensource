$(function(){
  // 툴 팁을 설정한다
  $("#worldtime a").tooltip();
  // 1초마다 내용을 갱신한다
  (function(){
    // 현재 시간을 읽는다
    var dt = new Date();
    // 시각을 읽고 두 자리로 정렬한다
    var h = ("0"+dt.getHours()).slice(-2);
    var m = ("0"+dt.getMinutes()).slice(-2);
    var s = ("0"+dt.getSeconds()).slice(-2);
    var time = h+"시"+m+"분"+s+"초";
    // 툴 팁 내용을 변경하여 쓴다
    $("#worldtime a").tooltip("option", "content", time);
    // 1초마다 갱신 처리를 호출한다
    setTimeout(arguments.callee, 1000);
  })();
});