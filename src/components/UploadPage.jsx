import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) {
      setPreviewUrl('');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    navigate('/result', {
      state: {
        imageUrl: previewUrl,
        fileName: file.name,
      },
    });
  };

  return (
    <div className="page">
      <div className="card">
        <h1>AI歯診断アプリ</h1>
        <p>歯の写真をアップロードすると、AIが診断結果を表示します。</p>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="photo">歯の写真を選択</label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          {previewUrl && (
            <div className="preview">
              <p>アップロード内容のプレビュー</p>
              <img src={previewUrl} alt="歯のプレビュー" className="preview-image" />
            </div>
          )}

          <button type="submit" className="button">
            診断開始
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
