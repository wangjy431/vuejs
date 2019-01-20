var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until

var drvier = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
drvier.get('http://www.baidu.com');
drvier.findElement(By.id('kw')).sendKeys('webdriver');
drvier.findElement(By.id('su')).click();
drvier.wait(until.titleIs('webdriver_百度搜索'),10000);