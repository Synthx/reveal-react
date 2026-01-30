import { type FC, useMemo } from "react";
import type { RevealProps } from "@/lib/type";
import { getRevealAttributes } from "@/lib/function";

type Props = RevealProps & {
  description: string;
  source: string;
};

export const Image: FC<Props> = ({ description, source, ...revealProps }) => {
  const attributes = useMemo(() => {
    return getRevealAttributes(revealProps);
  }, [revealProps]);

  return <img {...attributes} alt={description} src={source} />;
};

export default Image;
