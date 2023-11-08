---
title: Submit!
layout: slide
---
Our GPU does nothing until the command queue is submitted:

```ts
device.queue.submit([encoder.finish()]);
```
