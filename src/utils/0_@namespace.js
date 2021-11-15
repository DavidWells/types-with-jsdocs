// https://github.com/onury/jsdoc-x/blob/master/test/input-parse/test3.es5.js
   
(function () {
    'use strict';

    /**
     *  Test namespace properties.
     *  @namespace
     *  @global
     *  @name namespace
     *  @type {Object}
     */
    var namespace = {};

    /**
     *  Similar to `window.location` but with differences and additional
     *  information.
     *
     *  @name namespace.location
     *  @type {Object}
     *  @readonly
     *
     *  @property {String} pathname - Gets the path and filename of the current URL, without the base.
     *  @property {String} query - Gets the querystring part of the current URL, without `?` prefix.
     *  @property {String} origin - Gets the protocol, hostname and port number of the current URL.
     *  @property {String} hostname - Gets the domain name of the web host.
     *  @property {String} host - Gets the host.
     *  @property {String} href - Gets the href (URL) of the current location.
     *  @property {String} path - Gets the path, filename and query-string of the current URL, without the base.
     *  @property {String} hash - Gets the anchor `#` of the current URL, without `#` prefix.
     *  @property {Function} getQuery() - Gets the value of the given querystring parameter.
     *  @property {String} protocol - Gets the web protocol used, including `:` suffix.
     */
    Object.defineProperty(namespace, 'location', {
        configurable: false,
        get: function () {
            return {
                host: window.location.host,
                hostname: window.location.hostname,
                origin: window.location.origin,
                port: window.location.port,
                protocol: window.location.protocol,
                hash: (window.location.hash || '').replace(/^#/, ''),
                query: (window.location.search || '').replace(/^\?/, ''),
                href: window.location.href,
                pathname: window.location.pathname,
                path: window.location.pathname + (window.location.search || ''),
                getQuery: function () {
                    return '';
                }

            };
        }
    });

})();

// ───────────────────────
// https://jsdoc.app/about-namepaths.html
// IDK why you'd use this .shrug

/** @namespace */
var chat = {
  /**
   * Refer to this by chat."#channel"
   * @namespace
   */
  "#channel": {
    /**
     * Refer to this by chat."#channel".open
     * @type {boolean}
     * @defaultvalue
     */
    open: true,
    /**
     * Internal quotes have to be escaped by backslash. This is
     * {@link chat.channel.say-\"hello\"}.
     */
    'say-"hello"': function (msg) {}
  }
};