const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const filename = path.resolve('./test.js');
const sourceCode = fs.readFileSync(filename, {
    encoding: 'utf8'
});

function buildNode(str) {
    return (
        t.callExpression(
            t.identifier('i18n'),
            [ t.stringLiteral(str) ]
        )
    );
}

function decodeUnicode(str) {
    return str.replace(/\\u[A-Z0-9]{4}/gi, unicode => {
        return String.fromCharCode(parseInt(unicode.replace('\\u', ''), 16));
    });
}

function traverseAST(ast) {
    traverse(ast, {
        ObjectExpression(path) {
            for (let i = 0, len = path.node.properties.length; i < len; i++) {
                let property = path.node.properties[i];
                if (t.isStringLiteral(property.key)) {
                    path.node.properties[i].key = t.arrayExpression([
                        buildNode(property.key.value)
                    ]);
                }
                if (t.isStringLiteral(property.value)) {
                    path.node.properties[i].value = buildNode(property.value.value);
                }
            }
        },
        StringLiteral(path) {
            console.log(path.node.value);
        }
    });
}

// babel.transformFile(filename, {
//     ast: true
// }, function(err, result) {
//     if (err) {
//         throw Error(err);
//     }
//     const {ast} = result;
    
//     traverseAST(ast);

//     const {code: newCode} = generator(ast);
//     console.log(decodeUnicode(newCode));
// });

const ast = parser.parse(sourceCode);
traverseAST(ast);
const {code} = generator(ast);

fs.writeFile('target.js', decodeUnicode(code), function(err) {
    if (err) {
        throw Error(err);
    }
});