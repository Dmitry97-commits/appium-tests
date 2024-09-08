exports.config = {
  runner: 'local',
  port: 4723,
  specs: [
    './test/specs/**/*.js'
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '15.0',
    'appium:automationName': 'UiAutomator2',
    'appium:avd': 'Medium_Phone_API_35',
    'appium:avdLaunchTimeout': 120000,
    'appium:avdReadyTimeout': 120000,
    'appium:avdArgs': '-netdelay none -netspeed full',
    'appium:enforceXPath1': true,
  }],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  services: ['appium'],
  appium: {
    command: 'appium'
  },
  reporters: ['spec']
};