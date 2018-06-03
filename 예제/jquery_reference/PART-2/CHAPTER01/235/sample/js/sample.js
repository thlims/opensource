$(function(){
  // 이미지를 드래그할 수 있도록 한다
  $("img").draggable();
  // 드롭 영역을 설정한다
  $("#dropZone").droppable({
    drop : function(evt, ui){
      // 드롭된 이미지 alt 속성을 표시한다
      $("#dropZone").text(ui.draggable[0].alt);
    }
  });
});