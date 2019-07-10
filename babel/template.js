const template = require("@babel/template").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

// 1. 有占位符
const buildRequire = template(`
  var %%importName%% = require(%%source%%);
`);

const ast = buildRequire({
  importName: t.identifier("myModule"),
  source: t.stringLiteral("my-module"),
});

// 2. 没有占位符用 .ast
// const name = "my-module";
// const mod = "myModule";

// const ast = template.ast`
//   var ${mod} = require("${name}");
// `;

console.log(generate(ast).code);