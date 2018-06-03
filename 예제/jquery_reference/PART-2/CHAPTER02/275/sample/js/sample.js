$(function(){
  // 슬라이더를 설치한다
  $("#myslider").slider({
    // 슬라이더 값을 표시한다
    slide: function( event, ui ){
      // 시작 값을 읽는다
      var startValue = ui.values[0];
      //종료 값을 읽는다
      var endValue = ui.values[1];
      // 값을 표시한다 
      $("#result").html(
          "시작 각도："+startValue+
          "<br>종료 각도："+endValue
      );
    },
    // 시작 값(최솟값)을 설정한다
    min : 20,
    // 종료 값(최댓값)을 설정한다
    max : 80,
    // 시작 값과 종료 값의 초기 값을 설정한다
    values : [ 40, 70 ],
    // 범위 슬라이더로 설정한다
    range : true
  });
});