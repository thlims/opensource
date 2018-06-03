$(function(){
  // 자동 완성 기능을 설정한다
  $("#pet").autocomplete({
    // 표시 목록을 설정한다
    source:[
      "<img src='images/dog.png'>풍산개",
      "<img src='images/dog.png'>삽살개",
      "<img src='images/dog.png'>진돗개",
      "<img src='images/dog.png'>썰매용개",
      "<img src='images/dog.png'>도베르만",
      "<img src='images/dog.png'>치와와",
      "<img src='images/cat.png'>페르시아고양이",
      "<img src='images/cat.png'>메인쿤고양이",
      "<img src='images/cat.png'>맹크스고양이",
      "<img src='images/cat.png'>샴고양이"
    ],
    // HTMLタグを有効にする
    html : true
  });
});