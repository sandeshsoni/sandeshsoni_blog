var store = [{
        "title": "introducing flexbox for backend devs",
        "excerpt":"Its a builtin property   no need to load additional library, gem or package.   Just add display: flex to element and get started immediately.  ","categories": ["flexbox","guide"],
        "tags": ["css","flexbox"],
        "url": "http://www.sandeshsoni.com/intro",
        "teaser":null},{
        "title": "what is consensus",
        "excerpt":"Consensus means agreeing to a value.   ","categories": ["distributed","systems","consensus"],
        "tags": ["distributed-systems","consensus"],
        "url": "http://www.sandeshsoni.com/consensus",
        "teaser":null},{
        "title": "reduce params in react es6",
        "excerpt":"Code can be cleaned by reducing number of params sent to function. Sending a value to function? this.state.something can directly set in function call. example Instead of this renderBlock = (someFlag) =&gt; {...} return({ {this.renderBlock(this.state.someFlag)} }) Use this ... renderBlock = (someFlag = this.state.someFlag) =&gt; {...} return({ {this.renderBlock()} }) ......","categories": ["clean-code","reactjs"],
        "tags": [],
        "url": "http://www.sandeshsoni.com/reduce-params",
        "teaser":null},{
        "title": "SICP book reading",
        "excerpt":"SICP - Structure and Interpretation of Computer Programs You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches...","categories": ["sicp","intro"],
        "tags": ["sicp","software","book","reads"],
        "url": "http://www.sandeshsoni.com/sicp-reading",
        "teaser":null},{
        "title": "web assembly",
        "excerpt":"WASM   Web Assembly   references   ","categories": ["wasm"],
        "tags": [],
        "url": "http://www.sandeshsoni.com/wasmlib",
        "teaser":null},{
        "title": "advent of code day 1",
        "excerpt":"Day one of 2018   hello world  ","categories": ["adventofcode","elixir"],
        "tags": ["adventofcode","elixir","solution"],
        "url": "http://www.sandeshsoni.com/aoc-elixir-2018-1",
        "teaser":null},{
        "title": "what is webauthn",
        "excerpt":"What is webauthentication? WebAuthn is a new W3C global standard for secure authentication. Passwordless, biometrics-based re-authorization supported by all leading browsers and platforms. Firefox, Microsoft Edge and Google Chrome browser have implemented webauthn support. Android(7.0+), Windows 10 will have built-in support. Website/apps that have implemented FIDO Dropbox, Github, and more...","categories": ["webauthn"],
        "tags": ["webauthn","fido2","w3c","fingerprint-authentication"],
        "url": "http://www.sandeshsoni.com/intro",
        "teaser":null},{
        "title": "css selectors examples",
        "excerpt":"Example with and with selectors     .class .all-kids {  // one  }     .class &gt; .child {   // two   }  This selects only the children and not the grandchildren.     .container ~ sibling {   // three   }   *  before, after  hover   nth-child  first-child, last child  ","categories": ["html","css-selectors"],
        "tags": ["css","tutorial","css-selectors"],
        "url": "http://www.sandeshsoni.com/css-selector-examples",
        "teaser":null},{
        "title": "Ecto Basics step by step",
        "excerpt":"Build a plain simple Ecto app step-by-step create a new project #validations #constraints Project create struct make schema Validations? use changeset create changeset for update 1 2 3 4 5 6 def print_hi(name) puts \"Hi, #{name}\" end print_hi('Tom') #=&gt; prints 'Hi, Tom' to STDOUT. 1 2 3 4 5 class...","categories": ["ecto","database"],
        "tags": ["ecto","database","query"],
        "url": "http://www.sandeshsoni.com/ecto-example-step-by-step",
        "teaser":null},{
        "title": "OTP Basics with Elixir",
        "excerpt":"We will see send receive Process message passing pid = self() Send pid = self() send(self, {:greet, \"morning\"}) Receive pid = self() send(self, {:greet, \"morning\"}) receive do {:greet, time} -&gt; IO.puts \"Good #{time}\" _ -&gt; IO.puts \"hello\" _ end Process spawn pid = spawn(fn -&gt; IO.puts \"hello\" end) Process.whereis(pid) Process.alive?(pid)...","categories": ["otp"],
        "tags": ["otp","open-telecom-platform"],
        "url": "http://www.sandeshsoni.com/otp-basics",
        "teaser":null},{
        "title": "Getting started with phoenix liveview",
        "excerpt":"mix phx.new tabela   def deps do   [       {:phoenix_live_view, github: \"phoenixframework/phoenix_live_view\"}            ]   end   generate secret token   mix phx.gen.secret 32   add token to config  # config/config.exs  config :my_app, MyAppWeb.Endpoint,    live_view: [         signing_salt: \"SECRET_SALT\"                ]  ","categories": [],
        "tags": [],
        "url": "http://www.sandeshsoni.com/getting-started-with-live-view",
        "teaser":null},{
        "title": "tetrix in phoenix liveview",
        "excerpt":"I am building tetris-kachori, a tetris game for phoenix phrenzy competition. My journey building this game. Should attach a gif of game. How I started, what blogs and videos did I refer will add at the end of blog.       ","categories": ["elixir","liveview"],
        "tags": ["phoenix","liveview","phrenzy","tetris"],
        "url": "http://www.sandeshsoni.com/building-tetris-in-elixir",
        "teaser":null},{
        "title": "Understanding protocol and behaviours in Elixir with Tetris.",
        "excerpt":"Behaviour and Protocol in elixir. Polymorphism Understanding protocol and behaviours in Elixir with tetris. I have different kinds of Shapes including s_shape, box_shape, t-shape, etc. At the end, all are Shapes. I can have 3 modes of rotation. 1&gt; Just rotate. same shape in different angle. [RegularRotate] 2&gt; Rotate but...","categories": ["elixir"],
        "tags": ["elixir","polymorphism","protocol","behaviour","dialyzer"],
        "url": "http://www.sandeshsoni.com/understanding-polymorphism-protocol-vs-behaviour-in-elixir",
        "teaser":null},{
        "title": "creating course on Elixir Phoenix LiveView. build tetris game",
        "excerpt":"I am build the course here. Link to videos here. Elixir course here The most import thing was to ship videos as soon as possible, however it were. And then keep improving them with iterations and feedback. I used following tools. I tried to make the videos more clear and...","categories": ["elixir","liveview"],
        "tags": ["phoenix","liveview","phrenzy","tetris"],
        "url": "http://www.sandeshsoni.com/build-tetris-kachori-elixir-course",
        "teaser":null},{
        "title": "debug, monitor performance issues of elixir phoenix production app",
        "excerpt":"The tetris-Kachori app lags in production. I can feel the screen freezing for a fraction of time. Everything works smoothly in development. So I started to find ways to debug and understand what might be going wrong. The first thought, my app is taking more RAM. How much RAM my...","categories": ["elixir"],
        "tags": ["elixir","telemetry","monitoring","logging","metrics"],
        "url": "http://www.sandeshsoni.com/performace-tracking-elixir-app-in-production",
        "teaser":null},{
        "title": "regular expressions with Elixir",
        "excerpt":"I am building readrose app which is a quick bookmarking tool. I wanted automatic classification of url. As an end user, I will just bookmark the url and when I view it on my list of bookmarks, I expect them to be grouped together nicely and mention which tweets I...","categories": ["elixir"],
        "tags": [],
        "url": "http://www.sandeshsoni.com/regex-with-elixir",
        "teaser":null}]
