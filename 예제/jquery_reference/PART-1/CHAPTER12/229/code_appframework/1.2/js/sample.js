$(function(){
  // XML 문자열
  var xmlText = "<cr><book><name>jQuery 책</name></book></cr>";
  // XML로 변환한다. 잘못된 값이 있으면 에러가 생기므로 주의 필요
  var xmlObj = $.parseXML(xmlText);
  // 책 이름을 읽는다
  var nameTag = $(xmlObj).find("name");
  var bookName = nameTag[0].textContent;
  // 결과를 표시한다
  $("#result").text(bookName);
});
