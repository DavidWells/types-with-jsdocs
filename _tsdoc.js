const { TSDocParser, ParserContext, DocComment, DocNode, DocExcerpt } = require('@microsoft/tsdoc');


const fs = require('fs')
const path = require('path')
const os = require('os')

const inputFilename = path.resolve(__dirname, './src/6_List_TSProps/index.tsx')
const code = fs.readFileSync(inputFilename, 'utf-8')

const tsdocParser = new TSDocParser();
const parserContext = tsdocParser.parseString(code);


/**
 * This is a simplistic solution until we implement proper DocNode rendering APIs.
 */
class Formatter {
  static renderDocNode(docNode) {
    let result = '';
    if (docNode) {
      if (docNode instanceof DocExcerpt) {
        result += docNode.content.toString();
      }
      for (const childNode of docNode.getChildNodes()) {
        result += Formatter.renderDocNode(childNode);
      }
    }
    return result;
  }

  static renderDocNodes(docNodes){
    let result = '';
    for (const docNode of docNodes) {
      result += Formatter.renderDocNode(docNode);
    }
    return result;
  }
}

const colors = {
  green: (d) => d,
  cyan: (d) => d
}

  console.log(os.EOL + colors.green('Extracted Lines:') + os.EOL);
  console.log(
    JSON.stringify(
      parserContext.lines.map((x) => x.toString()),
      undefined,
      '  '
    )
  );

  console.log(os.EOL + colors.green('Parser Log Messages:') + os.EOL);

  if (parserContext.log.messages.length === 0) {
    console.log('No errors or warnings.');
  } else {
    for (const message of parserContext.log.messages) {
      console.log(inputFilename + message.toString());
    }
  }

  console.log(os.EOL + colors.green('DocComment parts:') + os.EOL);

  const docComment = parserContext.docComment;

  console.log(colors.cyan('Summary: ') + JSON.stringify(Formatter.renderDocNode(docComment.summarySection)));

  if (docComment.remarksBlock) {
    console.log(
      colors.cyan('Remarks: ') + JSON.stringify(Formatter.renderDocNode(docComment.remarksBlock.content))
    );
  }

  for (const paramBlock of docComment.params.blocks) {
    console.log(
      colors.cyan(`Parameter "${paramBlock.parameterName}": `) +
        JSON.stringify(Formatter.renderDocNode(paramBlock.content))
    );
  }

  if (docComment.returnsBlock) {
    console.log(
      colors.cyan('Returns: ') + JSON.stringify(Formatter.renderDocNode(docComment.returnsBlock.content))
    );
  }

  console.log(colors.cyan('Modifiers: ') + docComment.modifierTagSet.nodes.map((x) => x.tagName).join(', '));
const { inspect } = require('util')
// console.log('result')
// console.log(inspect(parserContext, {showHidden: false, depth: null}))
