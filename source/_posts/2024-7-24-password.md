---
title: 测试文章（显示图片，下载文件，密码输入）
date: 2024-04-01 12:00:00
abstract: 有密码文章的描述的文字
password: 123
message: 请输入密码：123
tags:
  - tag1
  - 标签
categories:
  - categories1
  - 分类
  - 再来
---

图片显示
![tu](1.png)

<br/>

下载测试
<a href="1.txt" download="1.txt">下载</a>

<br/>

不知道为什么无法输出
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

嵌入网页

<iframe id="child" src='https://www.pixiv.com' width="900px" height="500px"></iframe>

width用于设置嵌入网页的宽度，height为高度，单位为像素。

frameborder：用于控制嵌入的网页是否有边框，1为有边框，0为无边框。

scrolling：用于控制嵌入的网页是否有滑动条，1为有，0为无，默认为有。



