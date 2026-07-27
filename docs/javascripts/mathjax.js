// MathJax 3 配置：配合 pymdownx.arithmatex（generic: true）
// 文章中 $...$ / $$...$$ 会被 arithmatex 包成 .arithmatex 元素，由 MathJax 渲染
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Material 主题即时导航（instant navigation）切换页面后重新渲染公式
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
