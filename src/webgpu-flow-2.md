---
title: Render Pipeline
layout: slide
---
```ts
const pipeline = device.createRenderPipeline({
  label: 'Level Render Pipeline',
  layout: pipelineLayout,
  vertex: {
    module: shaderModule,
    entryPoint: 'vertexMain',
    buffers: vertexBufferLayout,
  },
  fragment: {
    module: shaderModule,
    entryPoint: 'fragmentMain',
    targets: [{ format: canvasFormat }]
  }
});
```
