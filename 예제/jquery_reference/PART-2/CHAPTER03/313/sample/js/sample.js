$(function(){
  // div 요소를 클릭했을 때 처리
  $(".ef").click(function(){
    // 임의의 효과를 적용한다
    var effectList = ["blind", "clip", "drop", "explode", "fade", "fold", "puff"];
    var n = Math.random()*effectList.length | 0;
    // 효과를 실행한다
    $(this).effect(effectList[n]);
    // 효과 이름을 표시한다
    $(this).text(effectList[n]);
    // 3초(3000msec)후에 같은 효과로 표시한다
    (function(obj, efType){
      setTimeout(function(){
        // 효과를 사용하여 표시한다
        $(obj).show(efType);
      }, 3000);
    })(this, effectList[n]);
  });
});