require('jsdom-global')()

global.expect = require('expect')
global.mount = require('@vue/test-utils').mount // shallow mount can be useful for stubbing child components

// extend vue-test-utils
// https://www.npmjs.com/package/vtu-extension
