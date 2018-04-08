const pageCommands = {

    select_item: function(selector, item_list, item) {

        const self = this.api;
        return this.api.elements('css selector', item_list, function(els) {

            els.value.forEach(function(element) {
                self.elementIdText(element.ELEMENT, function (result) {
                    if (result.value == item) {
                        self.elementIdClick(result.ELEMENT);
                    }
                });
            });
        });
    }

};


module.exports = {

    commands: [pageCommands],

    url: 'http://www.bbc.co.uk/sport/',

    elements: {
        body: 'body',
        more_button: '.sp-c-filter-nav > div > button',
        menu: '.sp-c-filter-nav > ul[role=menu]'
    }
};
