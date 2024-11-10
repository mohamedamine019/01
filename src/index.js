import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // إذا كان لديك ملف CSS مخصص
import App from './App';  // تأكد من أن مسار App.js صحيح

// 1. إنشاء الجذر (Root)
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. رسم التطبيق (App) داخل الجذر
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
