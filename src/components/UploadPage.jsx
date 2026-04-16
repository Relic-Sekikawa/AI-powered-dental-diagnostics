import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // モック処理：ここではすぐに結果ページへ遷移
      navigate('/result');
    }
  };

  return (
    <div>
      <h1>AI歯診断アプリ</h1>
      <p>歯の写真をアップロードしてください。</p>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">診断開始</button>
      </form>
    </div>
  );
}

export default UploadPage;