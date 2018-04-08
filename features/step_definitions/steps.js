const { client }  = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const bbc_sports = client.page.bbc_sports();

defineSupportCode(({ Given, Then, When }) => {

    Given('I have opened the Sports page', function () {
        return bbc_sports
            .navigate()
            .waitForElementVisible('@body', 1000)
            .expect.element('@more_button').to.be.present;
    });

    When('I click on the More button', function () {
        return bbc_sports.click('@more_button');
    });

    When('I select the {string}', function (string) {
        return bbc_sports
            .select_item('css selector', '.gs-o-list-ui button', string)
    });


    Then('I will see {int} sports', function (int) {
        return bbc_sports.verify.countOfItemsOnList('css selector', '.gs-o-list-ui', 'button', int);
    });

    Then('I will see these sports', function (dataTable) {
        const data_list = dataTable.raw();
        return bbc_sports
            .verify.textContentOfItemsOnList('css selector', '.gs-o-list-ui', 'button', data_list);
    });

    Then('the {string} is displayed', function (string) {
        return bbc_sports
            .expect.element('button.sp-c-filter-nav__link.sp-c-filter-nav__link--selected').text.to.equal(string);

    });



});

