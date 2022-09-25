$(function () {
    var bar = '';

    bar += '<!-- footer -->';
    bar += '<footer class="footer">';
        bar += '<div class="container">';
            bar += '<div class="row">';
                bar += '<!-- footer list -->';
                bar += '<div class="col-12 col-md-3">';
                    bar += '<h6 class="footer__title">Download Our App</h6>';
                    bar += '<ul class="footer__app">';
                        bar += '<li><a href="#"><img src="/assets/img/Download_on_the_App_Store_Badge.svg" alt=""></a></li>';
                        bar += '<li><a href="#"><img src="/assets/img/google-play-badge.png" alt=""></a></li>';
                    bar += '</ul>';
                bar += '</div>';
                bar += '<!-- end footer list -->';

                bar += '<!-- footer list -->';
                bar += '<div class="col-6 col-sm-4 col-md-3">';
                    bar += '<h6 class="footer__title">Resources</h6>';
                    bar += '<ul class="footer__list">';
                        bar += '<li><a href="/m/about-us/">About Us</a></li>';
                        bar += '<li><a href="#">Pricing Plan</a></li>';
                        bar += '<li><a href="/m/help/">Help</a></li>';
                        bar += '</ul>';
                bar += '</div>';
                bar += '<!-- footer list -->';

                bar += '<!-- footer list -->';
                bar += '<div class="col-6 col-sm-4 col-md-3">';
                    bar += '<h6 class="footer__title">Legal</h6>';
                    bar += '<ul class="footer__list">';
                        bar += '<li><a href="/m/police/terms-of-use/">Terms of Use</a></li>';
                        bar += '<li><a href="/m/police/privacy-police/">Privacy Policy</a></li>';
                        bar += '<li><a href="/m/police/security/">Security</a></li>';
                        bar += '</ul>';
                bar += '</div>';
                bar += '<!-- footer list -->';

                bar += '<!-- footer list -->';
                bar += '<div class="col-12 col-sm-4 col-md-3">';
                    bar += '<h6 class="footer__title">Contact</h6>';
                    bar += '<ul class="footer__list">';
                        bar += '<li><a href="tel:-"> </a></li>';
                        bar += '<li><a href="mailto:andrep13.id@gmail.com">andrep13.id@gmail.com</a></li>';
                    bar += '</ul>';
                    bar += '<ul class="footer__social">';
                        bar += '<li class="instagram"><a href="#"><i class="bx bxl-instagram-alt"></i></a></li>';
                        bar += '<li class="tiktok"><a href="#"><i class="bx bxl-tiktok"></i></a></li>';
                    bar += '</ul>';
                bar += '</div>';
                bar += '<!-- footer list -->';

                bar += '<!-- footer copyright -->';
                bar += '<div class="col-12">';
                    bar += '<div class="footer__copyright">';
                        bar += '<small><a href="/" target="_blank">Copyright &copy; 2022 Video - Blog Andre</a></small>';
                        
                        bar += '<ul>';
                            bar += '<li><a href="/m/police/terms-of-use/">Terms of Use</a></li>';
                            bar += '<li><a href="/m/police/privacy-police/">Privacy Policy</a></li>';
                        bar += '</ul>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</footer>';

    $("#footer").html(bar);
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