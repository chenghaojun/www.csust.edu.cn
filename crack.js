// 随便做题
$('.ui-question-options-order').each(function() {
  if ($(this).parent().attr('code') == 'a') {
    $(this).click();
  }
})


// 正确答案
var qa = {};
$('.ui-correct-answer').each(function() {
  var answer = $(this).attr('code');
  var $p = $(this).parent().parent();
  if ($p.attr('code')) {
    qa[$p.attr('code')] = answer;
  }
});
console.log(JSON.stringify(qa));


// 再次做题
(function(qa) {
  $('.ui-question-options').each(function() {
    var q = $(this).parent().attr('code');
    var a = qa[q];
    $(this).children('li').each(function() {
      if ($(this).attr('code') == a)
      {
        $(this).children('.ui-question-options-order').click();
      }
    })
  })
})(
{"psq_1133346":"a","psq_1133347":"b","psq_1133348":"c","psq_1133349":"d","psq_1133350":"d","psq_1133351":"c","psq_1133352":"d","psq_1133353":"b","psq_1133354":"a","psq_1133355":"b","psq_1133356":"b","psq_1133357":"a","psq_1133358":"d","psq_1133359":"d","psq_1133360":"d","psq_1133361":"c","psq_1133362":"a","psq_1133363":"d","psq_1133364":"b","psq_1133365":"c","psq_1133366":"a","psq_1133367":"b","psq_1133368":"b","psq_1133369":"a","psq_1133370":"b","psq_1133371":"a","psq_1133372":"b","psq_1133373":"a","psq_1133374":"b","psq_1133375":"b","psq_1133376":"b","psq_1133377":"b","psq_1133378":"a","psq_1133379":"a","psq_1133380":"a","psq_1133381":"a","psq_1133382":"a","psq_1133383":"a","psq_1133384":"b","psq_1133385":"a"}
);


// 去掉右键弹出限制
$(window).unbind("contextmenu");
$(window).unbind("selectstart");
