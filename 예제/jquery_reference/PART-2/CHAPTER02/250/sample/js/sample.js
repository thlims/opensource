$(function(){
  // 자동 완성 기능을 설정한다.
  $("#devicetype").autocomplete({
    // 표시 목록을 설정한다
    source:[
      "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S", "iPhone 5",
      "iPad", "iPad2", "새로운 iPad", "iPad mini",
      "Android", "안드로이드", "Nexus 7", "Nexus 10"
    ]
  });
  // 버튼 클릭시 자동 완성 기능을 취소한다
  $("#destroy").click(function(){
    try{
      $("#devicetype").autocomplete("destroy");
    }catch(e){
      alert("이미 삭제되었습니다");
    }
  });
});