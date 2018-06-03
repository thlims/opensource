$(function(){
  // 세로형 슬라이더를 설치한다
  $("#myslider").slider({
    // 세로형 슬라이더로 한다
    orientation : "vertical",
    // 초기 값을 설정한다
    value : 50,
    // 핸들을 드래그 중인 경우에 슬라이더 값을 표시한다
    slide: function( event, ui ){
      // 슬라이더 값을 읽는다
      var val = ui.value;
      // 슬라이더 값을 표시한다
      $("#result").html("음량："+val);
    },
  });
});