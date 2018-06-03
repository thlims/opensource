$(function(){
  // 카운터 준비
  var counter = 1;
  // 1회째 비동기 처리를 실행한다. 모두 정상인 경우
  proc_OK()
    // 처리를 순서대로 실행하기 위해 then()을 지정한다
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK(); } )
    // fail은 처리가 실패한 경우만 처리한다
    .fail( msg_ng );
  // 정상 처리를 실행하는 함수
  function proc_OK(){
    // Deferred 오브젝트를 작성한다
    var def = new $.Deferred();
    // 1초 후에 처리를 실행한다
    setTimeout(function(){
      // 화면에 정상 처리되었음을 알리는 문자를 표시한다
      $("#result").html($("#result").html() + "<br>"+counter+"：정상적으로 처리했습니다");
      counter++;
      // 성공했음(resolve)을 알린다
      return def.resolve();
    }, 1000);
    // Promise 오브젝트를 반환한다(중요)
    return def.promise();
  }
  // 실패 처리를 실행하는 함수
  function proc_NG(){
    // Deferred 오브젝트를 작성한다
    var def = new $.Deferred();
    // 0.1초 후에 처리를 실행한다
    setTimeout(function(){
      // 화면에 실패했음을 알리는 문자를 표시한다
      $("#result").html($("#result").html() + "<br>"+counter+"：처리에 실패했습니다");
      counter++;
      // 실패했음(reject)을 알린다
      return def.reject();
    }, 100);
    // Promise 오브젝트를 반환한다(중요)
    return def.promise();
  }
  // 정상 종료 메시지를 표시하는 함수
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>처리가 끝났습니다");
  }
  // 실패시 종료 메시지를 표시하는 함수
  function msg_ng(){
    $("#result").html($("#result").html() + "<br>처리가 정상적으로 끝나지 않았습니다");
  }
});
