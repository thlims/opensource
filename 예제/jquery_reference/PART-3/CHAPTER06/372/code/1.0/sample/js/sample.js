// pagecreate이벤트 처리
$("#page01").live("pagecreate", function(){
  $("output:eq(0)").text("pagecreate이벤트발생");
});
// pageinit이벤트 처리
$("#page01").live("pageinit", function(){
  $("output:eq(1)").text("pageinit이벤트발생");
});
// pagebeforeshow이벤트 처리
$("#page01").live("pagebeforeshow", function(){
  $("output:eq(2)").text("pagebeforeshow이벤트발생");
});
// pageshow이벤트 처리
$("#page01").live("pageshow", function(){
  $("output:eq(3)").text("pageshow이벤트발생");
});
