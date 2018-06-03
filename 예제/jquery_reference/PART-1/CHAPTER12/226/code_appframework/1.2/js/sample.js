$(function(){
  $("input[type=button]").click(function(){
    // 텍스트 필드 내용 취득
    var str = $("#myData").val();
    // 좌우 공백 삭제
    var resultStr = $.trim(str);
    // 결과 출력
    $("#result").html("<br>처리 전："+str+"【"+escape(str)+"】<br>"+
          "처리 후："+resultStr+"【"+escape(resultStr)+"】");
  });
});