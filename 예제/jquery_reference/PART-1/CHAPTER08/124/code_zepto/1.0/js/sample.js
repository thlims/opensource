$(function(){
  // 버튼에 이벤트를 할당한다
  $("#btn").on("click", function(){
    // 이미지를 추가한다
    $("#basePoint").append('<img src="images/photo1.jpg" width="160" height="120" alt="">');
  });
  // 처음부터 있는 이미지만 페이드 이펙트를 설정한다
  $("img").on("mouseover", function(){
    $(this).fadeTo("fast", 0.25);
  });
  $("img").on("mouseout", function(){
    $(this).fadeTo("fast", 1.0);
  });
  // document 위에 있는 모든 이미지에 클릭 이벤트를 할당한다
  $(document).on("click", "img", function(){
    // 클릭하면 경고 다이얼로그를 표시한다
    alert("클릭하였습니다");
  });
});