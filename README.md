# My Portfolio

個人ポートフォリオサイトの開発用リポジトリです。React + Vite + TypeScript をベースに、Tailwind CSS と daisyUI を使って構成しています。

## 概要

- 作品一覧の表示
- 作品詳細の導線設計
- ナビゲーションとモバイル対応レイアウト
- GitHub Pages へのデプロイを前提とした base 設定

## 技術スタック

- React 19
- TypeScript
- Vite
- Tailwind CSS
- daisyUI
- React Router

## 前提条件

- Node.js 22 以上
- pnpm

## セットアップ

```bash
pnpm install
```

## 開発実行

```bash
dev
```

または:

```bash
pnpm dev
```

ローカル開発サーバーが起動し、ブラウザで確認できます。

## ビルド

```bash
pnpm build
```

本番用の静的ファイルは `dist/` に出力されます。

## デプロイ

GitHub Pages を利用する前提です。

```bash
pnpm deploy
```

このコマンドは以下を順に実行します。

1. `pnpm build`
2. `dist` を GitHub Pages 配信用として公開

## ディレクトリ構成

```text
my-portfolio/
├─ public/
│  └─ works/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ data/
│  ├─ pages/
│  ├─ styles/
│  ├─ types/
│  ├─ App.css
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ eslint.config.js
├─ README.md
├─ pnpm-lock.yaml
└─ .github/
```

## 注意事項

- 現在の状態はテンプレートとして構成中のため、コンテンツや文言は仮のものが含まれています。
- 本番公開時は、作品データやプロフィール情報、画像、文言を実データへ置き換えてください。
- このプロジェクトは GitHub Pages の固定配信先を前提としており、`vite.config.ts` の `base` は `/my-portfolio/` に固定されています。

## 今後の方向性

- 実際のプロフィール情報への置き換え
- 作品一覧データの確定
- About セクションの実文化
- SEO とメタ情報の整理
- UI の細部調整とアクセシビリティ向上
