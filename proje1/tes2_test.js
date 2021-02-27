
Feature('test2');

  //------------------------------------------------------------------------------
  //---------------------TEST2 FIRST PART------------------------------------------
  //------------------------------------------------------------------------------

  Scenario('TEST2-Detaylı Arama', ({ I }) => {
      I.amOnPage('/');
      I.click('Detaylı Arama');
      I.click('[href="/arama/detayli?category=3517"]');
      I.click('[href="/arama/detayli?category=3532"]');
      I.wait(2);
      I.fillField('a269_min', '1998');
      I.fillField('a269_max', '1999');
      I.wait(2);
      I.scrollTo('//*[@id="categoryMeta"]/div/table[1]/tbody/tr[14]/td[1]/label');
      I.click('//*[@id="categoryMeta"]/div/table[1]/tbody/tr[14]/td[2]/dl/dd/div/div');
      I.fillField('select_a1331', 'Gri');
      I.click('Gri');
      I.wait(2);
      I.scrollIntoView('[class="smallCheckBox"]:nth-child(2)');
      I.click('Çekiş Kontrolü');
      I.click('Arama Yap');
      I.wait(5);
  });


