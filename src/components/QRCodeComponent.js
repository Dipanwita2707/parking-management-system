// src/components/QRCodeComponent.js

import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeComponent({ value }) {
  return <QRCode value={value} />;
}

export default QRCodeComponent;
