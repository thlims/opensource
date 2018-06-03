$(function(){
  // Array 생성
  var langList = ["Java", "Ruby", "Python", "JavaScript", "Java", "Ada", "C", "FORTH" ];
  // "JavaScript"가 배열에 있는지 확인한다
  var flag1 = $.inArray("JavaScript", langList);
  // "COBOL"이 배열에 있는지 확인한다
  var flag2 = $.inArray("COBOL", langList);
  // "Java"가 배열 3번째 이후에 있는지 확인한다
  var flag3 = $.inArray("Java", langList, 2);
  // 결과 출력
  $("output:first").html("JavaScript："+flag1+"<br>COBOL："+flag2+"<br>Java："+flag3);
});