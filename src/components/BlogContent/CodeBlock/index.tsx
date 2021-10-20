import { CodeComponent } from "react-markdown/lib/ast-to-react";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const getextensionItems = className ? className.split(".") : [];
  const codeTitle = className ? className.replace("language-", "") : "";
  const lang =
    getextensionItems.length === 1 || getextensionItems.length === 0
      ? codeTitle
      : getextensionItems[getextensionItems.length - 1];
  return (
    <div>
      <p>{codeTitle}</p>
      <SyntaxHighlighter style={vsDark} language={lang}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
