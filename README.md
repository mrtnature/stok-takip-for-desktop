# Stok Takip Sistemi / Stock Tracking System

Masaüstü için geliştirilmiş stok takip uygulaması.  
Desktop stock tracking application built with Electron.

## 📋 Özellikler / Features

- ✅ Ürün ekleme, düzenleme ve silme / Add, edit, and delete products
- 🔍 Ürün arama / Product search
- 📊 İstatistikler (toplam ürün, toplam değer, düşük stok) / Statistics (total products, total value, low stock)
- 💾 Yerel veri saklama / Local data storage
- 🎨 Modern ve kullanıcı dostu arayüz / Modern and user-friendly interface
- ⚠️ Düşük stok uyarıları / Low stock warnings
- 💰 Fiyat ve toplam değer hesaplama / Price and total value calculation

## 🚀 Kurulum / Installation

### Gereksinimler / Requirements

- Node.js (v14 veya üzeri / v14 or higher)
- npm (Node.js ile birlikte gelir / comes with Node.js)

### Adımlar / Steps

1. Depoyu klonlayın / Clone the repository:
```bash
git clone https://github.com/mrtnature/stok-takip-for-desktop.git
cd stok-takip-for-desktop
```

2. Bağımlılıkları yükleyin / Install dependencies:
```bash
npm install
```

3. Uygulamayı başlatın / Start the application:
```bash
npm start
```

## 📖 Kullanım / Usage

### Ürün Ekleme / Adding Products

1. Sol taraftaki formu doldurun / Fill in the form on the left:
   - Ürün Adı / Product Name
   - Ürün Kodu / Product Code
   - Kategori / Category
   - Miktar / Quantity
   - Fiyat / Price

2. "Ekle" butonuna tıklayın / Click the "Add" button

### Ürün Düzenleme / Editing Products

1. Ürün listesinde düzenlemek istediğiniz ürünün yanındaki "Düzenle" butonuna tıklayın
2. Form otomatik olarak doldurulacaktır
3. Değişiklikleri yapın ve "Güncelle" butonuna tıklayın

### Ürün Silme / Deleting Products

1. Silmek istediğiniz ürünün yanındaki "Sil" butonuna tıklayın
2. Onay mesajını kabul edin

### Ürün Arama / Searching Products

Sağ üst köşedeki arama kutusunu kullanarak ürünleri isme, koda veya kategoriye göre filtreleyebilirsiniz.

## 🎨 Arayüz / Interface

- **İstatistikler Kartları**: Toplam ürün sayısı, toplam değer ve düşük stoklu ürün sayısını gösterir
- **Uyarı Renkleri**: 
  - Sarı: Düşük stok (10 veya daha az)
  - Kırmızı: Stok tükendi (0)

## 💾 Veri Saklama / Data Storage

Uygulama, tüm verileri tarayıcının localStorage özelliğini kullanarak saklar. Veriler bilgisayarınızda yerel olarak tutulur ve internet bağlantısı gerektirmez.

## 🛠️ Geliştirme / Development

```bash
# Uygulamayı geliştirme modunda çalıştırın
npm start
```

## 📝 Lisans / License

MIT

## 🤝 Katkıda Bulunma / Contributing

Katkılarınızı bekliyoruz! Lütfen bir pull request gönderin.  
Contributions are welcome! Please feel free to submit a pull request.