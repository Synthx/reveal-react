import { type FC, StrictMode } from "react";
import Reveal from "@/lib/component/Reveal.tsx";
import Slide from "@/lib/component/Slide.tsx";
import Code from "@/lib/component/Code.tsx";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import Bloc from "@/lib/component/Bloc.tsx";
import styles from "./App.module.scss";
import clsx from "clsx";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import type { Options } from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";

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
  const options: Options = {
    controls: true,
    hash: true,
    progress: true,
    transition: "slide",
    plugins: [RevealNotes, RevealHighlight],
  };

  return (
    <StrictMode>
      <Reveal options={options}>
        <Slide>
          <Bloc.h2>Hello there</Bloc.h2>
          <Bloc.p>
            reveal.js enables you to create beautiful interactive slide decks
            using HTML. This presentation will show you examples of what it can
            do.
          </Bloc.p>
        </Slide>
        <Slide>
          <Slide>
            <Bloc.h2>Vertical Slides</Bloc.h2>
            <Bloc.p>Slides can be nested inside of each other.</Bloc.p>
            <Bloc.p>
              Use the <code>Space key</code> to navigate through all slides.
            </Bloc.p>
          </Slide>
          <Slide>
            <Bloc.h2>Basement Level 1</Bloc.h2>
            <Bloc.p>
              Nested slides are useful for adding additional detail underneath a
              high level horizontal slide.
            </Bloc.p>
          </Slide>
        </Slide>
        <Slide animate>
          <Bloc.h2 id="code-title">Pretty code</Bloc.h2>
          <Code
            content={reactExampleCode}
            id="code-animation"
            language="javascript"
            lineNumbers
          />
          <Bloc.p>Code syntax highlighting courtesy of highlight.js</Bloc.p>
        </Slide>
        <Slide animate>
          <Bloc.h2 id="code-title">Even prettier animations</Bloc.h2>
          <Code
            content={reactFullExampleCode}
            id="code-animation"
            language="javascript"
            lineNumbers="|3,4|8-11"
          />
        </Slide>
        <Slide animate>
          <Bloc.h2>Auto-Animate</Bloc.h2>
          <Bloc.p>
            Automatically animate matching elements across slides with{" "}
            <a href="https://revealjs.com/auto-animate/">Auto-Animate</a>.
          </Bloc.p>
          <div className="r-hstack justify-center">
            <div data-id="box1" className={styles.box}></div>
            <div data-id="box2" className={styles.box}></div>
            <div data-id="box3" className={styles.box}></div>
          </div>
        </Slide>
        <Slide
          animate
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
          <Bloc.h2>Auto-Animate</Bloc.h2>
        </Slide>
        <Slide>
          <Bloc.h2>Fragments</Bloc.h2>
          <Bloc.p>Hit the next arrow...</Bloc.p>
          <Bloc.p fragment>... to step through ...</Bloc.p>
          <Bloc.p>
            <Bloc.span fragment>... a</Bloc.span>
            <Bloc.span fragment> fragmented</Bloc.span>
            <Bloc.span fragment> slide.</Bloc.span>
          </Bloc.p>
        </Slide>
        <Slide>
          <Slide background="#dddddd">
            <Bloc.h2>Slide Backgrounds</Bloc.h2>
            <Bloc.p>
              Set <code>data-background="#dddddd"</code> on a slide to change
              the background color. All CSS color formats are supported.
            </Bloc.p>
          </Slide>
          <Slide backgroundGradient="linear-gradient(to bottom, #283b95, #17b2c3)">
            <Bloc.h2>Gradient Backgrounds</Bloc.h2>
          </Slide>
          <Slide background="https://static.slid.es/reveal/image-placeholder.png">
            <Bloc.h2>Image Backgrounds</Bloc.h2>
          </Slide>
          <Slide background="http://i.giphy.com/90F8aUepslB84.gif">
            <Bloc.h2>... and GIFs!</Bloc.h2>
          </Slide>
        </Slide>
        <Slide>
          <Slide>
            <Bloc.h2>Marvelous List</Bloc.h2>
            <ul>
              <li>No order here</li>
              <li>Or here</li>
              <li>Or here</li>
              <li>Or here</li>
            </ul>
          </Slide>
          <Slide>
            <Bloc.h2>Fantastic Ordered List</Bloc.h2>
            <ol>
              <li>One is smaller than...</li>
              <li>Two is smaller than...</li>
              <li>Three!</li>
            </ol>
          </Slide>
          <Slide>
            <Bloc.h2>Tabular Tables</Bloc.h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Value</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apples</td>
                  <td>$1</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Lemonade</td>
                  <td>$2</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>Bread</td>
                  <td>$3</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </Slide>
          <Slide>
            <Bloc.h2>Clever quotes</Bloc.h2>
            <blockquote cite="https://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
              &ldquo;For years there has been a theory that millions of monkeys
              typing at random on millions of typewriters would reproduce the
              entire works of Shakespeare. The Internet has proven this theory
              to be untrue.&rdquo;
            </blockquote>
          </Slide>
        </Slide>
        <Slide>
          <Bloc.h2>Intergalactic Interconnections</Bloc.h2>
          <Bloc.p>
            You can link between slides internally,
            <a className="navigate-left">like this</a>.
          </Bloc.p>
        </Slide>
        <Slide>
          <Bloc.h1>THE END</Bloc.h1>
          <Bloc.p>
            - <a href="https://slides.com">Try the online editor</a> <br />-{" "}
            <a href="https://github.com/hakimel/reveal.js">
              Source code &amp; documentation
            </a>
          </Bloc.p>
        </Slide>
      </Reveal>
    </StrictMode>
  );
};

export default App;
