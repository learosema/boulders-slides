---
title: Programming in WGSL
layout: slide
---
## Data Structures
```rust
struct VertexInput {
  @location(0) pos: vec2f,
  @location(1) uv: vec2f,
};

struct VertexOutput {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f
};
```
