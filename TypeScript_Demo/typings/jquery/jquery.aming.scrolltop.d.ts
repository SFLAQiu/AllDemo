interface AMingScrollTopOption {

    mainwidth?: Number;

    top?: Number;

    width?: Number;

    height?: Number;

    imgurl?: string;

    scrolltime?: Number;

    showopacity?: Number;
}

interface JQuery {
    aming_scrolltop(options: AMingScrollTopOption): JQueryStatic;
}