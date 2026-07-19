# 我的第一篇文章

> 发布日期：2026-07-19

这是我的第一篇文章。这个网站用 MkDocs + Material 主题搭建，我用 Markdown 写作，就像写笔记一样。

## Markdown 常用语法速查

### 文字格式

- **加粗文字**：写成 `**加粗文字**`
- *斜体文字*：写成 `*斜体文字*`
- ~~删除线~~：写成 `~~删除线~~`

### 引用

> 这是一段引用。可以用它来引用名言、对话等。

### 代码

行内代码：`print("Hello")`

代码块：

```python
def hello():
    print("Hello, World!")
```

### 图片

先把图片放到 `docs/images/` 文件夹，然后这样引用：

```markdown
![图片描述](../images/background.jpg)
```

控制图片宽度：

```markdown
![图片描述](../images/background.jpg){ width="500" }
```

### 链接

[点击访问 MkDocs 官网](https://www.mkdocs.org)

---

*感谢阅读！*
