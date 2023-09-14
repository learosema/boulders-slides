---
title: Interface IRenderer
layout: slide
---

```ts
interface IRenderer extends IDisposable {
  setup(): Promise<void>;

  frame(
    level: Level,
    levelPosition?: Position,
    offset?: Position,
  ): void;

  setSize(): void;
}
```
