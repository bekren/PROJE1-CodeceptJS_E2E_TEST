
Feature('test3');

//------------------------------------------------------------------------------
//---------------------TEST3 FIRST PART------------------------------------------
//------------------------------------------------------------------------------

const assert = require('assert');

Scenario('TEST1-Yamaha MT07', async function({ I }) {
    I.amOnPage('/');
    I.fillField('query_text', 'Yamaha MT07');
    I.click('[value="Ara"]');
    I.click('[data-category="3517"]');
    let value = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/span');
    assert.strictEqual(value, '36');
});

Scenario('TEST2-Yamaha MT25', async function({ I }) {
    I.amOnPage('/');
    I.fillField('query_text', 'Yamaha MT25');
    I.click('[value="Ara"]');
    let value = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/span');
    assert.strictEqual(value, '61');
});

Scenario('TEST3-Yamaha MT09', async function({ I }) {
    I.amOnPage('/');
    I.fillField('query_text', 'Yamaha MT09');
    I.click('[value="Ara"]');
    let value = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[2]/div[1]/div[1]/span');
    assert.strictEqual(value, '18');
});
