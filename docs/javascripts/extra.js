// ============================================================
// 404NotFound 站点动效脚本
// 1. 顶部导航：鼠标移到屏幕顶部才滑出（桌面端）
// 2. 首页副标题打字机
// 3. 首页漂浮粒子
// 4. 全站点击 ERROR 弹窗彩蛋
// 5. 卡片入场动画 + 3D 倾斜
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

  var isHome = !!document.querySelector('.hero-section');
  if (isHome) document.body.classList.add('home-page');

  // ----------------------------------------------------------
  // 1. 顶部导航：默认隐藏，鼠标靠近顶部（或悬停在导航上）时显示
  // ----------------------------------------------------------
  var header = document.querySelector('.md-header');
  var desktopQuery = window.matchMedia('(min-width: 60em)');
  if (header && desktopQuery.matches) {
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
  // 2. 打字机副标题：循环播放几句"欢迎词"
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
  // 3. 首页漂浮粒子：emoji 从底部慢慢飘上去
  // ----------------------------------------------------------
  var field = document.querySelector('.hero-particles');
  if (field) {
    var emojis = ['✨', '🐛', '💾', '👾', '☁️', '🛰️', '📡'];
    for (var i = 0; i < 14; i++) {
      var p = document.createElement('span');
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = (Math.random() * 96) + '%';
      p.style.fontSize = (0.9 + Math.random() * 1.3) + 'rem';
      p.style.animationDuration = (9 + Math.random() * 10) + 's';
      p.style.animationDelay = (Math.random() * 12) + 's';
      p.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      field.appendChild(p);
    }
  }

  // ----------------------------------------------------------
  // 4. 点击 ERROR 弹窗：全站任何点击都会在光标处蹦出一个报错
  //    文字永远是 "Error"，样式随机一种
  // ----------------------------------------------------------
  var errorStyles = ['', 'click-error--v2', 'click-error--v3', 'click-error--v4', 'click-error--v5'];

  document.addEventListener('click', function(e) {
    var el = document.createElement('div');
    var style = errorStyles[Math.floor(Math.random() * errorStyles.length)];
    el.className = style ? 'click-error ' + style : 'click-error';
    el.textContent = 'Error';

    // 防止弹窗超出屏幕边缘
    var x = Math.min(Math.max(e.clientX, 60), window.innerWidth - 60);
    var y = Math.min(Math.max(e.clientY, 40), window.innerHeight - 40);
    el.style.left = x + 'px';
    el.style.top = y + 'px';

    document.body.appendChild(el);
    setTimeout(function() { el.remove(); }, 1200);
  });

  // ----------------------------------------------------------
  // 5. 卡片：入场动画（Intersection Observer）+ 3D 倾斜
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

  // "往下瞅瞅" 提示的点击事件
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
