#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (served at https://maummoa.doyak.dev).
set -euo pipefail
cd "$(dirname "$0")"
npm run build
WT=$(mktemp -d)
git branch -D gh-pages -q 2>/dev/null || true
git worktree add -q --detach "$WT"
(
  cd "$WT"
  git checkout -q --orphan gh-pages
  git rm -rfq . >/dev/null 2>&1 || true
  cp -R "$OLDPWD/dist/." .
  touch .nojekyll
  git add -A
  git commit -qm "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git push -qf origin gh-pages
)
git worktree remove --force "$WT"
echo "deployed → https://maummoa.doyak.dev"
