$(function(){
  // 첫 번째 버튼에 이벤트 할당
  $(":button:eq(0)").click(function(){
    // h1 요소 CRLabo 속성을 읽고 메시지 창에 표시
    alert($("h1:first").css("CRLabo"));
  });
  // 두 번째 버튼에 이벤트 할당
  $(":button:eq(1)").click(function(){
    // h1 요소 CRLabo 속성 값(진위 값) 읽기
    var flag = $("h1:first").css("CRLabo");
    // true←→false를 교대로 바꿔 속성에 설정한다
    $("h1:first").css("CRLabo", !flag);
  });
});
// CRLabo라는 커스텀 CSS 프로퍼티을 이용할 수 있게 한다
$.cssHooks["CRLabo"] = {
  // 읽기 경우의 처리
  get : function(ele, computed, extra ) {
    return $(ele).data("CRLabo");
      },
  // 값을 설정하는 경우의 처리
  // CRLabo 속성에는 true나 false 설정 가능
  // true라면 빨간 문자색으로 설정, 그렇지 않으면 검은색으로 표시한다
      set: function(ele, value){
    // 설정 값을 data() 매소드로 저장한다
    $(ele).data("CRLabo", value);
    // true인 경우의 처리
    if (value === true){
      $(ele).css("color", "red");
    }else{
    // false인 경우의 처리
      $(ele).css("color", "black");
    }
      }
}
