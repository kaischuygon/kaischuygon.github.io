---
title: glTF Viewer w/ Cel Shading
publishDate: 2021-04-24 00:00:00
img: /assets/gltf-viewer.png
img_alt: a 3d model of a bunny
description: |
  An 3d glTF viewer written in c++ with openGL.
tags:
  - OpenGL
  - C++
  - glTF
---

## Description
A glTF file viewer and shader program developed for a course on computer graphics at Uppsala University. 

## Method
I chose to implement cel-shading, a type of non-photorealistic rendering widely used in computer graphics to make objects appear flat and hand-drawn by limiting colors and adding outlines. A full report can be found [here](https://github.com/kaischuygon/gltf_viewer/blob/main/report/finalReport.pdf). 

__tl;dr__: I calculated a depth and normal texture in a seperate framebuffer and applied the sobel operator to detect edges. The detected edges are then rendered black and the rest is rendered using the quantized lighting to create the full effect.

[View on GitHub](https://github.com/kaischuygon/gltf_viewer)