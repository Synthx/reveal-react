import { type FC, StrictMode } from "react";
import Reveal from "@/lib/component/Reveal.tsx";
import Slide from "@/lib/component/Slide.tsx";
import Paragraph from "@/lib/component/Paragraph.tsx";
import Code from "@/lib/component/Code.tsx";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import Heading from "@/lib/component/Heading.tsx";
import styles from "./App.module.scss";
import clsx from "clsx";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

const reactExampleCode = `
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        ...
    );
}
`;

const reactFullExampleCode = `
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
`;

const App: FC = () => {
  return (
    <StrictMode>
      <Reveal
        options={{
          controls: true,
          hash: true,
          progress: true,
          transition: "slide",
          plugins: [RevealHighlight],
        }}
      >
        <Slide>
          <Heading.h2>Hello there</Heading.h2>
          <Paragraph>
            reveal.js enables you to create beautiful interactive slide decks
            using HTML. This presentation will show you examples of what it can
            do.
          </Paragraph>
        </Slide>
        <Slide>
          <Slide>
            <Heading.h2>Vertical Slides</Heading.h2>
            <Paragraph>Slides can be nested inside of each other.</Paragraph>
            <Paragraph>
              Use the <code>Space key</code> to navigate through all slides.
            </Paragraph>
          </Slide>
          <Slide>
            <Heading.h2>Basement Level 1</Heading.h2>
            <Paragraph>
              Nested slides are useful for adding additional detail underneath a
              high level horizontal slide.
            </Paragraph>
          </Slide>
        </Slide>
        <Slide animate={true}>
          <Heading.h2 id="code-title">Pretty code</Heading.h2>
          <Code
            content={reactExampleCode}
            id="code-animation"
            language="javascript"
            lineNumbers
          />
          <Paragraph>
            Code syntax highlighting courtesy of highlight.js
          </Paragraph>
        </Slide>
        <Slide animate={true}>
          <Heading.h2 id="code-title">Even prettier animations</Heading.h2>
          <Code
            content={reactFullExampleCode}
            id="code-animation"
            language="javascript"
            lineNumbers="|3,4|8-11"
          />
        </Slide>
        <Slide animate={true}>
          <Heading.h2>Auto-Animate</Heading.h2>
          <Paragraph>
            Automatically animate matching elements across slides with{" "}
            <a href="https://revealjs.com/auto-animate/">Auto-Animate</a>.
          </Paragraph>
          <div className="r-hstack justify-center">
            <div data-id="box1" className={styles.box}></div>
            <div data-id="box2" className={styles.box}></div>
            <div data-id="box3" className={styles.box}></div>
          </div>
        </Slide>
        <Slide
          animate={true}
          data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
        >
          <div className="r-hstack justify-center">
            <div
              data-id="box1"
              data-auto-animate-delay="0"
              className={clsx(styles.box, styles.rounded)}
            ></div>
            <div
              data-id="box2"
              data-auto-animate-delay="0.1"
              className={clsx(styles.box, styles.rounded)}
            ></div>
            <div
              data-id="box3"
              data-auto-animate-delay="0.2"
              className={clsx(styles.box, styles.rounded)}
            ></div>
          </div>
          <Heading.h2>Auto-Animate</Heading.h2>
        </Slide>
        <Slide>
          <Heading.h2>Fragments</Heading.h2>
          <Paragraph>Hit the next arrow...</Paragraph>
          <Paragraph fragment>... to step through ...</Paragraph>
          <Paragraph>
            <span className="fragment">... a</span>
            <span className="fragment"> fragmented</span>
            <span className="fragment"> slide.</span>
          </Paragraph>
        </Slide>
        <Slide>
          <Slide background="#dddddd">
            <Heading.h2>Slide Backgrounds</Heading.h2>
            <Paragraph>
              Set <code>data-background="#dddddd"</code> on a slide to change
              the background color. All CSS color formats are supported.
            </Paragraph>
          </Slide>
          <Slide backgroundGradient="linear-gradient(to bottom, #283b95, #17b2c3)">
            <Heading.h2>Gradient Backgrounds</Heading.h2>
          </Slide>
          <Slide background="https://static.slid.es/reveal/image-placeholder.png">
            <Heading.h2>Image Backgrounds</Heading.h2>
          </Slide>
        </Slide>
      </Reveal>
    </StrictMode>
  );
};

export default App;
