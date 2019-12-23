---
layout: post
title: Getting started with phoenix liveview
tages: phoenix-liveview stateful
---



```
mix phx.new tabela
```

```
def deps do
  [
      {:phoenix_live_view, github: "phoenixframework/phoenix_live_view"}
        
  ]
  end
```



generate secret token

```
mix phx.gen.secret 32
```


# add token to config
```
# config/config.exs

config :my_app, MyAppWeb.Endpoint,
   live_view: [
        signing_salt: "SECRET_SALT"
           
   ]
```
