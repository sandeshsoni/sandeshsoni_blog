---
layout: post
title: Understanding protocol and behaviours in Elixir with Tetris.
author: sandeshsoni
tags: elixir polymorphism protocol behaviour dialyzer
category: elixir
thumbnail: tetris.png
---

Behaviour and Protocol in elixir. Polymorphism

Understanding protocol and behaviours in Elixir with tetris.

I have different kinds of Shapes including s_shape, box_shape, t-shape, etc. At the end, all are Shapes.

I can have 3 modes of rotation.

1> Just rotate. same shape in different angle. [RegularRotate]

2> Rotate but change color of shape. [ChameleonRotate]. Girgit i.e Chameleon is an animal that changes its color.

3> change it to complete new shape on rotate. Example... s_shape -> rotate makes it t-shape. Again rotate makes it L-shape. Add image for better understanding [EvilRotate]

Behaviour or Protocol?

Recap of elemets... s-shape, t-shape, regular-rotate, EvilRotate, ChameleonRotate 

protocol wont help because all are shape structs
behaviour? add behaviour on RegularShape and GirgitShape?

So, when to use Behaviour and Protocol?

Rule of thumb, when you have different structs, you need Protocol.
Behaviour is added on Modules.

hirerchy -> same level -> t-shape, evil-shape

how to test? use Dialyzer

