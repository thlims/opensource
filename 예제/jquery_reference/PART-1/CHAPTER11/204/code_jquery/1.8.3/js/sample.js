$(function(){
  // 카운터 준비
  var counter = 1;
  // 1회째 비동기 처리를 실행한다. 모두 정상인 경우
  proc_OK()
    // 처리를 순서대로 실행하기 위해 then()을 지정한다
    .then( function(){ return proc_OK(); }, function(){ return proc_NG(); } )
    .then( function(){ return proc_NG(); }, function(){ return proc_NG(); } )
    .then( function(){ return proc_OK(); }, function(){ return proc_NG(); } )
    // done은 성공시 호출된다
    .done( msg_ok )
    // fail은 실패시 호출된다
    .fail( msg_ng )
    // always는 처리의 성공, 실패와 관계없이 호출된다
    .always( msg_end );
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
  // 정상 완료 메시지를 표시하는 함수
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>처리가 끝났습니다");
  }
  // 실패시 종료 메시지를 표시하는 함수
  function msg_ng(){
    $("#result").html($("#result").html() + "<br>처리가 정상적으로 끝나지 않았습니다");
  }
  // 완료 메시지를 표시하는 함수
  function msg_end(){
    $("#result").html($("#result").html() + "<br>모든 처리가 끝났습니다");
  }
});
