---
layout: post
title: OTP Basics with Elixir
categories: otp
tags: otp open-telecom-platform
author: sandeshsoni
---

We will see

# send
# receive
# Process
# message passing

~~~elixir
pid = self()
~~~

Send

~~~elixir
pid = self()
send(self, {:greet, "morning"})
~~~


Receive 

~~~elixir
pid = self()
send(self, {:greet, "morning"})

receive do
{:greet, time} ->
IO.puts "Good #{time}"
_ ->
IO.puts "hello"
_
end
~~~

Process

spawn
~~~
pid = spawn(fn -> IO.puts "hello" end)
Process.whereis(pid)

Process.alive?(pid)
~~~

spawn with module
~~~
defmodule Foo do
def bar do
end
end

new_pid = spawn(Foo, :bar, [])

~~~


