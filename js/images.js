$(document).ready(function ()
{
    var $loading = $(".box-container .box-image .loading");

    $loading.before("<figure class='image'><a href='#'><img class='img-responsive' src='img/1.jpg' /><figcaption><h4>Mutual of Omaha</h4></figcaption></a></figure>");

    $loading.remove();
});
