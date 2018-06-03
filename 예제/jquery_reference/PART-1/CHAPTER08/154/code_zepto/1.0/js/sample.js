$(function(){
  // 이미지에 hover 이벤트를 할당한다
  $("#photo1").hover(
    // 마우스가 겹칠 때의 처리를 설정한다
    function(){
      // 이미지 불투명도 설정
      $(this).fadeTo(50, 0.5);
      // 마우스가 겹친 상태임을 알리는 메시지 표시
      $("#result").text("마우스가 겹쳤습니다");
  },  // 마우스가 벗어났을 때의 처리를 설정한다
    function(){
      // 이미지 불투명도 설정
      $(this).fadeTo(50, 1.0);
      // 마우스가 떨어진 상태임을 알리는 메시지 표시
      $("#result").text("마우스가 떨어졌습니다");
    }
  );
});