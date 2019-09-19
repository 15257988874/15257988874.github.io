    var OriginTitle = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            // $('[rel="icon"]').attr('href', "/img/trhx2.png");
            document.title = '页面崩溃了~！';
            clearTimeout(titleTime);
        }
        else {
            // $('[rel="icon"]').attr('href', "/img/trhx2.png");
            document.title = '恢复啦~！' + OriginTitle;
            titleTime = setTimeout(function () {
                document.title = OriginTitle;
            }, 2000);
        }
    });