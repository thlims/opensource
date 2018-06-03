$(function(){
  // 버튼에 click 이벤트 할당
  $(":button:eq(0)").click(function(){
    // 
	ID 이름 imageList 중 세 번째 뒤에 있는 이미지 전체를 불투명으로 표시한다
    $("#imageList img:eq(2)").nextAll().css("opacity", 0.3);
  });
});