// ============================================================
// 404NotFound 站点动效脚本
// 1. 顶部导航：仅首页默认隐藏，鼠标移到顶部滑出（桌面端）
// 2. 首页副标题打字机（循环"你来啦。"）
// 3. 卡片入场动画 + 3D 倾斜
// 4. 向下箭头：平滑滚动到卡片区
// 5. 文章统计：标题下注入 字数 / 代码行 / 图片数 / 阅读时长
// 6. 留言板：所有非首页自动注入 giscus（宽度与关于页一致）
// 7. 更新日志：默认折叠只显示最新 3 条，按钮展开/收起
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

  // ----------------------------------------------------------
  // 5. 文章统计：在标题（h1）下注入 字数/代码行/图片数/阅读时长
  //    每次构建后随内容自动变化（统计基于渲染后的页面文本）
  // ----------------------------------------------------------
  var article = document.querySelector('.md-content__inner');
  var firstH1 = article ? article.querySelector('h1') : null;
  if (article && firstH1 && !isHome) {
    // 复制一份内容做统计，剔除代码块，避免把代码算进字数
    var clone = article.cloneNode(true);
    clone.querySelectorAll('pre, code, .page-stats').forEach(function(el) { el.remove(); });
    var text = clone.textContent || '';

    // 字数 = 中日韩字符数 + 英文单词数
    var cjk = (text.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g) || []).length;
    var latinWords = (text.replace(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, ' ')
                          .match(/[A-Za-z0-9]+/g) || []).length;
    var wordCount = cjk + latinWords;

    // 代码行数：所有 pre 块的行数之和
    var codeLines = 0;
    article.querySelectorAll('pre').forEach(function(pre) {
      var t = (pre.textContent || '').replace(/\n+$/, '');
      if (t) codeLines += t.split('\n').length;
    });

    // 图片数：正文里的图片（排除 twemoji 表情图标）
    var imageCount = article.querySelectorAll('img:not(.twemoji)').length;

    // 阅读时长：按每分钟 400 字估算
    var minutes = Math.max(1, Math.ceil(wordCount / 400));

    var stats = document.createElement('p');
    stats.className = 'page-stats';
    var items = ['🌀 约 ' + wordCount + ' 个字'];
    if (codeLines > 0) items.push('&lt;/&gt; ' + codeLines + ' 行代码');
    if (imageCount > 0) items.push('🖼️ ' + imageCount + ' 张图片');
    items.push('🕐 预计阅读时间 ' + minutes + ' 分钟');
    stats.innerHTML = items.map(function(s) {
      return '<span class="page-stats-item">' + s + '</span>';
    }).join('');
    firstH1.insertAdjacentElement('afterend', stats);
  }

  // ----------------------------------------------------------
  // 6. 留言板：所有非首页自动注入 giscus
  //    （配置与关于页一致，宽度样式走 extra.css 的 .giscus 段）
  // ----------------------------------------------------------
  if (article && !isHome && !document.querySelector('.giscus, .giscus-frame, script[src*="giscus.app"]')) {
    var commentHeading = document.createElement('h2');
    commentHeading.id = 'giscus-comments';
    commentHeading.textContent = '留言板';
    article.appendChild(commentHeading);

    var giscusScript = document.createElement('script');
    giscusScript.src = 'https://giscus.app/client.js';
    giscusScript.setAttribute('data-repo', 'aNewfolder/aNewfolder.github.io');
    giscusScript.setAttribute('data-repo-id', 'R_kgDOTc89Yw');
    giscusScript.setAttribute('data-category', 'Announcements');
    giscusScript.setAttribute('data-category-id', 'DIC_kwDOTc89Y84DBkCP');
    giscusScript.setAttribute('data-mapping', 'pathname');
    giscusScript.setAttribute('data-strict', '0');
    giscusScript.setAttribute('data-reactions-enabled', '1');
    giscusScript.setAttribute('data-emit-metadata', '0');
    giscusScript.setAttribute('data-input-position', 'bottom');
    giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
    giscusScript.setAttribute('data-lang', 'zh-CN');
    giscusScript.setAttribute('crossorigin', 'anonymous');
    giscusScript.async = true;
    article.appendChild(giscusScript);
  }

  // ----------------------------------------------------------
  // 7. 更新日志：默认折叠只显示最新 3 条，按钮切换展开/收起
  // ----------------------------------------------------------
  var logList = document.querySelector('.update-log-list');
  var logToggle = document.querySelector('.update-log-toggle');
  if (logList && logToggle) {
    var logCards = logList.querySelectorAll('.update-log-card');
    if (logCards.length <= 3) {
      logToggle.style.display = 'none';
    } else {
      var collapsed = true;
      var applyLogState = function() {
        logCards.forEach(function(card, i) {
          card.classList.toggle('update-log-hidden', collapsed && i >= 3);
        });
        logToggle.textContent = collapsed ? '展开全部 ▾' : '收起 ▴';
      };
      logToggle.addEventListener('click', function() {
        collapsed = !collapsed;
        applyLogState();
      });
      applyLogState();
    }
  }
});
