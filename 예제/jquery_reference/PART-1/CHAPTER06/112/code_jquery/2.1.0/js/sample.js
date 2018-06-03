$(function(){
  // 첫 번째 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // ID 이름 imageList 중 이미지를 둘러싸고 있는 div 요소를 삭제한다
    $("#imageList img").unwrap();
  });
});