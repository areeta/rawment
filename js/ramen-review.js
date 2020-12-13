"use strict";
class RamenReview {
    constructor(reviewId, brand, variety, style, country, stars) {
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
    get reviewId() {
        return this._reviewId;
    }
    /**
     * Getter brand
     * @return {string}
     */
    get brand() {
        return this._brand;
    }
    /**
     * Getter variety
     * @return {string}
     */
    get variety() {
        return this._variety;
    }
    /**
     * Getter style
     * @return {string}
     */
    get style() {
        return this._style;
    }
    /**
     * Getter country
     * @return {string}
     */
    get country() {
        return this._country;
    }
    /**
     * Getter stars
     * @return {number}
     */
    get stars() {
        return this._stars;
    }
    /**
     * Setter reviewId
     * @param {number} value
     */
    set reviewId(value) {
        this._reviewId = value;
    }
    /**
     * Setter brand
     * @param {string} value
     */
    set brand(value) {
        this._brand = value;
    }
    /**
     * Setter variety
     * @param {string} value
     */
    set variety(value) {
        this._variety = value;
    }
    /**
     * Setter style
     * @param {string} value
     */
    set style(value) {
        this._style = value;
    }
    /**
     * Setter country
     * @param {string} value
     */
    set country(value) {
        this._country = value;
    }
    /**
     * Setter stars
     * @param {number} value
     */
    set stars(value) {
        this._stars = value;
    }
}
