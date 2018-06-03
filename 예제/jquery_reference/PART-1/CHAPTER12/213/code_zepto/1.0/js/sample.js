$(function(){
  // 확인을 위해 카운터 준비
  var count = 1;
  // 오브젝트 작성
  var myObj = {
    codeNo : 700,
    getCode : function(val){
      var htmlText = $("#result").html();
      $("#result").html(htmlText+count+" : "+this.codeNo+"●"+val+"<br>");
      count++;
    }
  };
  // 오브젝트２ 작성
  var myObj2 = {
    codeNo : 1500
  };
    // 버튼에 이벤트 할당
    // this는 이벤트 오브젝트에 설정
$("#btn1").click(myObj.getCode);
  // this를 myObj에 설정
  $("#btn2").click($.proxy(myObj.getCode, myObj));
  // this를 myObj2에 설정
  $("#btn3").click($.proxy(myObj.getCode, myObj2));
  // this를 myObj2에 설정하고 매개 변수를 전달한다
  $("#btn4").click($.proxy(myObj.getCode, myObj2, 2531));
  // 직접 myObj 메소드 호출 결과 표시. This는 myObj
  myObj.getCode();
});
