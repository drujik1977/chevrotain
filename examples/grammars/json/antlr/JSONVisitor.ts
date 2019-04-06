// Generated from json/JSON.g4 by ANTLR 4.7.3-SNAPSHOT

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor"

import { JsonContext } from "./JSONParser"
import { ObjContext } from "./JSONParser"
import { PairContext } from "./JSONParser"
import { ArrayContext } from "./JSONParser"
import { ValueContext } from "./JSONParser"

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JSONParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JSONVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `JSONParser.json`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson?: (ctx: JsonContext) => Result

    /**
     * Visit a parse tree produced by `JSONParser.obj`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObj?: (ctx: ObjContext) => Result

    /**
     * Visit a parse tree produced by `JSONParser.pair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPair?: (ctx: PairContext) => Result

    /**
     * Visit a parse tree produced by `JSONParser.array`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray?: (ctx: ArrayContext) => Result

    /**
     * Visit a parse tree produced by `JSONParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result
}
