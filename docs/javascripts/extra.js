// ============================================================
// 卡片入场动画：当卡片滚动进入可视区域时，添加 .visible 类触发 CSS 动画
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  
  // 使用 Intersection Observer（现代浏览器原生 API）监测元素是否进入视口
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 只触发一次
      }
    });
  }, {
    threshold: 0.1   // 元素出现 10% 就触发
  });

  // 监听所有卡片
  document.querySelectorAll('.card').forEach(function(card) {
    observer.observe(card);
  });

  // "向下滚动" 提示的点击事件
  var scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      var cardsSection = document.querySelector('.cards-section');
      if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});