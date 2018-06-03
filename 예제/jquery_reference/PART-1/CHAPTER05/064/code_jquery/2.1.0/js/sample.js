$(function(){
  $("#sale tbody tr").each(function(index){
    // tr 요소 다음의 첫 번째 td 요소 문자를 읽는다
    var tdText = $(this).find("td:eq(0)").text();
    // 인덱스 번호에 1을 더한 값과 읽은 문자 연결
    tdText = (1+index) + tdText;
    // td 요소로 되돌린다
    $(this).find("td:eq(0)").text(tdText)
  });
});