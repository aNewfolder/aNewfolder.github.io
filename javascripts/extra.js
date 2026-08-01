// ============================================================
// 404NotFound 站点动效脚本
// 1. 顶部导航：仅首页默认隐藏，鼠标移到顶部滑出（桌面端）
// 2. 首页副标题打字机（循环"你来啦。"）
// 3. 活点地图 & 全站脚印引擎：首页脚印引路 + 名牌跳转；正文页随机脚印点缀
// 4. 文章统计：标题下注入 字数 / 代码行 / 图片数 / 阅读时长
// 5. 留言板：所有非首页自动注入 giscus（宽度与关于页一致）
// 6. 更新日志：默认折叠只显示最新 3 条，按钮展开/收起
// 7. 关于页站点统计 + 更新日历板
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
          setTimeout(typeLoop, 4200);   // 打完停留一会儿
          return;
        }
        setTimeout(typeLoop, 220 + Math.random() * 140);
      } else {
        charIndex--;
        tw.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          setTimeout(typeLoop, 1200);
          return;
        }
        setTimeout(typeLoop, 80);
      }
    }
    typeLoop();
  }

  // ----------------------------------------------------------
  // 3. 活点地图 & 全站脚印引擎
  //    首页：每个板块 = 一串带弧度的随机脚印 + 一个手写名牌（可点击），
  //         随机位置 / 随机方向 / 随机步数 / 随机弯度；
  //    正文页：随机位置偶尔走过的脚印（无文字，纯点缀）。
  //    共同规则：逐个落下、逐个隐去（先出现的先消失）。
  // ----------------------------------------------------------
  var FP_STRIDE = 28;      // 固定步长（px）：约一个脚印长 + 半个脚印间隔
  var FP_STEP_MS = 360;    // 落步间隔
  var FP_FADE_MS = 1300;   // 单个脚印隐去耗时（与 CSS .fp.fade 对应）
  var FP_HOLD_MS = 500;    // 走完后停留时间

  // 生成带弧度的轨迹：anchorIdx 处为锚点（px），向前递推来路、向后递推延伸
  function fpTrail(lx, ly, anchorIdx, total, dir, turnDeg) {
    var pts = new Array(total);
    var turn = turnDeg * Math.PI / 180;
    var angles = new Array(total);
    angles[anchorIdx] = dir;
    pts[anchorIdx] = { x: lx, y: ly };
    var j, ang = dir, px = lx, py = ly;
    // 来路：逆着走，方向逐步回转
    for (j = anchorIdx - 1; j >= 0; j--) {
      ang -= turn;
      px -= Math.cos(ang) * FP_STRIDE;
      py -= Math.sin(ang) * FP_STRIDE;
      pts[j] = { x: px, y: py };
      angles[j] = ang;
    }
    // 延伸：顺着走，方向逐步偏转
    ang = dir; px = lx; py = ly;
    for (j = anchorIdx + 1; j < total; j++) {
      ang += turn;
      px += Math.cos(ang) * FP_STRIDE;
      py += Math.sin(ang) * FP_STRIDE;
      pts[j] = { x: px, y: py };
      angles[j] = ang;
    }
    for (j = 0; j < total; j++) {
      pts[j].rot = angles[j] * 180 / Math.PI + 90;   // 脚印图形朝上为 0°
    }
    return pts;
  }

  function fpOut(pts, W, H, top) {
    for (var j = 0; j < pts.length; j++) {
      if (pts[j].x < 24 || pts[j].x > W - 24 || pts[j].y < top || pts[j].y > H - 40) return true;
    }
    return false;
  }

  // 在 layer 上按 pts 跑一串脚印
  // opts: { label: 元素|null, labelAt: 名牌所在的步序, holdMs, onDone }
  function fpRun(layer, pts, opts) {
    var prints = [];
    var j;
    for (j = 0; j < pts.length; j++) {
      (function(j) {
        setTimeout(function() {
          var p = document.createElement('span');
          p.className = 'fp';
          p.style.left = pts[j].x + 'px';
          p.style.top = pts[j].y + 'px';
          p.style.transform = 'rotate(' + pts[j].rot + 'deg) scaleX(' + (j % 2 ? -1 : 1) + ')';
          layer.appendChild(p);
          prints.push(p);
          requestAnimationFrame(function() { p.classList.add('on'); });
          if (opts.label && j === opts.labelAt) opts.label.classList.add('on');
        }, j * FP_STEP_MS);
      })(j);
    }
    // 走完停留后：逐个隐去（先出现的先消失），名牌随它所在的那步隐去
    setTimeout(function() {
      for (j = 0; j < pts.length; j++) {
        (function(j) {
          setTimeout(function() {
            var p = prints[j];
            p.classList.remove('on');
            p.classList.add('fade');
            if (opts.label && j === opts.labelAt) opts.label.classList.remove('on');
            if (j === pts.length - 1) {
              setTimeout(function() {
                prints.forEach(function(q) { q.remove(); });
                if (opts.onDone) opts.onDone();
              }, FP_FADE_MS);
            }
          }, j * FP_STEP_MS);
        })(j);
      }
    }, pts.length * FP_STEP_MS + (opts.holdMs != null ? opts.holdMs : FP_HOLD_MS));
  }

  var mapLayer = document.querySelector('.map-layer');
  if (mapLayer) {
    // ===== 首页：活点地图 =====
    // 每个板块 5 个候选位置（%，覆盖全页），每轮随机选一个
    var WALKERS = [
      { name: '课程总结', href: 'class/',   spots: [[12,16],[78,20],[10,52],[30,80],[64,10]] },
      { name: '拓展学习', href: 'tech/',    spots: [[75,12],[14,30],[84,50],[24,72],[50,88]] },
      { name: '阅读',     href: 'reading/', spots: [[8,38],[70,78],[20,12],[86,30],[44,74]] },
      { name: '音乐',     href: 'music/',   spots: [[82,36],[12,64],[58,16],[28,44],[76,86]] },
      { name: '体育',     href: 'sports/',  spots: [[18,74],[66,28],[10,22],[84,64],[40,16]] },
      { name: '随笔',     href: 'blog/',    spots: [[64,82],[16,46],[80,56],[34,12],[52,68]] },
      { name: '友链',     href: 'friends/', spots: [[38,10],[72,44],[14,84],[88,22],[26,58]] },
      { name: '关于',     href: 'about/',   spots: [[34,88],[60,58],[12,26],[78,66],[48,24]] },
    ];
    var liveTrails = [];   // 当前页面上的脚印轨迹，用于避免大片重叠

    WALKERS.forEach(function(w, i) {
      var label = document.createElement('a');
      label.className = 'map-name';
      label.href = w.href;
      label.textContent = w.name;
      mapLayer.appendChild(label);
      w.el = label;
      w.lastSpot = -1;
      // 初始时序岔开，之后每轮的间隔也是随机的，
      // 任意时刻页面上大约只有 2~4 个名牌
      setTimeout(function() { walk(w); }, i * 1500 + Math.random() * 800);
    });

    function fpOverlap(pts) {
      var hits = 0;
      for (var i = 0; i < liveTrails.length; i++) {
        var other = liveTrails[i];
        for (var a = 0; a < pts.length; a++) {
          for (var b = 0; b < other.length; b++) {
            var dx = pts[a].x - other[b].x;
            var dy = pts[a].y - other[b].y;
            if (dx * dx + dy * dy < 56 * 56) { hits++; break; }
          }
        }
      }
      return hits > 2;
    }

    function walk(w) {
      var W = mapLayer.clientWidth;
      var H = mapLayer.clientHeight;
      // 随机步数：2~7 步走来 + 3~6 步延伸（24 种组合随机触发）
      var approach = 2 + Math.floor(Math.random() * 6);
      var beyond = 3 + Math.floor(Math.random() * 4);
      var total = approach + beyond;
      var labelAt = approach - 1;
      // 随机弯度：0~7° 整度数、随机左右转
      var turnDeg = Math.floor(Math.random() * 8) * (Math.random() < 0.5 ? -1 : 1);

      // 选位置并生成轨迹，尽量避开现有脚印，避免大片重叠
      var pts = null, si = -1, lx = 0, ly = 0;
      for (var attempt = 0; attempt < w.spots.length; attempt++) {
        var candSi = Math.floor(Math.random() * w.spots.length);
        if (w.spots.length > 1 && candSi === w.lastSpot) continue;
        var cx = w.spots[candSi][0] / 100 * W;
        var cy = w.spots[candSi][1] / 100 * H;
        var base = Math.atan2(H * 0.5 - cy, W * 0.5 - cx);
        var dir = base + (Math.random() * 150 - 75) * Math.PI / 180;
        var cand = fpTrail(cx, cy, labelAt, total, dir, turnDeg);
        if (fpOut(cand, W, H, 64)) {
          cand = fpTrail(cx, cy, labelAt, total, dir + Math.PI, -turnDeg);
          if (fpOut(cand, W, H, 64)) {
            cand = fpTrail(cx, cy, labelAt, total, base, 0);
          }
        }
        if (!fpOverlap(cand)) { pts = cand; si = candSi; lx = cx; ly = cy; break; }
      }
      if (!pts) {   // 页面上脚印太多，过会儿再来
        setTimeout(function() { walk(w); }, 3000);
        return;
      }
      w.lastSpot = si;
      w.el.style.left = lx + 'px';
      w.el.style.top = ly + 'px';
      w.el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.random() * 6 - 3).toFixed(1) + 'deg)';

      liveTrails.push(pts);
      fpRun(mapLayer, pts, {
        label: w.el,
        labelAt: labelAt,
        onDone: function() {
          var idx = liveTrails.indexOf(pts);
          if (idx >= 0) liveTrails.splice(idx, 1);
          // 随机间隔后换个位置、换个方向、换种步数再来
          setTimeout(function() { walk(w); }, 8000 + Math.random() * 8000);
        }
      });
    }
  } else {
    // ===== 正文页：随机脚印点缀（无文字），规则与首页相同 =====
    var fpLayer = document.createElement('div');
    fpLayer.className = 'fp-layer';
    document.body.appendChild(fpLayer);

    function ambientWalk() {
      var W = window.innerWidth;
      var H = window.innerHeight;
      var total = 4 + Math.floor(Math.random() * 7);      // 4~10 步随机
      var turnDeg = Math.floor(Math.random() * 8) * (Math.random() < 0.5 ? -1 : 1);
      var pts = null;
      for (var attempt = 0; attempt < 4; attempt++) {
        var lx = W * (0.08 + Math.random() * 0.84);
        var ly = H * (0.14 + Math.random() * 0.72);
        var dir = Math.random() * Math.PI * 2;             // 方向完全随机
        var cand = fpTrail(lx, ly, 0, total, dir, turnDeg);
        if (!fpOut(cand, W, H, 70)) { pts = cand; break; }
      }
      if (pts) fpRun(fpLayer, pts, {});
      setTimeout(ambientWalk, 6000 + Math.random() * 8000);
    }
    setTimeout(ambientWalk, 2500);
  }

  // ----------------------------------------------------------
  // 4. 文章统计：在标题（h1）下注入 字数/代码行/图片数/阅读时长
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
    var cjk = (text.match(/[぀-ヿ㐀-䶿一-鿿豈-﫿]/g) || []).length;
    var latinWords = (text.replace(/[぀-ヿ㐀-䶿一-鿿豈-﫿]/g, ' ')
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
  // 5. 留言板：所有非首页自动注入 giscus
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
  // 6. 更新日志：默认折叠只显示最新 3 条，按钮切换展开/收起
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

  // ----------------------------------------------------------
  // 7. 关于页站点统计 + 更新日历板
  //    数据来自构建钩子生成的 /data/site-stats.json；
  //    浏览量使用不蒜子（busuanzi），加载失败时显示 "—"
  // ----------------------------------------------------------
  var siteStatsEl = document.getElementById('site-stats');
  var calendarEl = document.getElementById('update-calendar');
  if (siteStatsEl || calendarEl) {
    fetch('/data/site-stats.json')
      .then(function(res) { return res.ok ? res.json() : null; })
      .then(function(data) {
        if (!data) throw new Error('no data');

        if (siteStatsEl) {
          var cards = [
            { icon: '📄', value: data.pages, label: '个页面' },
            { icon: '🌀', value: data.words.toLocaleString(), label: '全站总字数' },
            { icon: '🔁', value: data.totalCommits, label: '次更新提交' },
            { icon: '📅', value: data.updateDays, label: '天有更新' },
            { icon: '👀', value: '<span id="busuanzi_value_site_pv">—</span>', label: '总浏览量', raw: true },
          ];
          siteStatsEl.innerHTML = cards.map(function(c) {
            return '<div class="site-stat-card"><div class="site-stat-icon">' + c.icon +
              '</div><div class="site-stat-value">' + c.value +
              '</div><div class="site-stat-label">' + c.label + '</div></div>';
          }).join('');

          // 不蒜子浏览量统计（第三方免费计数器，失败则保持 "—"）
          var bs = document.createElement('script');
          bs.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
          bs.async = true;
          document.body.appendChild(bs);
        }

        if (calendarEl) {
          var commits = data.commits || {};
          var today = new Date();
          today.setHours(0, 0, 0, 0);
          // 以本周日为终点，向前取满 53 周（GitHub 风格）
          var end = new Date(today);
          end.setDate(end.getDate() + (6 - end.getDay()));
          var start = new Date(end);
          start.setDate(start.getDate() - 53 * 7 + 1);

          var monthLabels = [];
          var cells = [];
          var prevMonth = -1;
          for (var d = new Date(start), week = 0; d <= end; d.setDate(d.getDate() + 1)) {
            var dow = d.getDay();
            if (dow === 0) {
              if (d.getMonth() !== prevMonth) {
                monthLabels.push({ week: week, label: (d.getMonth() + 1) + '月' });
                prevMonth = d.getMonth();
              }
              week++;
            }
            var key = d.getFullYear() + '-' +
              String(d.getMonth() + 1).padStart(2, '0') + '-' +
              String(d.getDate()).padStart(2, '0');
            var count = commits[key] || 0;
            var level = count === 0 ? 0 : (count === 1 ? 1 : (count <= 3 ? 2 : 3));
            var future = d > today;
            cells.push('<span class="uc-cell uc-lv' + level + (future ? ' uc-future' : '') +
              '" title="' + key + (count > 0 ? ' · ' + count + ' 次更新' : ' · 无更新') + '"></span>');
          }

          var monthsHtml = monthLabels.map(function(m) {
            return '<span class="uc-month" style="grid-column-start:' + (m.week + 1) + '">' + m.label + '</span>';
          }).join('');

          calendarEl.innerHTML =
            '<div class="uc-months">' + monthsHtml + '</div>' +
            '<div class="uc-grid">' + cells.join('') + '</div>' +
            '<div class="uc-legend"><span>少</span>' +
            '<span class="uc-cell uc-lv0"></span><span class="uc-cell uc-lv1"></span>' +
            '<span class="uc-cell uc-lv2"></span><span class="uc-cell uc-lv3"></span>' +
            '<span>多</span></div>';
        }
      })
      .catch(function() {
        if (siteStatsEl) siteStatsEl.innerHTML = '<p class="site-stats-note">统计数据暂不可用（本地预览请先构建一次）。</p>';
        if (calendarEl) calendarEl.innerHTML = '';
      });
  }
});
