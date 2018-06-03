$(function(){
  // btn1에 이벤트 설정
  $("#btn1").toggle(function(){
    // 이미지 슬라이드 업
    $("#photo1").slideUp("slow");
  },function(){
    // 이미지 슬라이드 다운
    $("#photo1").slideDown(2000);
  });
  // btn2에 이벤트 설정
  $("#btn2").toggle(function(){
    // 이미지를 슬라이드 업하고 메시지 표시
    $("#photo2").slideUp(2000, function(){
      $("output:first").text("슬라이드 업 완료");
    });
  },function(){
    // 이미지를 슬라이드 다운하고 메시지 표시
    $("#photo2").slideDown(2000, function(){
      $("output:first").text("슬라이드 다운 완료");
    });
  });
});