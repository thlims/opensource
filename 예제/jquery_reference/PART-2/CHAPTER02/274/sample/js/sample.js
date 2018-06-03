$(function(){
  // 슬라이더를 설치한다
  $("#myslider1").slider();
  // 실시간으로 숫자가 표시되는 슬라이더를 설치한다
  $("#myslider2").slider({
    // 핸들 드래그 중인 경우에 슬라이더 값을 표시한다
    slide: function( event, ui ){
      // 슬라이더 값을 읽는다
      var val = ui.value;
      // 슬라이더 값을 표시한다
      $("#result").html("풍량："+val);
    },
    // 핸들을 놓는 경우에 슬라이더 값을 표시한다
    change: function( event, ui ){
      // 슬라이더 값을 읽는다
      var val = ui.value;
      // 슬라이더 값을 표시한다
      $("#result").html("풍량："+val+"로 결정했습니다");
    }
  });
});