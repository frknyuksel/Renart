# 💍 Renart – Ürün Listeleme ve Fiyat Hesaplama Uygulaması

Kullanıcıların takı ürünlerini filtreleyerek görüntüleyebileceği, renk seçenekleriyle etkileşime geçebileceği ve sıralayabileceği bir ürün listeleme arayüzü sunar.

---

## 🔧 Teknolojiler

### Frontend:
- **Next.js**
- **React**
- **Tailwind CSS**
- **React Slick** (ürün carousel için)
- **Custom Fonts** (`Montserrat`, `Avenir`)

### Backend:
- **Node.js**
- **Express**
- **Local JSON verisi**
- Fiyatlar `(popularityScore + 1) * weight * goldPrice` formülüyle dinamik hesaplanır.

---

## 🌐 Canlı Demo

- **Frontend:** [https://renart-2.onrender.com](https://renart-2.onrender.com)  
- **Backend API (JSON):** [https://renart-1-wowp.onrender.com/api/products](https://renart-1-wowp.onrender.com/api/products)

---

## 📸 Özellikler

- 🎨 Renk seçimi (Yellow, Rose, White Gold)  
- ⭐ Yıldızlı puanlama sistemi  
- 📊 Popülerlik ve fiyat bazlı sıralama  
- 📱 Mobil uyumlu carousel  
- 🚀 Render ile canlıya alınmış versiyon  

---

## 📁 Proje Yapısı

```bash
Renart/
├── backend/
│   ├── data/product.json
│   └── server.js
└── frontend/
    ├── pages/
    ├── components/
    ├── public/fonts/
    └── styles/
