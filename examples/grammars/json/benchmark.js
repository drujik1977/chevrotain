const chevParse = require("./json").parse
const antlr = require("./json_antlr")

const sample = require("./sample1k")

const Benchmark = require("benchmark")
const _ = require("lodash")

function newSuite(name) {
    return new Benchmark.Suite(name, {
        onStart: () => console.log(`\n\n${name}`),
        onCycle: event => console.log(String(event.target)),
        onComplete: function() {
            console.log("Fastest is " + this.filter("fastest").map("name"))
        }
    })
}

newSuite("Small Json Sample")
    .add("antlr4TS-SLL", () => antlr.parseAntlrSLL(sample))
    .add("antlr4TS-LL", () => antlr.parseAntlrLL(sample))
    .add("chevrotain-not fully optimized", () => chevParse(sample))
    .run({
        async: false,
        minSamples: 200
    })
