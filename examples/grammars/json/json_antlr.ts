import { ANTLRInputStream, CommonTokenStream } from "antlr4ts"
import { JSONLexer } from "./antlr/JSONLexer"
import { JSONParser } from "./antlr/JSONParser"
import { PredictionMode } from "antlr4ts/atn/PredictionMode"

export function parseAntlrSLL(text) {
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(text)
    let lexer = new JSONLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new JSONParser(tokenStream)
    parser.interpreter.setPredictionMode(PredictionMode.SLL)

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.json()
    return tree
}

export function parseAntlrLL(text) {
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(text)
    let lexer = new JSONLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new JSONParser(tokenStream)

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.json()
    return tree
}
