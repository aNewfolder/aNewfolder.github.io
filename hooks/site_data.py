# ============================================================
# MkDocs 构建钩子：生成站点统计数据
# 每次构建（本地或 CI）时在 site/data/site-stats.json 写入：
#   - 页面数 / 全站总字数（中日韩字符 + 英文单词，剔除代码块）/ 图片数
#   - git 提交日历（每天的提交次数，供关于页"更新日历板"使用）
# 数据取自 git 历史，CI 中 fetch-depth: 0 保证了完整性。
# 该文件是构建产物，不入库；git 不可用时优雅降级（日历为空）。
# ============================================================
import json
import re
import subprocess
from pathlib import Path

CJK_RE = re.compile(r'[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]')
LATIN_RE = re.compile(r'[A-Za-z0-9]+')
FENCE_RE = re.compile(r'```.*?```', re.S)
FRONT_MATTER_RE = re.compile(r'\A---\n.*?\n---\n', re.S)
IMAGE_RE = re.compile(r'!\[')


def count_words(text: str) -> int:
    """字数 = 中日韩字符数 + 英文单词数（剔除代码块与 front matter）"""
    text = FRONT_MATTER_RE.sub('', text)
    text = FENCE_RE.sub('', text)
    cjk = len(CJK_RE.findall(text))
    latin = len(LATIN_RE.findall(CJK_RE.sub(' ', text)))
    return cjk + latin


def on_post_build(config, **kwargs):
    docs_dir = Path(config['docs_dir'])
    project_root = docs_dir.parent

    pages = 0
    words = 0
    images = 0
    for md in docs_dir.rglob('*.md'):
        try:
            content = md.read_text(encoding='utf-8')
        except Exception:
            continue
        pages += 1
        words += count_words(content)
        images += len(IMAGE_RE.findall(content))

    # git 提交日历：每天的提交次数 + 首次提交日期
    commits = {}
    total_commits = 0
    first_commit = None
    try:
        result = subprocess.run(
            ['git', 'log', '--format=%ad', '--date=short'],
            cwd=str(project_root), capture_output=True, text=True, timeout=60,
        )
        if result.returncode == 0:
            dates = [d for d in result.stdout.split() if d]
            total_commits = len(dates)
            if dates:
                first_commit = dates[-1]
            for d in dates:
                commits[d] = commits.get(d, 0) + 1
    except Exception:
        pass

    data = {
        'pages': pages,
        'words': words,
        'images': images,
        'totalCommits': total_commits,
        'updateDays': len(commits),
        'firstCommit': first_commit,
        'commits': commits,
    }

    out_dir = Path(config['site_dir']) / 'data'
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / 'site-stats.json').write_text(
        json.dumps(data, ensure_ascii=False), encoding='utf-8'
    )
