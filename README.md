# Reveal-react

A React wrapper for the RevealJS presentation library.

## Install

```bash
npm install @iampinpin/revealjs-react
```

## Features

- Lightweight, only one extra dependencies 📦
- Tree-shakable 🌳 ESM and CommonJS support
- Works with React v19 onwards

## Example

```tsx
import type { FC } from "react";
import { Bloc, Reveal, Slide } from "@iampinpin/revealjs-react";

const App: FC = () => {
  return (
    <Reveal>
      <Slide>
        <Bloc.h1>Hello World</Bloc.h1>
      </Slide>
    </Reveal>
  );
};
```

## Contributing

All contributions are welcome!
