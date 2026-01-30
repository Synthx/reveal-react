import clsx from "clsx";
import type { RevealHTMLAttributes, RevealProps } from "@/lib/type";

export const getRevealClassName = ({
  className,
  fragment,
}: RevealProps): string => {
  return clsx(className, typeof fragment === "string" && fragment, {
    fragment: !!fragment,
  });
};

export const getRevealAttributes = <T extends HTMLElement>(
  props: RevealProps,
): RevealHTMLAttributes<T> => {
  return {
    className: getRevealClassName(props),
    id: props.id,
    "data-id": props.id,
  };
};
