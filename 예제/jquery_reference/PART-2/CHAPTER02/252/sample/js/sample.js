$(function(){
  // 첫 번째 버튼을 그래픽 버튼으로 무효로 한다
  $("a:eq(0)").button({ disabled : true });
  // 두 번째 이후 버튼을 그래픽 버튼으로 한다
  $("a:gt(0)").button();
  // 3초 후 첫 번째 버튼을 유효하게 한다
  setTimeout(function(){
    // 버튼을 유효하게 하도록 설정한다
    $("a:eq(0)").button("option", "disabled", false);
  }, 5*1000);
});