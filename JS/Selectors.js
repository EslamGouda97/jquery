// window.onload = function () {
//     alert("alret");
//     //Any Selctor Code ===>HTML After Loading
// };//End of Loading Page

// jQuery(document).ready(function () {
//     alert("HIII");
// })
// $(window).ready(function () {
//     alert('hi');
// })

// $(function () {
    // alert("HI from JQuery")
    //Selectors
/*
jQuery(Selector).action()
*/

    // //GetByTagName
    // console.log($("li")
    // );

    // $("li").css("backgroundColor", "lightgreen");
    // $("li").css({
    //     "color": 'yellow',
    //     border: '1px solid red',
    //     width: '320px',
    //     margin: '5px',
    //     backgroundColor: 'green'
    // })
    // //byID
    // console.log(example)
    // console.log(document.getElementById("example"));
    // console.log($("#example"));
    // $("#example").css({
    //     backgroundColor: 'red'
    // })
    // $(".active").css({
    //     backgroundColor: 'yellow',
    //     color: 'green'
    // })
    //Grouping Selector
    // $("#example,.active,p").css({
    //     color:'cyan',
    //     backgroundColor:'green'
    // })

    // $("*").css({
    //     border:'2px solid red',
    //     backgroundColor:'lightgreen',
    //     margin:'5px',
    //     padding:'3px'
    // })
    // $("body").css({
    //     border:'5px solid yellow'
    // })

    //Attribute Selectors
    // $("a[href]")//all Anchors with href
    // $("a[href='http://www.iti.gov.eg']").css({
    //     backgroundColor:'yellow',
    //     border:'2px solid green'
    // })
    // $("a[href^='http']").css({
    //     backgroundColor:'red'
    // })
    // $("a[href*='oo'][name]").css({
    //     backgroundColor:'green'
    // })
    // $("input[type=text]").css({
    //     backgroundColor:'pink'
    // })
    // $(":text").css({
    //     backgroundColor:'green'
    // })
    // $("li:first").css({
    //     backgroundColor:'red'
    // })

    // $("li:eq(0)").css({
    //     backgroundColor:"green"
    // })
    // $("li:eq(-1)").css({
    //     backgroundColor:"red"
    // })

    // $("li:first-child").css({
    //     backgroundColor:'cyan'
    // })
    // $("li:nth-child(1)").css({
    //     backgroundColor:'green'
    // })

    // $("table tr").css({
    //     backgroundColor:'green'
    // })

    // $("#example p").css({
    //     backgroundColor:'yellow'
    // })
    // $("#example  > p").css({
    //     backgroundColor:'green'
    // })

    // // $("img + input").css({
    // //     backgroundColor:'green'
    // // })
    // $("img ~ input").css({
    //     backgroundColor: 'green'
    // })
    // $("li:odd").css({
    //     border: '2px solid green'
    // })
    // $("li:gt(3)").css({
    //     border: '2px solid green',
    //     backgroundColor: 'pink'
    // })
    // $("li:lt(3)").css({
    //     border: '2px solid green',
    //     backgroundColor: 'yellow'
    // })

    // $("tr td").each(function (index, elem) {
    //     // console.log(index);
    //     // console.log(elem);
    //     console.log(elem.innerText)//As html selector element
    //     console.log($(elem).text());//as JQuery Object

    // })
    // console.log($("div:empty"));
    // $("div:empty").css({
    //     backgroundColor: 'green',
    //     width: '120px',
    //     height: '150px'
    // })
    // console.log($("div:parent"));

    // console.log($("img").next());
    // console.log($("img").nextAll("input"));
    // console.log($("img").parent())
    // console.log($("img").parents("html"))
    // console.log($("#example").children())
    // console.log($("#example").children("p:first"));

    //text===>prop innerText
    //html===>prop innerHTML
    //val====>value(===>inputs any elment has value attirbute)
    // $("li").hover(function (event) {
    // alert("test");
    // debugger;
    // if ($(this).hasClass("active")) {
    //     console.log("test");
    //     $(this).removeClass("active");
    // }
    // else {
    //     $(this).addClass("active")
    // }
    // $(this).toggleClass("active");
    // });

