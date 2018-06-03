$(function(){
  // 읽을 JSON 파일 URL
  var url = "./data.json";
  // 같은 도메인의 서버에 있는 data.json 파일을 읽는다
  $.getJSON(url, function(data, status, jqXHR){
    // JSON 데이터에서 year 속성 값을 읽는다
    var year = data.year;
    // JSON 데이터에서 month 속성 값을 읽는다
    var month = data.month;
    // JSON 데이터에서 name 속성 값을 읽는다
    var name = data.name
    $("#result").text("읽어들인 데이터："+year+"년"+month+"월　"+name);
  });
});