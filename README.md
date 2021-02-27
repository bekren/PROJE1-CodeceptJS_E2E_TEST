# PROJE1-CodeceptJS_E2E_TEST
 JavaScript(JS)
 
The project was developed using WebStorm IDE.
# Step1
### Before Running
 npm init -y
 
 npm install codeceptjs webdriverio --sav-dev
 
 npx codeceptjs init
 
 npx create-codeceptjs . --webdriverio
 
     Where are your tests located? ./*_test.js
 
    ? What helpers do you want to use? WebDriver

    ? Where should logs, screenshots, and reports to be stored? ./output

    ? Do you want localization for tests? (See https://codecept.io/translation/) (Use arrow keys)

    ? Do you want localization for tests? (See https://codecept.io/translation/) English (no localization)

    ? Feature which is being tested (ex: account, login, etc) test1

    ? Filename of a test test1_test.js

    Configure helpers...
    
    ? [WebDriver] Base url of site to be tested https://www.sahibinden.com

    ? [WebDriver] Browser in which testing will be performed chrome (or firefox)

npm install @wdio/selenium-standalone-service --save-dev

# Step2
### Run all test
npx codeceptjs run
### Run all test
npx codeceptjs run test1_test.js

npx codeceptjs run test2_test.js

npx codeceptjs run test3_test.js
# NOTES
You can change url and browser section into the codecept.conf.js file.
 
    WebDriver: {
      url: 'https://www.sahibinden.com',
      browser: 'chrome'
    }
  
