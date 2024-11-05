const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://frontend-776943981745.us-central1.run.app/',
      //url: 'http://localhost:3000',
      //show: true,
      show: false,
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'frontend_IS3_TPintegrador'
}