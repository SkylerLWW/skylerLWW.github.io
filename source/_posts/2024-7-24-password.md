---
title: testAndPassword
date: 2023-04-01 12:00:00
abstract: Welcome to my blog, enter password to read.
password: 123
message: 请输入密码：123
tags:
  - test1
  - test2
categories:
  - test3 
---

<nav>
  <ul>
    {% for item in site.data.menu %}
      <li><a href="{{ item[1] }}">{{ item[0] }}</a></li>
    {% endfor %}
  </ul>
</nav>

<% for (var link in site.data.menu) { %>
  <a href="<%= site.data.menu[link] %>"> <%= link %> </a>
<% } %>