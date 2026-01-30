import { type FC, type PropsWithChildren, useMemo } from "react";
import type { RevealProps } from "@/lib/type";
import { getRevealAttributes } from "@/lib/function";

type Props = PropsWithChildren<RevealProps>;

export const Paragraph: FC<Props> = ({ children, ...revealProps }) => {
  const attributes = useMemo(() => {
    return getRevealAttributes(revealProps);
  }, [revealProps]);

  return <p {...attributes}>{children}</p>;
};

export default Paragraph;
