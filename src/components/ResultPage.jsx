import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const navigate = useNavigate();

  // モック診断結果のパターン
  const diagnoses = [
    "歯の状態は良好です。定期的なチェックをおすすめします。",
    "軽度の虫歯が見られます。すぐに歯医者に行くべきです。",
    "歯周病の兆候があります。歯磨きを意識しないとやばいです。",
    "歯石が溜まっています。専門医のクリーニングが必要です。",
    "噛み合わせが悪いです。放置すると歯が痛くなります。"
  ];

  // ランダムに診断結果を選択
  const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];

  return (
    <div>
      <h1>診断結果</h1>
      <p>{diagnosis}</p>
      <button onClick={() => navigate('/')}>もう一度診断</button>
    </div>
  );
}

export default ResultPage;