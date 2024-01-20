//create the same object any number of times
// $(function () {

//     $(".red").click(function () {
//         let newDiv = this.cloneNode();
//         document.body.append(newDiv);
//     });
//     $(".green").click(function () {
//         let newDiv = this.cloneNode();
//         document.body.append(newDiv);
//     });
//     $(".blue").click(function () {
//         let newDiv = this.cloneNode();
//         document.body.append(newDiv);
//     });
// });

// on click (only one item)
$(function () {

    $(".red").click(function () {
        let newDiv = this.cloneNode();
        document.body.append(newDiv);
        $(".red").off('click');
    });
    $(".green").click(function () {
        let newDiv = this.cloneNode();
        document.body.append(newDiv);
        $(".green").off('click');
    });
    $(".blue").click(function () {
        let newDiv = this.cloneNode();
        document.body.append(newDiv);
        $(".blue").off('click');
    });
});

