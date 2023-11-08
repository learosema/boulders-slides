---
title: Begin the render pass
layout: slide
---
```ts
const encoder = device.createCommandEncoder();
const pass = encoder.beginRenderPass({
  colorAttachments: [{
    view: context.getCurrentTexture().createView(),
    loadOp: "clear",
    clearValue: [0, 0, 0, 1],
    storeOp: "store",
  }],
});
pass.setPipeline(pipeline);
pass.setBindGroup(0, bindGroup);
pass.setVertexBuffer(0, positionBuffer);
pass.setVertexBuffer(1, uvBuffer);
pass.draw(6); // draw 6 points = 2 triangles
pass.end();
```
