var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  'os': 'windows',
  'os_version': '10',
  'browserName': 'chrome',
  'browser_version' : 'latest',
  

const capabilities1 = {
  'browserName': 'chrome',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '10',
  'browserstack.local': 'true',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}
const capabilities2 = {
	'browserName': 'firefox',
  'browser_version': '92.0',
  'os': 'Windows',
  'os_version': '10',
  'browserstack.local': 'true',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}

const capabilities3 = {
	'browserName': 'Safari',
  'browser_version': 'latest',
  'os': 'OS X',
  'os_version': 'Big Sur',
  'browserstack.local': 'true',
  'build': process.env.BROWSERSTACK_BUILD_NAME,
  'project': process.env.BROWSERSTACK_PROJECT_NAME,
  'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
  'browserstack.user': process.env.BROWSERSTACK_USERNAME,
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
}

async function runTestWithCaps (capabilities) {
  var driver = new webdriver.Builder()
    .usingServer('http://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

  // HTTP Server should be running on 8099 port of GitHub runner
  driver.get('http://localhost:8099').then(function () {
    driver.getTitle().then(function (title) {
      console.log(title);
      driver.quit();
    });
  });
}

runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);
