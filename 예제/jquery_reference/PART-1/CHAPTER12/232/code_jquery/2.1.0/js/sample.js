$(function(){
  //  타이머로 현재 시각을 정기적으로 표시
  setInterval(function(){
    // 현재 시각 취득
    var time = $.now();
    // 시분초를 구한다
    var dateObj = new Date(time);
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 결과 출력
    $("output:first").text(h+"시"+m+"분"+s+"초");
  }, 1000);
});