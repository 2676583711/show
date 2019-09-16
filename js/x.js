// jquery 实现 页面跳转
$(document).ready(function() {
  $("#f").click(function() {
    window.location.replace("./index.html");
  });
});

///文字打印
var t1 = "悯农";
var t2 = "作者：李绅";
var t3 = "春种一粒粟，";
var t4 = "秋收万颗子。";
var t5 = "四海无闲田，";
var t6 = "农夫犹饿死。";

var c1 = 1;
var c2 = 1;
var c3 = 1;
var c4 = 1;
var c5 = 1;
var c6 = 1;
var limit = 10;
function d() {
  $("#text1").text(t1.substr(0, c1));
  c1++;
  if (c1 >= 2) {
    $("#text2").text(t2.substr(0, c2));
    c2++;
  }
  if (c2 >= limit) {
    $("#text3").text(t3.substr(0, c3));
    c3++;
  }

  if (c3 >= limit) {
    $("#text4").text(t4.substr(0, c4));
    c4++;
  }

  if (c4 >= limit) {
    $("#text5").text(t5.substr(0, c5));
    c5++;
  }
  if (c5 >= limit) {
    $("#text6").text(t6.substr(0, c6));
    c6++;
  }

  //所有的文字写完，从新开始
  if (c6 > 10) {
    c1 = 1;
    c1 = 1;
    c2 = 1;
    c3 = 1;
    c4 = 1;
    c5 = 1;
    c6 = 1;
    //每次写完之后，擦除以前缩写的内容
    $("#text1").text(" ");
    $("#text2").text(" ");
    $("#text3").text(" ");
    $("#text4").text(" ");
    $("#text5").text(" ");
    $("#text6").text(" ");
  }
}
setInterval("d()", 250);

/////**换图　按钮 */

$(document).ready(function() {
  $("#previous").click(function() {
    $("#img").attr("src", "./pictures/next.jpg");
  });
  $("#fan").click(function() {
    $("#img").attr("src", " ./pictures/x1.jpg");
  });

  $("#next").click(function() {
    $("#img").attr("src", "./pictures/2.jpg");
  });
});
