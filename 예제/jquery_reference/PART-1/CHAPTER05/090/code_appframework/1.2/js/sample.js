$(function(){
  $("#sale")
    // th 요소에 액세스하여 그 앞 요소인 #sale로 돌아간다
    .find("th").css("color", "red").end()
    //  td 요소에 액세스하여 그 앞 요소인 #sale로 돌아간다
    .find("td").css("background-color", "yellow").end()
    // tr 요소에 액세스하여 그 앞 요소인 #sale로 돌아간다
    .find("tr").eq(2).css("color", "red");
});