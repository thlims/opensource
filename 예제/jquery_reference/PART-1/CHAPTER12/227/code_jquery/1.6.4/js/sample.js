$(function(){
  // 버튼에 클릭 이벤트 할당
  $("#del").click(function(){
    // 요소를 중복하여 취득한다. ele1, ele4, ele5 중복
    var ele1 = $("#myList li:eq(0)").get(0);
    var ele2 = $("#myList li:eq(2)").get(0);
    var ele3 = $("#myList li:eq(2)").get(0);
    var ele4 = $("#myList li:eq(0)").get(0);
    var ele5 = $("#myList li:eq(0)").get(0);
    // 요소를 배열에 넣는다
    var ary = [ ele1, ele2, ele3, ele4, ele5 ];
    // 중복된 요소를 삭제한다
    var result = $.unique(ary);
    // 배열 내용을 표시한다
    $(result).each(function(index, n){
      var str = $("output:eq(0)").html();
      str = str +  (1+index) + " : " + $(this).text() + "<br>";
      $("output:eq(0)").html(str);
    });
  });
});