---
layout: post
title: debug, monitor performance issues of elixir phoenix production app
categories: elixir
author: sandeshsoni
tags: elixir telemetry monitoring logging metrics
thumbnail: tetris.png
---

The tetris-Kachori app lags in production. I can feel the screen freezing for a fraction of time. Everything works smoothly in development.
So I started to find ways to debug and understand what might be going wrong.

The first thought, my app is taking more RAM.

How much RAM my app consumes?
Locally I can check using `top` and `htop` but can I check within the app?

The first thing I came across, use below syntax.

```elixir
:erlang.memory()
```

output as
```elixir
iex(3)> :erlang.memory()
[
total: 34089608,
processes: 6655800,
processes_used: 6654840,
system: 27433808,
atom: 654241,
atom_used: 636936,
binary: 2595088,
code: 12227925,
ets: 1348328
]
iex(4)>
```


output as
```iex
iex(3)> :erlang.memory()
[
total: 34089608,
processes: 6655800,
processes_used: 6654840,
system: 27433808,
atom: 654241,
atom_used: 636936,
binary: 2595088,
code: 12227925,
ets: 1348328
]
iex(4)>
```

or 
```
:erlang.system_info/1
```

So the conclusion, I need to collect metrics about machine and send it somewhere.. like Prometheus, DataDog, etc.

How?

use Telemetry and opencensus.
Telemetry-metrics, [Telemetry pooler], [Opencensus Telemetry], oc_datadog, etc.
Telemetry polling to send more information.
I see possibility to send how many connections are open at the point.

I can use DataDog and few other paid services.
I read a few topics on ElixirForum mentioning integrating logging facilit of Elixir.

I understand few people are using `Statix` + `Instruments`

The end output I expect, I should see metrics in understandable format.  how much RAM was consumed with number of open connections with time. And possibly mention github tag so I undertand which solution improved performance.


Thats my journey so far.
Exploring more.

I will be reading [Erlang In Anger]


[Telemetry Pooler]: https://github.com/beam-telemetry/telemetry_poller
[Opencensus Telemetry]: https://github.com/opencensus-beam/opencensus_telemetry
[Erlang In Anger]: https://www.erlang-in-anger.com/
