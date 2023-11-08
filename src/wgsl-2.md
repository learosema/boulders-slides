---
title: Shader functions
layout: slide
---
```rust
@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
  var output: VertexOutput;
  output.pos = vec4f(input.pos, 0, 1);
  output.uv = input.uv;
  return output;
}

@fragment
fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
  // return a color with red green blue alpha values
  var color = vec4f(uv.x, uv.y, 1);
  return color;
}
```
