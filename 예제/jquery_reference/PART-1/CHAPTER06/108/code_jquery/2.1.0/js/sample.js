$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // input 요소를 읽는다
    var text = $("input:first").val();
    // output 요소에 출력한다
    $("output:first").val(text);
  });
  // 두 번째 버튼에 클릭 이벤트 할당
  $(":button:eq(1)").click(function(){
    // input 요소에 텍스트로 출력
    $("input:first").val(Math.random());
  });
});