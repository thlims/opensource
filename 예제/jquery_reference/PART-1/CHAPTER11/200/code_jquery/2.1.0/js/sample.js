$(function(){
  // $.when()로 모든 처리가 정상 종료하기를 기다린다
  // 지정한 3개의 메소드는 다른 초 후에 처리를 실행한다
  $.when(
    sleep(3),
    sleep(6),
    sleep(1)
  )
  // 처리가 정상적으로 종료한 경우 done()를 지정한다
  .done( msg_ok );
  // 일정 시간 후에 메시지를 표시하는 함수
  function sleep(sec){
    // Deferred 오브젝트를 생성한다
    var def = new $.Deferred();
    // 지정된 초 후에 메시지를 표시한다
    setTimeout(function(){
      $("#result").html($("#result").html() + "●"+sec+", ");
      // 처리가 성공했음(resolve)을 알리고 호출자에게 반환한다(중요)
      def.resolve();
    }, sec*1000);
    // sleep 함수는 Deferred의 Promise 오브젝트를 반환한다(중요)
    return def.promise();
  }
  // 정상 종료 메시지를 표시하는 함수
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>정상적으로 처리가 끝났습니다");
  }
});
