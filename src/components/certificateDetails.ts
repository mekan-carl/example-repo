// Certificate.ts
export interface CertificateDetails {
  [certificateNumber: string]: {
    name: string;
    issuedBy: string;
    // ... other fields
  };
}
