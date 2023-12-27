import React from "react";
import CV from "/UmerSacirovic.pdf";
import { Button } from "@mantine/core";

const DownloadBtn: React.FC = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.download = CV;
        link.href = CV;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button
            variant="outline"
            onClick={handleDownloadCV}
        >
            Download CV
        </Button>
    );
};

export default DownloadBtn;
