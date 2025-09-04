import React, { useState } from 'react';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 上传图像到S3并进行处理
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">上传并处理图像</button>
    </form>
  );
}

export default ImageUpload;