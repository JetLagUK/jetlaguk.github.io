
const sizes = require("./sizes.json");
const units = require("./units.json");

module.exports = function() {
  const combos = [];

  for (const size of sizes) {
    for (const unit of units) {
      combos.push({ size, unit });
    }
  }

  return combos;
};
