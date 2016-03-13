interface AMingSlideOptions {

    column_count?: number;

    rom_count?: number;

    change_time?: number;

    item_time?: number;

    imglist?: string[];
}

interface JQuery {
    amingslide(settings?: AMingSlideOptions): JQuery;
}