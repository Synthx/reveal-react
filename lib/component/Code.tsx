import { type FC, useMemo } from "react";
import type { RevealProps } from "@/lib/type";
import { getRevealAttributes } from "@/lib/function";

type Props = RevealProps & {
  content: string;
  language?: "bash" | "html" | "javascript" | "text" | "typescript";
  lineNumbers?: boolean | string;
};

export const Code: FC<Props> = ({
  content,
  language,
  lineNumbers,
  ...revealProps
}) => {
  const attributes = useMemo(() => {
    return getRevealAttributes(revealProps);
  }, [revealProps]);

  return (
    <pre {...attributes}>
      <code
        data-trim
        data-noescape
        data-line-numbers={lineNumbers}
        className={language}
      >
        {content}
      </code>
    </pre>
  );
};

export default Code;
