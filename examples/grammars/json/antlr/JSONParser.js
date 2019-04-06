"use strict"
// Generated from json/JSON.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true })
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer")
const NoViableAltException_1 = require("antlr4ts/NoViableAltException")
const Parser_1 = require("antlr4ts/Parser")
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext")
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator")
const RecognitionException_1 = require("antlr4ts/RecognitionException")
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl")
const Utils = require("antlr4ts/misc/Utils")
class JSONParser extends Parser_1.Parser {
    constructor(input) {
        super(input)
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(
            JSONParser._ATN,
            this
        )
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return JSONParser.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() {
        return "JSON.g4"
    }
    // @Override
    get ruleNames() {
        return JSONParser.ruleNames
    }
    // @Override
    get serializedATN() {
        return JSONParser._serializedATN
    }
    // @RuleVersion(0)
    json() {
        let _localctx = new JsonContext(this._ctx, this.state)
        this.enterRule(_localctx, 0, JSONParser.RULE_json)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 10
                this.value()
            }
        } catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    obj() {
        let _localctx = new ObjContext(this._ctx, this.state)
        this.enterRule(_localctx, 2, JSONParser.RULE_obj)
        let _la
        try {
            this.state = 25
            this._errHandler.sync(this)
            switch (
                this.interpreter.adaptivePredict(this._input, 1, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 12
                        this.match(JSONParser.T__0)
                        this.state = 13
                        this.pair()
                        this.state = 18
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                        while (_la === JSONParser.T__1) {
                            {
                                {
                                    this.state = 14
                                    this.match(JSONParser.T__1)
                                    this.state = 15
                                    this.pair()
                                }
                            }
                            this.state = 20
                            this._errHandler.sync(this)
                            _la = this._input.LA(1)
                        }
                        this.state = 21
                        this.match(JSONParser.T__2)
                    }
                    break
                case 2:
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 23
                        this.match(JSONParser.T__0)
                        this.state = 24
                        this.match(JSONParser.T__2)
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    pair() {
        let _localctx = new PairContext(this._ctx, this.state)
        this.enterRule(_localctx, 4, JSONParser.RULE_pair)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
                this.state = 27
                this.match(JSONParser.STRING)
                this.state = 28
                this.match(JSONParser.T__3)
                this.state = 29
                this.value()
            }
        } catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    array() {
        let _localctx = new ArrayContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, JSONParser.RULE_array)
        let _la
        try {
            this.state = 44
            this._errHandler.sync(this)
            switch (
                this.interpreter.adaptivePredict(this._input, 3, this._ctx)
            ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 31
                        this.match(JSONParser.T__4)
                        this.state = 32
                        this.value()
                        this.state = 37
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                        while (_la === JSONParser.T__1) {
                            {
                                {
                                    this.state = 33
                                    this.match(JSONParser.T__1)
                                    this.state = 34
                                    this.value()
                                }
                            }
                            this.state = 39
                            this._errHandler.sync(this)
                            _la = this._input.LA(1)
                        }
                        this.state = 40
                        this.match(JSONParser.T__5)
                    }
                    break
                case 2:
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 42
                        this.match(JSONParser.T__4)
                        this.state = 43
                        this.match(JSONParser.T__5)
                    }
                    break
            }
        } catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state)
        this.enterRule(_localctx, 8, JSONParser.RULE_value)
        try {
            this.state = 53
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
                case JSONParser.STRING:
                    this.enterOuterAlt(_localctx, 1)
                    {
                        this.state = 46
                        this.match(JSONParser.STRING)
                    }
                    break
                case JSONParser.NUMBER:
                    this.enterOuterAlt(_localctx, 2)
                    {
                        this.state = 47
                        this.match(JSONParser.NUMBER)
                    }
                    break
                case JSONParser.T__0:
                    this.enterOuterAlt(_localctx, 3)
                    {
                        this.state = 48
                        this.obj()
                    }
                    break
                case JSONParser.T__4:
                    this.enterOuterAlt(_localctx, 4)
                    {
                        this.state = 49
                        this.array()
                    }
                    break
                case JSONParser.T__6:
                    this.enterOuterAlt(_localctx, 5)
                    {
                        this.state = 50
                        this.match(JSONParser.T__6)
                    }
                    break
                case JSONParser.T__7:
                    this.enterOuterAlt(_localctx, 6)
                    {
                        this.state = 51
                        this.match(JSONParser.T__7)
                    }
                    break
                case JSONParser.T__8:
                    this.enterOuterAlt(_localctx, 7)
                    {
                        this.state = 52
                        this.match(JSONParser.T__8)
                    }
                    break
                default:
                    throw new NoViableAltException_1.NoViableAltException(this)
            }
        } catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        } finally {
            this.exitRule()
        }
        return _localctx
    }
    static get _ATN() {
        if (!JSONParser.__ATN) {
            JSONParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(
                Utils.toCharArray(JSONParser._serializedATN)
            )
        }
        return JSONParser.__ATN
    }
}
JSONParser.T__0 = 1
JSONParser.T__1 = 2
JSONParser.T__2 = 3
JSONParser.T__3 = 4
JSONParser.T__4 = 5
JSONParser.T__5 = 6
JSONParser.T__6 = 7
JSONParser.T__7 = 8
JSONParser.T__8 = 9
JSONParser.STRING = 10
JSONParser.NUMBER = 11
JSONParser.WS = 12
JSONParser.RULE_json = 0
JSONParser.RULE_obj = 1
JSONParser.RULE_pair = 2
JSONParser.RULE_array = 3
JSONParser.RULE_value = 4
// tslint:disable:no-trailing-whitespace
JSONParser.ruleNames = ["json", "obj", "pair", "array", "value"]
JSONParser._LITERAL_NAMES = [
    undefined,
    "'{'",
    "','",
    "'}'",
    "':'",
    "'['",
    "']'",
    "'true'",
    "'false'",
    "'null'"
]
JSONParser._SYMBOLIC_NAMES = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "STRING",
    "NUMBER",
    "WS"
]
JSONParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(
    JSONParser._LITERAL_NAMES,
    JSONParser._SYMBOLIC_NAMES,
    []
)
JSONParser._serializedATN =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E:\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
    "\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x13\n\x03\f\x03\x0E\x03" +
    "\x16\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05&\n\x05\f" +
    "\x05\x0E\x05)\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05/\n\x05\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x068\n\x06\x03" +
    "\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02>" +
    "\x02\f\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06\x1D\x03\x02\x02\x02" +
    "\b.\x03\x02\x02\x02\n7\x03\x02\x02\x02\f\r\x05\n\x06\x02\r\x03\x03\x02" +
    "\x02\x02\x0E\x0F\x07\x03\x02\x02\x0F\x14\x05\x06\x04\x02\x10\x11\x07\x04" +
    "\x02\x02\x11\x13\x05\x06\x04\x02\x12\x10\x03\x02\x02\x02\x13\x16\x03\x02" +
    "\x02\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03\x02" +
    "\x02\x02\x16\x14\x03\x02\x02\x02\x17\x18\x07\x05\x02\x02\x18\x1C\x03\x02" +
    "\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1C\x07\x05\x02\x02\x1B\x0E\x03\x02" +
    "\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\f" +
    "\x02\x02\x1E\x1F\x07\x06\x02\x02\x1F \x05\n\x06\x02 \x07\x03\x02\x02\x02" +
    '!"\x07\x07\x02\x02"\'\x05\n\x06\x02#$\x07\x04\x02\x02$&\x05\n\x06\x02' +
    "%#\x03\x02\x02\x02&)\x03\x02\x02\x02'%\x03\x02\x02\x02'(\x03\x02\x02" +
    "\x02(*\x03\x02\x02\x02)'\x03\x02\x02\x02*+\x07\b\x02\x02+/\x03\x02\x02" +
    "\x02,-\x07\x07\x02\x02-/\x07\b\x02\x02.!\x03\x02\x02\x02.,\x03\x02\x02" +
    "\x02/\t\x03\x02\x02\x0208\x07\f\x02\x0218\x07\r\x02\x0228\x05\x04\x03" +
    "\x0238\x05\b\x05\x0248\x07\t\x02\x0258\x07\n\x02\x0268\x07\v\x02\x027" +
    "0\x03\x02\x02\x0271\x03\x02\x02\x0272\x03\x02\x02\x0273\x03\x02\x02\x02" +
    "74\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\v\x03\x02\x02" +
    "\x02\x07\x14\x1B'.7"
