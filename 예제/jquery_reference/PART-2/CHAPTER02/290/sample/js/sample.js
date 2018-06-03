$(function(){
  // 툴 팁을 설정한다
  $("#seList a").tooltip({
    // 표시 위치를 설정한다
    position: {
      // 툴 팁 오른쪽 아래를 기준으로 한다
      my: "right bottom",
      // 요소 위치를 가로를 중앙, 세로를 위쪽으로 한다
      at: "center top"
    }
  });
});