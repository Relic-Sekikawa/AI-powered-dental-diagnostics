# AI Powered Dental Diagnostics

シンプルな歯診断アプリです。歯の写真をアップロードして、モックの診断結果を表示します。

## 使い方

### ローカル開発

```bash
cd AI-powered-dental-diagnostics
npm install
npm run dev
```

### Dockerで起動

```bash
cd AI-powered-dental-diagnostics
docker compose up --build
```

ブラウザで `http://localhost:8080` にアクセスしてください。

## 機能

- 歯の写真アップロード
- 結果ページへの遷移
- モック診断結果の表示
- 画像プレビュー表示

## 今後の拡張

- バックエンドAI診断APIの接続
- 実際の画像解析ロジックの追加
- 診断履歴の保存
