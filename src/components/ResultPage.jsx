import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl, fileName } = location.state || {};

  const diagnoses = [
    '歯の状態は良好です。定期的なチェックをおすすめします。',
    '軽度の虫歯が見られます。すぐに歯医者に行くべきです。',
    '歯周病の兆候があります。歯磨きを意識しないとやばいです。',
    '歯石が溜まっています。専門医のクリーニングが必要です。',
    '噛み合わせが悪いです。放置すると歯が痛くなります。',
  ];

  const diagnosis = useMemo(
    () => diagnoses[Math.floor(Math.random() * diagnoses.length)],
    [diagnoses]
  );

  return (
    <div className="page">
      <div className="card">
        <h1>診断結果</h1>

        {imageUrl ? (
          <div className="preview result-preview">
            <p>アップロード画像: {fileName}</p>
            <img src={imageUrl} alt="診断画像" className="preview-image" />
          </div>
        ) : (
          <p>診断画像が見つかりませんでした。もう一度アップロードしてください。</p>
        )}

        <div className="result">
          <p>{diagnosis}</p>
        </div>

        <button className="button" onClick={() => navigate('/')}>もう一度診断</button>
      </div>
    </div>
  );
}

export default ResultPage;
