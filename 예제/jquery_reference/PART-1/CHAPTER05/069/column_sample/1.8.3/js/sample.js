$(function(){
  // input 요소 버튼에 click 이벤트를 할당한다
  $("#btn").click(function(){
    // 번호 매기기 목록의 항목에 CSS의 note 클랙스 추가
    var ele = $('<div>').add($(".caution"));
console.log(ele);
  });
});