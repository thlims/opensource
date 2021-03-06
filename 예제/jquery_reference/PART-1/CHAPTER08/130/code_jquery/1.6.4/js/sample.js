$(function(){
  // 첫 번째 이미지에 mouseover 이벤트를 할당한다
  $("#gallery img:eq(0)").mouseover({ camera : "Nikon D1X", year: 2004 }, message);
  // 두 번째 이미지에 mouseover 이벤트를 할당한다
  $("#gallery img:eq(1)").mouseover({ camera : "EOS 5D mark II", year: 2010 }, message);
  // 세 번째 이미지에 mouseover 이벤트를 할당한다
  $("#gallery img:eq(2)").mouseover({ camera : "TM700", year: 2011 }, message);
  // mouseover시 호출되는 이벤트 핸들러
  function message(evt){
    // 촬영 카메라 이름
    var cameraName = evt.data.camera;
    // 촬영 연월일
    var ymd = evt.data.year;
    // 데이터를 이미지에 표시
    $("output:first").html("카메라："+cameraName+"<br>촬영연도："+ymd);
  }
});