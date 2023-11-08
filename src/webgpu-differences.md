---
title: WebGPU Differences
layout: slide
variant: slide--centered
---
- WebGPU state is no longer tied to a `canvas` rendering context,<br>but a `GPUDevice`
- WebGPU is an abstraction layer, relying on DirectX or Metal,<br>WebGL is a thin layer over OpenGL
- WebGPU is mostly stateless, WebGL is stateful.
- WebGPU Shaders are Rust-like, WebGL Shaders are C++-like.
- WebGPU has Compute Shaders, WebGL has not.
- WebGPU has Storage Buffers, WebGL has not.
- WebGPU is more low-level than WebGL.
- WebGPU addresses Uniforms and Attributes via Index, WebGL via Name.
