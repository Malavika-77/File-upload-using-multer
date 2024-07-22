import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 3000000) { // 3MB limit
            setMessage('File size exceeds the limit of 3MB');
            return;
        }
        setFile(selectedFile);
    };

    const onFileUpload = () => {
        if (!file) {
            setMessage('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/upload', formData)
            .then((res) => {
                setMessage('File uploaded successfully');
            })
            .catch((err) => {
                setMessage(err.response?.data?.message || 'Failed to upload file');
            });
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
  
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Upload
      </button>
      <p className="mt-4">{message}</p>
    </div>
    );
}

export default App;
