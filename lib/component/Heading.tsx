import { createElement, type JSX, useMemo } from "react";
import type { RevealProps } from "@/lib/type";
import { getRevealAttributes } from "@/lib/function";

type Props = RevealProps;

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const createHeading = <T extends HeadingTags>(tag: T) => {
  return (props: Props & JSX.IntrinsicElements[T]) => {
    const { id, ...rest } = props;

    const attributes = useMemo(() => {
      return getRevealAttributes({ id });
    }, [id]);

    return createElement(tag, {
      ...rest,
      ...attributes,
    });
  };
};

type Reveal = {
  [K in keyof JSX.IntrinsicElements]: ReturnType<
    typeof createHeading<K & HeadingTags>
  >;
};

export const Heading = new Proxy({} as Reveal, {
  get(_, tag: HeadingTags) {
    return createHeading(tag);
  },
});

export default Heading;
