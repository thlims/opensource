$(function(){
  // document.body가 XML 노드에 있는지 확인한다
  var flag1 = $.isXMLDoc(document.body);
  // 체크를 위해 XML를 생성한다
  var domObj = new DOMParser();
  var xmlText = '<?xml version="1.0" encoding="UTF-8"?>';
  xmlText += '<data><item>MZ</item><item>PC</item></data>';
  var xmlDoc = domObj.parseFromString(xmlText, "text/xml");
  var itemNode = xmlDoc.getElementsByTagName("item");
  // itemNode[0]가 XML 노드에 있는지 확인한다
  var flag2 = $.isXMLDoc(itemNode[0]);
  // 결과 출력
  $("#result").html("document.body："+flag1+"<br>itemNode："+flag2);
});