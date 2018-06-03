$(function(){
  // 지정한 초만큼 기다렸다가 처리를 실행한다
  // sleep 함수는 promise 오브젝트를 반환하므로 메소드 체인으로 접속
  sleep(1)
    // 처리를 순서대로 하기 위해 then()을 지정한다
    .then( function(){ return sleep(2); } )
    .then( function(){ return sleep(3); } )
    // 처리가 정상 완료된 경우는 done()을 지정한다
    .done( msg_ok );
  // 일정 시간 후 메시지를 표시하는 함수
  function sleep(sec){
    // Deferred 오브젝트를 생성한다
    var def = new $.Deferred();
    // 지정된 초 후에 메시지를 표시한다
    setTimeout(function(){
      $("#result").html($("#result").html() + "●"+sec+", ");
      // 처리가 성공했음(resolve)을 호출자에게 반환한다（중요）
      def.resolve();
    }, sec*1000);
    // sleep 함수에서는 Deferred의 Promise 오브젝트를 반환한다（중요）
    return def.promise();
  }
  // 정상 종료 메시지를 표시하는 함수
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>정상적으로 처리가 끝났습니다");
  }
});
