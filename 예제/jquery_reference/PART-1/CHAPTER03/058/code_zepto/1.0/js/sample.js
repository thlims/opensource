$(function(){
  // 첫 번째 버튼에 이벤트를 할당한다
  $(":button:eq(0)").click(function(){
    $("img").each(function(){
      // 모든 img 요소를 애니메이션한다
      $(this).animate({ 
        height: "240px",
        borderWidth: "10px"
      }, 8000 );
    });
  });
  // 두 번째 버튼에 이벤트를 할당한다
  $(":button:eq(1)").click(function(){
    // 애니메이션 중 img 요소의 불투명도를 25%로 한다
    $("img:animated").css("opacity", 0.25);
  });
});