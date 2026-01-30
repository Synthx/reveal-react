import { type FC, type PropsWithChildren, useEffect, useRef } from "react";
import RevealJS from "reveal.js";
import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";

type Props = PropsWithChildren<{
  options: RevealJS.Options;
}>;

export const Reveal: FC<Props> = ({ options, children }) => {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealJS.Api>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new RevealJS(deckDivRef.current!, options);
    deckRef.current.initialize();

    return () => {
      try {
        deckRef.current?.destroy();
        deckRef.current = null;
      } catch (e) {
        console.error("Reveal.js destroy call failed.", e);
      }
    };
  }, [options]);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">{children}</div>
    </div>
  );
};

export default Reveal;
