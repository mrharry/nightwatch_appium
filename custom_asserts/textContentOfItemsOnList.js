/**
 * Checks if the element has the expected number of elements.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.countOfItemsOnList('css selector', '.class', 'button', 'some value');
 *    };
 * ```
 *
 * @method attributeEquals
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} element The element selector (id, class).
 * @param {string} attribute The attribute name (button, li)
 * @param {string} expected The expected value.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, element, attribute, expected, msg) {

    const element_with_attribute  = element + ' ' + attribute;
    let found = [];

    const DEFAULT_MSG = 'Testing the element <%s> with the attribute "%s" has "%s" items.';

    this.message = msg || util.format(DEFAULT_MSG, element, attribute, expected);

    this.expected = function() {

        return expected;
    };

    this.pass = function(value) {
        console.log("inside pass  " + JSON.stringify(value))

    };

    this.value = function(result) {
        return result
    };

    this.command = function(callback) {

        self = this.api;
        this.api.elements(selector, element_with_attribute, function(res) {
            let items_processed = 0;
            res.value.forEach(function(el) {
                self.elementIdText(el.ELEMENT, function (res_text) {
                    found.push(res_text.value);
                    items_processed++;
                    if(items_processed === res.value.length) {
                        callback(found);
                    }
                });

            });

        });
    };
};


