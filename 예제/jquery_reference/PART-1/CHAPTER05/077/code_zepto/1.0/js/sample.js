$(function(){
  // 문서에 click 이벤트를 할당한다
  $(document).bind("click", function(evt){
    // 결과 표시 요소를 클리어한다
    $("#result").text("");
    // 클릭시 body 요소 외의 부모 요소를 모두 출력한다
    $(evt.target).parentsUntil("body").each(function(index){
      // 내용을 읽는다
      var htmlText = $("#result").html();
      // 태그 이름（요소 이름）을 얻는다
      htmlText += this.tagName + "<br>";
      // 결과를 표시한다
      $("#result").html(htmlText);
    });
  });
});