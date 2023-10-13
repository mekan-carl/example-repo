import React, { useState } from "react";
import { CertificateDetails } from "./certificateDetails"; // Import the interface

const CertificateVerification: React.FC = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<string | null>(
    null
  );

  const handleVerification = () => {
    const certificateDetails: CertificateDetails = {
      certificate123: {
        name: "John Doe",
        issuedBy: "Example University",
        // ... other fields
      },
    };

    if (certificateDetails[certificateNumber]) {
      const { name, issuedBy } = certificateDetails[certificateNumber];
      setVerificationResult(
        `Certificate verified successfully! Name: ${name}, Issued By: ${issuedBy}`
      );
    } else {
      setVerificationResult("Certificate not found.");
    }
  };

  return (
    <div className="App">
      <h2>Certificate Verification</h2>
      <input
        type="text"
        placeholder="Enter Certificate Number"
        value={certificateNumber}
        onChange={(e) => setCertificateNumber(e.target.value)}
      />
      <button onClick={handleVerification}>Verify</button>
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
};

export default CertificateVerification;
