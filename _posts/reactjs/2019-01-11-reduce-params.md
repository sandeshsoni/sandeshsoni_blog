---
layout: post
title: reduce params in react es6
categories: clean-code reactjs
---

Code can be cleaned by reducing number of params sent to function.
Sending a value to function? `this.state.something` can directly set in function call.

example

### Instead of this

{% highlight javascript %}
renderBlock = (someFlag) => {...}

return({

{this.renderBlock(this.state.someFlag)}

})
{% endhighlight %}

### Use this

{% highlight javascript %}
...
renderBlock = (someFlag = this.state.someFlag) => {...}

return({

{this.renderBlock()}

})
...
{% endhighlight %}
