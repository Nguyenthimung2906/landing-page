; (function (win, $) {
    

    // Header
    var  $gnbItem = $(".gnb_item"),
    $briefItem = $(".brief_item")
    function handleClick() {
        $(this).addClass('is_click').siblings().removeClass('is_click')
    }

    $gnbItem.click(handleClick);
    $briefItem.click(handleClick)

    // 

    $(function () {
    });

    $(win).on('load', function () {
    });
})(window, window.jQuery);
