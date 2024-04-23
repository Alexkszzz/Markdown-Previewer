import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './App.css';

function App() {
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);
  return (
    <div className="App">
      <div className="editor-container">
        <div className="editor-header">Editor</div>
        <textarea id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
      </div>
      <div className="preview-container">
        <div className="preview-header">Previewer</div>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
