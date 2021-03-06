$(function(){
  // 카운터 준비
  var counter = 1;
  // 비동기 처리를 실행한다
  proc_OK()
    // 처리를 순서대로 실행하기 위해 then()를 지정한다
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK2(); } )
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK2(); } )
    // always는 성공, 실패와 관계없이 처리가 끝났을 때 처리한다
    .always( msg_ok );
  // 정상 처리를 실행하는 함수
  function proc_OK(){
    // Deferred 오브젝트를 작성한다
    var def = new $.Deferred();
    // notify 실행시 호출하는 함수를 지정한다
    def.progress(dispStatus);
    // 1초 후에 처리를 실행한다
    setTimeout(function(){
      // 화면에 정상 처리되었음을 알리는 문자를 표시하기 위해 notify()를 실행한다
      def.notifyWith($("#result1"), ["type1", "OK func"]);
      // 성공했음(resolve)을 알린다. 반환 값은 Promise 오브젝트
      return def.resolve();
    }, 1000);
    // Promise 오브젝트를 반환한다(중요)
    return def.promise();
  }
  // 정상 처리를 실행하는 함수. 2. 위의 함수와 같으므로 내용은 생략
  function proc_OK2(){
    var def = new $.Deferred();
    def.progress(dispStatus);
    setTimeout(function(){
      def.notifyWith($("#result2"), ["type2", "OK2 func"]);
      return def.resolve();
    }, 1000);
    return def.promise();
  }
  // 정상 종료 메시지를 표시하는 함수
  function msg_ok(){
    $("#result3").html($("#result3").html() + "<br>처리가 끝났습니다");
  }
  // notify 메소드 실행시 호출하는 함수. 매개 변수도 전달된다
  function dispStatus(type, msg){
    this.html(this.html() + "<br>"+type+" : "+counter+"：정상 처리했습니다."+msg);
    counter++;
  }
});
