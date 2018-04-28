import { Tag } from '../models/tag';

export class Query {

    private endpoint: string;
    private method: string;
    private api_key: string;
    private format: string;
    private auth_token: string;
    private api_sig: string;
    private per_page: number;
    private page: number;
    private imageTags: Tag[];
    private noJsonCallback: boolean;
    private min_taken_date: string;

    /**
     * Getter $endpoint
     * @return {string}
     */
    public get $endpoint(): string {
        return this.endpoint;
    }

    /**
     * Getter $method
     * @return {string}
     */
    public get $method(): string {
        return this.method;
    }

    /**
     * Getter $api_key
     * @return {string}
     */
    public get $api_key(): string {
        return this.api_key;
    }

    /**
     * Getter $format
     * @return {string}
     */
    public get $format(): string {
        return this.format;
    }

    /**
     * Getter $auth_token
     * @return {string}
     */
    public get $auth_token(): string {
        return this.auth_token;
    }

    /**
     * Getter $api_sig
     * @return {string}
     */
    public get $api_sig(): string {
        return this.api_sig;
    }

    /**
     * Setter $endpoint
     * @param {string} value
     */
    public set $endpoint(value: string) {
        this.endpoint = value;
    }

    /**
     * Setter $method
     * @param {string} value
     */
    public set $method(value: string) {
        this.method = value;
    }

    /**
     * Setter $api_key
     * @param {string} value
     */
    public set $api_key(value: string) {
        this.api_key = value;
    }

    /**
     * Setter $format
     * @param {string} value
     */
    public set $format(value: string) {
        this.format = value;
    }

    /**
     * Setter $auth_token
     * @param {string} value
     */
    public set $auth_token(value: string) {
        this.auth_token = value;
    }

    /**
     * Setter $api_sig
     * @param {string} value
     */
    public set $api_sig(value: string) {
        this.api_sig = value;
    }

    /**
     * Getter $per_page
     * @return {number}
     */
    public get $per_page(): number {
        return this.per_page;
    }

    /**
     * Setter $per_page
     * @param {number} value
     */
    public set $per_page(value: number) {
        this.per_page = value;
    }

    /**
     * Getter $page
     * @return {number}
     */
    public get $page(): number {
        return this.page;
    }

    /**
     * Setter $page
     * @param {number} value
     */
    public set $page(value: number) {
        this.page = value;
    }

    /**
     * Getter $imageTags
     * @return {Tag[]}
     */
    public get $imageTags(): Tag[] {
        return this.imageTags;
    }

    /**
     * Setter $imageTags
     * @param {Tag[]} value
     */
    public set $imageTags(value: Tag[]) {
        this.imageTags = value;
    }

    /**
     * Getter $noJsonCallback
     * @return {boolean}
     */
    public get $noJsonCallback(): boolean {
        return this.noJsonCallback;
    }

    /**
     * Setter $noJsonCallback
     * @param {boolean} value
     */
    public set $noJsonCallback(value: boolean) {
        this.noJsonCallback = value;
    }

    /**
    * Getter $min_taken_date
    * @return {string}
    */
    public get $min_taken_date(): string {
        return this.min_taken_date;
    }

    /**
     * Setter $min_taken_date
     * @param {string} value
     */
    public set $min_taken_date(value: string) {
        this.min_taken_date = value;
    }

    /**
     * Convert the Query class to a valid url
     */
    public toUrl() {
        return this.endpoint + "/?" +
            "method=" + this.$method + "&" +
            "format=" + this.$format + "&" +
            "api_key=" + this.$api_key + "&" +
            "per_page=" + this.$per_page + "&" +
            "page=" + this.$page + "&" +
            "tags=" + this.imageTags + "&" +
            "min_taken_date=" + (Date.parse(this.$min_taken_date) / 1000).toString() + "&" +
            "nojsoncallback=" + Number(this.$noJsonCallback);
    }
}