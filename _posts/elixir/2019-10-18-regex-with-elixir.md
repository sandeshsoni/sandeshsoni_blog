---
layout: post
title: regular expressions with Elixir
categories: elixir
author: sandeshsoni
---

I am building readrose app which is a quick bookmarking tool.
I wanted automatic classification of url.

As an end user, I will just bookmark the url and when I view it on my list of bookmarks, I expect them to be grouped together nicely and mention which tweets I have booked... which twitter handles or which blog posts.

I decided to use Regex and this is the beginning of story.

Regex in elixir is same as in any another languages.
Elixir does have something additional that can help more.

Let us play from the scratch.

`str1 = abc 123 456`
I want number from the string.
So, my regex will be `expr = r\d\d\d`

`str1 = abc 123 456`
`str2 = abc 123-456`
`str2 = abc 123=456`


So, if I bookmark a tweet, I will be able to see link to tweet as well as an individual link to author' profile.


references
very useful youtube video, worth investing 46 minutes.
