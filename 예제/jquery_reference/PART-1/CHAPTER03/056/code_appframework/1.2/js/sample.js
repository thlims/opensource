$(function(){
  $("#btn").click(function(){
    $(":file").each(function(){
      // 파일 이름 표시
      var filename = $(this).val();
      alert(filename);
    });
  });
});