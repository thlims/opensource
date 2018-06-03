// jQuery 오브젝트에만 inc 메소드를 추가한다
$.extend({
  inc : function(n){ return n + 1; }
});
$(function(){
  // 더하기 버튼에 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    // 텍스트 필드로부터 데이터 읽기
    var num = parseFloat($("#myContent").val());
    // 더하기를 한다
    var result = $.inc(num);
    // 결과를 표시한다
    $("output:first").text("더하기 결과："+result);
  });
});

