// ============================================================
// 404NotFound 站点动效脚本
// 1. 顶部导航：仅首页默认隐藏，鼠标移到顶部滑出（桌面端）
// 2. 首页副标题打字机（循环"你来啦。"）
// 3. 首页下雨粒子 + 打雷闪电
// 4. 全站点击 ERROR 弹窗彩蛋（无文字，多种样式）
// 5. 卡片入场动画 + 3D 倾斜
// 6. 向下滚动：乱码闪屏跳转
// ============================================================
document.addEventListener('DOMContentLoaded', function() {

  var hero = document.querySelector('.hero-section');
  var isHome = !!hero;
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
  // 3. 下雨粒子 + 打雷闪电
  // ----------------------------------------------------------
  var field = document.querySelector('.hero-particles');
  if (field && hero) {
    var drops = ['💧', '💧', '💧', '🌧️', '⚡', '🌩️', '⛈️'];
    for (var i = 0; i < 16; i++) {
      var p = document.createElement('span');
      p.textContent = drops[Math.floor(Math.random() * drops.length)];
      p.style.left = (Math.random() * 96) + '%';
      p.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
      p.style.animationDuration = (4 + Math.random() * 6) + 's';
      p.style.animationDelay = (Math.random() * 8) + 's';
      p.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
      field.appendChild(p);
    }

    // 打雷闪电：随机间隔在 hero 上白闪一下
    var flash = document.createElement('div');
    flash.className = 'lightning-flash';
    hero.appendChild(flash);

    function strike() {
      flash.classList.remove('strike');
      void flash.offsetWidth;          // 强制重排，让动画可以重新触发
      flash.classList.add('strike');
      setTimeout(strike, 3500 + Math.random() * 6000);
    }
    setTimeout(strike, 1500 + Math.random() * 3000);
  }

  // ----------------------------------------------------------
  // 4. 点击 ERROR 弹窗：全站任何点击都会在光标处蹦出一个小报错
  //    没有文字，样式随机一种
  // ----------------------------------------------------------
  var errorStyles = ['', 'click-error--v2', 'click-error--v3', 'click-error--v4', 'click-error--v5'];

  document.addEventListener('click', function(e) {
    var el = document.createElement('div');
    var style = errorStyles[Math.floor(Math.random() * errorStyles.length)];
    el.className = style ? 'click-error ' + style : 'click-error';

    // 防止弹窗超出屏幕边缘
    var x = Math.min(Math.max(e.clientX, 40), window.innerWidth - 40);
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

  // ----------------------------------------------------------
  // 6. 向下箭头：乱码闪屏后瞬间跳转（不做平滑滚动）
  // ----------------------------------------------------------
  var scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      var cardsSection = document.querySelector('.cards-section');
      if (!cardsSection) return;

      // 生成密密麻麻的乱码
      var chars = '01アイウエオカキクケコサシスセソ<>/\\{}[]#$%&*+=~^!?@;:ﾊﾋﾌﾍﾎERROR404';
      var garbage = '';
      for (var i = 0; i < 4200; i++) {
        garbage += chars[Math.floor(Math.random() * chars.length)];
      }

      var overlay = document.createElement('div');
      overlay.className = 'scramble-overlay';
      overlay.textContent = garbage;
      document.body.appendChild(overlay);

      // 乱码闪屏约 0.45 秒后瞬间跳转到卡片区
      setTimeout(function() {
        cardsSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 450);

      // 再闪一会儿后淡出并移除
      setTimeout(function() { overlay.classList.add('fade'); }, 750);
      setTimeout(function() { overlay.remove(); }, 1050);
    });
  }
});
