const hasNoSelfEquality = require("has-no-self-equality")

module.exports = function isNaN(value) {
  return hasNoSelfEquality(value)
}