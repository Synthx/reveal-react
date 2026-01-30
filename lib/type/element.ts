import type { HTMLAttributes } from "react";

export type RevealHTMLAttributes<T extends HTMLElement> = HTMLAttributes<T> & {
  [key: `data-${string}`]: string | undefined;
};
