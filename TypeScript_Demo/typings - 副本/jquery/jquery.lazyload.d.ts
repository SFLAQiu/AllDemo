interface LazyloadOptions {
    threshold: number;
    failure_limit: number;
    event: string;
    effect: string;
    container: any;
    data_attribute: string;
    skip_invisible: boolean;
    appear: any;
    load: any;
    placeholder: string;
}

interface JQuery {
    lazyload(settings?: LazyloadOptions): JQuery;
}