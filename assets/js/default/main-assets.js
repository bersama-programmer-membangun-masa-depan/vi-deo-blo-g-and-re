$(function () {
    var bar = '';
    bar += '<!-- Font -->';
    bar += '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600%7CUbuntu:300,400,500,700" rel="stylesheet">';
    
    bar += '<!-- CSS -->';
    bar += '<link rel="stylesheet" href="/assets/css/bootstrap-reboot.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/bootstrap-grid.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/owl.carousel.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/jquery.mCustomScrollbar.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/nouislider.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/ionicons.min.css">';
    bar += '<link rel="stylesheet" href="/assets/css/plyr.css">';
    bar += '<link rel="stylesheet" href="/assets/css/photoswipe.css">';
    bar += '<link rel="stylesheet" href="/assets/css/default-skin.css">';
    bar += '<link rel="stylesheet" href="/assets/css/main.css">';

    bar += '<!-- JS -->';
    bar += '<script src="/assets/js/jquery-3.3.1.min.js"></script>';
    bar += '<script src="/assets/js/bootstrap.bundle.min.js"></script>';
    bar += '<script src="/assets/js/owl.carousel.min.js"></script>';
    bar += '<script src="/assets/js/jquery.mousewheel.min.js"></script>';
    bar += '<script src="/assets/js/jquery.mCustomScrollbar.min.js"></script>';
    bar += '<script src="/assets/js/wNumb.js"></script>';
    bar += '<script src="/assets/js/nouislider.min.js"></script>';
    bar += '<script src="/assets/js/plyr.min.js"></script>';
    bar += '<script src="/assets/js/jquery.morelines.min.js"></script>';
    bar += '<script src="/assets/js/photoswipe.min.js"></script>';
    bar += '<script src="/assets/js/photoswipe-ui-default.min.js"></script>';
    bar += '<script src="/assets/js/main.js"></script>';

    $("#navbar").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('blabz').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}