exports.JSONParser = JSONParser
class JsonContext extends ParserRuleContext_1.ParserRuleContext {
    value() {
        return this.getRuleContext(0, ValueContext)
    }
    constructor(parent, invokingState) {
        super(parent, invokingState)
    }
    // @Override
    get ruleIndex() {
        return JSONParser.RULE_json
    }
    // @Override
    enterRule(listener) {
        if (listener.enterJson) {
            listener.enterJson(this)
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJson) {
            listener.exitJson(this)
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJson) {
            return visitor.visitJson(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
exports.JsonContext = JsonContext
class ObjContext extends ParserRuleContext_1.ParserRuleContext {
    pair(i) {
        if (i === undefined) {
            return this.getRuleContexts(PairContext)
        } else {
            return this.getRuleContext(i, PairContext)
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState)
    }
    // @Override
    get ruleIndex() {
        return JSONParser.RULE_obj
    }
    // @Override
    enterRule(listener) {
        if (listener.enterObj) {
            listener.enterObj(this)
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObj) {
            listener.exitObj(this)
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObj) {
            return visitor.visitObj(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
exports.ObjContext = ObjContext
class PairContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() {
        return this.getToken(JSONParser.STRING, 0)
    }
    value() {
        return this.getRuleContext(0, ValueContext)
    }
    constructor(parent, invokingState) {
        super(parent, invokingState)
    }
    // @Override
    get ruleIndex() {
        return JSONParser.RULE_pair
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPair) {
            listener.enterPair(this)
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPair) {
            listener.exitPair(this)
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPair) {
            return visitor.visitPair(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
exports.PairContext = PairContext
class ArrayContext extends ParserRuleContext_1.ParserRuleContext {
    value(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext)
        } else {
            return this.getRuleContext(i, ValueContext)
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState)
    }
    // @Override
    get ruleIndex() {
        return JSONParser.RULE_array
    }
    // @Override
    enterRule(listener) {
        if (listener.enterArray) {
            listener.enterArray(this)
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArray) {
            listener.exitArray(this)
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArray) {
            return visitor.visitArray(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
exports.ArrayContext = ArrayContext
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() {
        return this.tryGetToken(JSONParser.STRING, 0)
    }
    NUMBER() {
        return this.tryGetToken(JSONParser.NUMBER, 0)
    }
    obj() {
        return this.tryGetRuleContext(0, ObjContext)
    }
    array() {
        return this.tryGetRuleContext(0, ArrayContext)
    }
    constructor(parent, invokingState) {
        super(parent, invokingState)
    }
    // @Override
    get ruleIndex() {
        return JSONParser.RULE_value
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this)
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this)
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
exports.ValueContext = ValueContext
