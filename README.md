# 📱 QR Code Generator (React)

A modern and responsive **QR Code Generator** application built using **React.js**.  
It allows users to generate QR codes for text, URLs, or UPI details with a colorful UI, save QR history, and download generated QR codes.

---

## 🚀 Live Demo  
🔗 Add your live project link here  
URL: https://qr-code-react-frontend.vercel.app/

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6)
- CSS (Glassmorphism, Gradients)
- qrcode.react
- LocalStorage

---

## ✨ Features

- ✅ Generate QR codes for text, URL, or UPI
- ✅ Modern & colorful UI
- ✅ Input validation (prevents empty QR generation)
- ✅ Save generated QR data
- ✅ History persists using LocalStorage
- ✅ Click history items to regenerate QR
- ✅ Download QR code as a PNG image
- ✅ Fully responsive design

---

## 📂 Folder Structure

src/
├── components/
│ └── Qr.jsx
├── App.jsx
├── main.jsx
├── Qr.css
├── index.css

## Install dependencies
    -npm install


## Run the development server
    - npm run start


## Open in browser
    - http://localhost:5173


🧠 How the App Works

- User enters text / URL / UPI in the input field
- Clicking Create generates the QR code
- Generated QR can be saved to history
- History data is stored in LocalStorage
- User can download the QR code as an image
- Clicking on saved history regenerates the QR instantly


🎯 Future Enhancements

- 🎨 QR color customization
- 💳 Real UPI QR format
- 📤 Share QR code feature


## Deploy
- Vercel