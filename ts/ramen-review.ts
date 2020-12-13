class RamenReview {

    private _reviewId: number;
    private _brand: string;
    private _variety: string;
    private _style: string;
    private _country: string;
    private _stars: number;

    constructor(reviewId: number, brand: string, variety: string, style: string, country: string, stars: number) {
        this._reviewId = reviewId;
        this._brand = brand;
        this._variety = variety;
        this._style = style;
        this._country = country;
        this._stars = stars;
    }

    /**
     * Getter reviewId
     * @return {number}
     */
    public get reviewId(): number {
        return this._reviewId;
    }

    /**
     * Getter brand
     * @return {string}
     */
    public get brand(): string {
        return this._brand;
    }

    /**
     * Getter variety
     * @return {string}
     */
    public get variety(): string {
        return this._variety;
    }

    /**
     * Getter style
     * @return {string}
     */
    public get style(): string {
        return this._style;
    }

    /**
     * Getter country
     * @return {string}
     */
    public get country(): string {
        return this._country;
    }

    /**
     * Getter stars
     * @return {number}
     */
    public get stars(): number {
        return this._stars;
    }

    /**
     * Setter reviewId
     * @param {number} value
     */
    public set reviewId(value: number) {
        this._reviewId = value;
    }

    /**
     * Setter brand
     * @param {string} value
     */
    public set brand(value: string) {
        this._brand = value;
    }

    /**
     * Setter variety
     * @param {string} value
     */
    public set variety(value: string) {
        this._variety = value;
    }

    /**
     * Setter style
     * @param {string} value
     */
    public set style(value: string) {
        this._style = value;
    }

    /**
     * Setter country
     * @param {string} value
     */
    public set country(value: string) {
        this._country = value;
    }

    /**
     * Setter stars
     * @param {number} value
     */
    public set stars(value: number) {
        this._stars = value;
    }

}