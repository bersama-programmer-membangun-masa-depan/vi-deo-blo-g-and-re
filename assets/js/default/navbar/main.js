$(function () {
    var bar = '';

    bar += '<!-- header -->';
    bar += '<header class="header">';
        bar += '<div class="header__wrap">';
            bar += '<div class="container">';
                bar += '<div class="row">';
                    bar += '<div class="col-12">';
                        bar += '<div class="header__content">';
                            bar += '<!-- header logo -->';
                            bar += '<a href="/" class="header__logo">';
                                bar += '<h3>Blog Andre</h3>';
                            bar += '</a>';
                            bar += '<!-- end header logo -->';

                            bar += '<!-- header nav -->';
                            bar += '<ul class="header__nav">';
                                bar += '<!-- dropdown -->';
                                bar += '<li class="header__nav-item">';
                                    bar += '<a class="dropdown-toggle header__nav-link" href="/" role="button">Home</a>';
                                bar += '</li>';
                                bar += '<!-- end dropdown -->';

                                bar += '<!-- dropdown --';
                                bar += '<li class="header__nav-item">';
                                    bar += '<a class="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>';
                                    
                                    bar += '<ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">';
                                        bar += '<li><a href="catalog1.html">Catalog Grid</a></li>';
                                        bar += '<li><a href="catalog2.html">Catalog List</a></li>';
                                        bar += '<li><a href="details1.html">Details Movie</a></li>';
                                        bar += '<li><a href="details2.html">Details TV Series</a></li>';
                                    bar += '</ul>';
                                bar += '</li>';
                                bar += '<!-- end dropdown -->';

bar += '<!-- TUTUP --';
                                bar += '<li class="header__nav-item">';
                                    bar += '<a href="/m/pricing/" class="header__nav-link">Pricing Plan</a>';
                                bar += '</li>';
bar += '<!-- TUTUP -->';
                                bar += '<li class="header__nav-item">';
                                    bar += '<a href="/m/help/" class="header__nav-link">Help</a>';
                                bar += '</li>';

                                bar += '<!-- dropdown --';
                                bar += '<li class="dropdown header__nav-item">';
                                    bar += '<a class="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon ion-ios-more"></i></a>';
    
                                    bar += '<ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">';
                                        bar += '<li><a href="about.html">About</a></li>';
                                        bar += '<li><a href="signin.html">Sign In</a></li>';
                                        bar += '<li><a href="signup.html">Sign Up</a></li>';
                                        bar += '<li><a href="404.html">404 Page</a></li>';
                                    bar += '</ul>';
                                bar += '</li>';
bar += '<!-- TUTUP -->';
                            bar += '</ul>';

                            bar += '<!-- header auth -->';
                            bar += '<div class="header__auth">';
                            bar += '<!-- Search --';
                                bar += '<button class="header__search-btn" type="button">';
                                    bar += '<i class="icon ion-ios-search"></i>';
                                bar += '</button>';
                            bar += '<!-- Search -->';

                                bar += '<a href="auth/" class="header__sign-in">';
                                    bar += '<i class="icon ion-ios-log-in"></i>';
                                    bar += '<span>sign in</span>';
                                bar += '</a>';

                            bar += '</div>';
                            bar += '<!-- header auth -->';

                            bar += '<!-- header menu btn -->';
                            bar += '<button class="header__btn" type="button">';
                                bar += '<span></span>';
                                bar += '<span></span>';
                                bar += '<span></span>';
                            bar += '</button>';
                            bar += '<!-- end header menu btn -->';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';

        bar += '<!-- header search -->';
        bar += '<form action="#" class="header__search">';
            bar += '<div class="container">';
                bar += '<div class="row">';
                    bar += '<div class="col-12">';
                        bar += '<div class="header__search-content">';
                            bar += '<input type="text" placeholder="Search for a movie, TV Series that you are looking for">';
                            bar += '<button type="button">search</button>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</form>';
        bar += '<!-- end header search -->';
    bar += '</header>';

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