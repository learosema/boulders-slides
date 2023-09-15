---
title: Interface IRenderer
layout: slide
---

```ts
interface IRenderer extends IDisposable {
  setup(): Promise<void>;

  frame(
    levelPosition?: Position,
    offset?: Position,
  ): void;

  setSize(): void;
}
```
