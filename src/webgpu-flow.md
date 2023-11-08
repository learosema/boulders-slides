---
title: The WebGPU Flow
layout: slide
---
## Initialization
```ts
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const context = canvas.getContext("webgpu");
const canvasFormat = navigator.gpu.getPreferredCanvasFormat();

context.configure({
  device: this.device,
  format: this.canvasFormat,
});
```
