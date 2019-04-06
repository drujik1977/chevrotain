import { ANTLRInputStream, CommonTokenStream } from "antlr4ts"
import { JSONLexer } from "./antlr/JSONLexer"
import { JSONParser } from "./antlr/JSONParser"

export function parseAntlr(text) {
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream("text")
    let lexer = new JSONLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new JSONParser(tokenStream)

    // Parse the input, where `compilationUnit` is whatever entry point you defined
    let tree = parser.json()
    return tree
}
