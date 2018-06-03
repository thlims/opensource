$(function(){
    // Selectmenu 위젯의 커스텀 메소드 selectmenuIcon을 작성한다
    $.widget("custom.selectmenuIcon", $.ui.selectmenu, {
      // 그릴 때 요소와 스타일을 처리(아이콘 부가)한다
      _renderItem: function( ul, item ) {
        // option 요소의 항목 내용을 읽는다
        var li = $( "<li>", { text: item.label } );
        // 아이콘을 부가하기 위한 span 요소 설정
        $("<span>", {
          // data-iconurl 속성을 읽고 CSS의 style(style 속성)으로 설정한다
          style : "background: url("+item.element.attr("data-iconurl")+") 0px 0px",
          // jQuery UI의 아이콘 표시의 CSS 클래스 이름 ui-icon을 추가한다
          class : "ui-icon"
        }).appendTo(li);
        // 아이콘을 추가한 목록 항목 요소를 반환한다
        return li.appendTo(ul);
      }
    });
  // 위에 작성한 메소드를 호출하면 자동으로 아이콘이 부가된다
  $("#mySelectMenu").selectmenuIcon()
});