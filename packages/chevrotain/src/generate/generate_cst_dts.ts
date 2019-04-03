import { Rule } from "../../api"
import { forEach } from "../utils/utils"

export function genCstSignatures(options: {
    name: string
    rules: Rule[]
}): string {
    const NL = "\n"

    let text = ""
    text += `import { CstNode, ICstVisitor, IToken } from "chevrotain` + NL
    text += NL

    // Visitor Interface
    text +=
        `export interface ${
            options.name
        }CstVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {` + NL
    forEach(options.rules, currRule => {
        const ruleName = currRule.name
        text += `  ${ruleName}(ctx: ${ruleName}Children, param?: IN): OUT` + NL
    })
    text += "}"
    text += NL

    // Visitor Constructor
    text += `interface ${options.name}CstVisitorConstructor<IN, OUT> {` + NL
    text += `  new (): ${options.name}CstVisitor<IN, OUT>`
    text += "}"
    text += NL

    return text
}

import { CstNode, ICstVisitor, IToken } from "chevrotain"

export interface NameCstVisitor<IN, OUT> extends ICstVisitor<IN, OUT> {
    prod1(ctx: Prod1Children, param?: IN): OUT
    prod2(ctx: Prod2Children, param?: IN): OUT
}

interface NameCstVisitorConstructor<IN, OUT> {
    new (): NameCstVisitor<IN, OUT>
}

export interface Prod1CstNode extends CstNode {
    name: "toml"
    children: Prod1Children
}
export type Prod1Children = {
    Prod2: Prod2CstNode[]
    Terminal1: IToken[]
}

export interface Prod2CstNode extends CstNode {
    name: "toml"
    children: Prod2Children
}
export type Prod2Children = {
    Terminal2: IToken[]
    Terminal3: IToken[]
}
