import { createElement, type FC, type JSX, useMemo } from "react";
import type { RevealProps } from "@/lib/type";
import { getRevealAttributes } from "@/lib/function";

type Tag = keyof JSX.IntrinsicElements;

type Props<T extends Tag> = RevealProps & JSX.IntrinsicElements[T];

const createHeading = <T extends Tag>(tag: T): FC<Props<T>> => {
  return ({ id, fragment, ...rest }) => {
    const attributes = useMemo(() => {
      return getRevealAttributes({ id, fragment });
    }, [id, fragment]);

    return createElement(tag, {
      ...rest,
      ...attributes,
    });
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const Bloc = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  p: createHeading("p"),
  span: createHeading("span"),
};

export default Bloc;
