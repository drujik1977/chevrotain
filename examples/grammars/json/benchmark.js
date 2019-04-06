const chevParse = require("./json").parse
const antlr = require("./json_antlr")

const result = antlr.parseAntlr('{ "x": null }')
const result2 = chevParse('{ "x": null }')
var x = 5
