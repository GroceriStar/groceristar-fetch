/* global test, describe, it, expect, jest */

const showcase = require('./showcase.js')

const methodsList = {
  getGrocery: showcase.__find('groceries', showcase.files)
}
