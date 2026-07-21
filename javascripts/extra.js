// ============================================================
// 404NotFound 站点动效脚本
// 1. 顶部导航：仅首页默认隐藏，鼠标移到顶部滑出（桌面端）
// 2. 首页副标题打字机（循环"你来啦。"）
// 3. 卡片入场动画 + 3D 倾斜
// 4. 向下箭头：平滑滚动到卡片区
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

  var isHome = !!document.querySelector('.hero-section');
  if (isHome) document.body.classList.add('home-page');

  // ----------------------------------------------------------
  // 1. 顶部导航：只在首页隐藏，其他页面正常显示
  // ----------------------------------------------------------
  var header = document.querySelector('.md-header');
  var desktopQuery = window.matchMedia('(min-width: 60em)');
  if (isHome && header && desktopQuery.matches) {
    var headerHover = false;

    header.addEventListener('mouseenter', function() {
      headerHover = true;
      document.body.classList.add('chrome-on');
    });
    header.addEventListener('mouseleave', function() {
      headerHover = false;
      document.body.classList.remove('chrome-on');
    });

    document.addEventListener('mousemove', function(e) {
      if (e.clientY < 64 || headerHover) {
        document.body.classList.add('chrome-on');
      } else {
        document.body.classList.remove('chrome-on');
      }
    });
  }

  // ----------------------------------------------------------
  // 2. 打字机副标题：循环"你来啦。"
  // ----------------------------------------------------------
  var tw = document.getElementById('typewriter');
  if (tw) {
    var phrase = '你来啦。';
    var charIndex = 0;
    var deleting = false;

    function typeLoop() {
      if (!deleting) {
        charIndex++;
        tw.textContent = phrase.slice(0, charIndex);
        if (charIndex === phrase.length) {
          deleting = true;
          setTimeout(typeLoop, 2600);   // 打完停留一会儿
          return;
        }
        setTimeout(typeLoop, 140 + Math.random() * 100);
      } else {
        charIndex--;
        tw.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          setTimeout(typeLoop, 700);
          return;
        }
        setTimeout(typeLoop, 55);
      }
    }
    typeLoop();
  }

  // ----------------------------------------------------------
  // 3. 卡片：入场动画（Intersection Observer）+ 3D 倾斜
  // ----------------------------------------------------------
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 只触发一次
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(function(card) {
    observer.observe(card);

    // 3D 倾斜：跟着鼠标微微转动
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 ~ 0.5
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform =
        'perspective(700px) rotateX(' + (-py * 10) + 'deg) rotateY(' + (px * 10) + 'deg) translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // ----------------------------------------------------------
  // 4. 向下箭头：平滑滚动到卡片区
  // ----------------------------------------------------------
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
