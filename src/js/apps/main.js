; (function (win, $) {

    // Header
    var  $gnbItem = $(".gnb_item"),
    $briefItem = $(".brief_item")
    function handleClick() {
        $(this).addClass('is_click').siblings().removeClass('is_click')
    }

    $gnbItem.click(handleClick);
    $briefItem.click(handleClick)

    $(function () {
        sample2.init();
        sample3.init();
    });

    $(win).on('load', function () {
        sample.init();
        sample4();
        sample5();
        $('body').sample6();
    });
})(window, window.jQuery);
