import React from 'react';

const DownloadBtn: React.FC = () => {
  const cvFileName = "your-cv-file.pdf";
  const cvContent = "Your CV content goes here";

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.download = cvFileName;

    const blob = new Blob([cvContent], { type: 'application/pdf' });
    link.href = URL.createObjectURL(blob);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownloadCV}>
      Download CV
    </button>
  );
};

export default DownloadBtn;