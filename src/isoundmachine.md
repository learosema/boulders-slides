---
title: Interface ISoundMachine
layout: slide
---

```ts
export interface ISoundMachine extends IDisposable {
  setup(): void;
  bling(): void;
  rock(): void;
  push(): void;
  gameover(): void;
}
```
