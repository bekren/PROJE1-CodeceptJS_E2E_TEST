

Feature('test1');

//------------------------------------------------------------------------------
//---------------------TEST1 FIRST PART------------------------------------------
//------------------------------------------------------------------------------
Scenario('TEST1-sahibinden.com logosu', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.logo').topLevelOrigin;
    I.wait(2);
});



Scenario('TEST2-arama kutusu', ({ I }) => {
    I.amOnPage('/');
    I.see('Ara').topLevelOrigin;
    I.amOnPage('/arama');
    I.wait(2);
});

Scenario('TEST3-detaylı arama bağlantısı', ({ I }) => {
    I.amOnPage('/');
    I.see('Detaylı Arama').topLevelOrigin;
    I.amOnPage('/arama/detayli');
    I.wait(2);
});

Scenario('TEST4-Giriş Yap', ({ I }) => {
    I.amOnPage('/');
    I.see('Giriş Yap').topLevelOrigin;
    I.amOnPage('/giris');
    I.wait(2);
});

Scenario('TEST5-Üye ol', ({ I }) => {
    I.amOnPage('/');
    I.see('Üye Ol').topLevelOrigin;
    I.amOnPage('/kayit');
    I.wait(2);
});

Scenario('TEST6-Ücretsiz İlan Ver', ({ I }) => {
    I.amOnPage('/');
    I.see('Ücretsiz* İlan Ver').topLevelOrigin;
    I.amOnPage('/ilan-ver');
    I.wait(2);
});
//------------------------------------------------------------------------------
//---------------------TEST1 SECOND PART---------------------------------------
//------------------------------------------------------------------------------
Scenario('TEST7-Anasayfa Vitrini', ({ I }) => {
    I.amOnPage('/');
    I.see('Anasayfa Vitrini').mid;
    I.seeNumberOfElements('//*[@id="container"]/div[3]/div/div[2]/div[3]/ul/li', 56);
    I.wait(2);
});
//------------------------------------------------------------------------------
//---------------------TEST1 THIRD PART ---------------------------------------
//------------------------------------------------------------------------------
Scenario('TEST8-Vasıta', ({ I }) => {
    I.amOnPage('/');
    I.see('Vasıta').left;
    I.see('Otomobil').left;
    I.see('Arazi, SUV & Pickup').left;
    I.see('Motosiklet').left;
    I.wait(2);
});


