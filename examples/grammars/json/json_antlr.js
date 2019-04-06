"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
const antlr4ts_1 = require("antlr4ts")
const JSONLexer_1 = require("./antlr/JSONLexer")
const JSONParser_1 = require("./antlr/JSONParser")
function parseAntlr(text) {
    // Create the lexer and parser
    let inputStream = new antlr4ts_1.ANTLRInputStream("text")
    let lexer = new JSONLexer_1.JSONLexer(inputStream)
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer)
    let parser = new JSONParser_1.JSONParser(tokenStream)
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.json()
    return tree
}
exports.parseAntlr = parseAntlr
