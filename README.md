# 906 PAPER Landing Page

โปรเจ็กต์หน้าเดียวสำหรับโฆษณา Google Ads พร้อม deploy บน Railway

## รันท้องถิ่น

```bash
npm install
npm run dev
```

เข้าใช้งานที่ `http://localhost:3000`

## Deploy บน Railway

1. สร้าง Git repo แล้ว push โค้ดนี้
2. เข้า Railway แล้วสร้างโปรเจ็กต์ New → Deploy from GitHub
3. เลือก repo นี้ และตั้งค่าต่อไปนี้:
   - Root: โฟลเดอร์รากของโปรเจ็กต์นี้
   - Build: อัตโนมัติ
   - Start Command: `node server.js` (มีใน Procfile แล้ว)
4. ตั้ง `PORT` เป็นตัวแปรที่ Railway กำหนดให้โดยอัตโนมัติ
5. กด Deploy

## โครงสร้างไฟล์

- `server.js` เซิร์ฟ Express เสิร์ฟไฟล์ใน `public`
- `public/index.html` หน้า Landing
- `public/styles.css` สไตล์
- `public/robots.txt` ไฟล์บอกบอท
- `public/sitemap.xml` แผนผังเว็บไซต์
- `Procfile` กำหนดคำสั่ง start บน Railway

## ปรับโดเมน/ลิงก์

แก้ `canonical`, `og:url`, และ sitemap ให้เป็นโดเมนจริงของคุณ

```
/public/index.html → https://YOURDOMAIN/
/public/robots.txt → Sitemap: https://YOURDOMAIN/sitemap.xml
/public/sitemap.xml → <loc>https://YOURDOMAIN/</loc>
```

## Tracking (ถ้าต้องการ)

เพิ่มสคริปต์ Google Ads/GA4 ที่ท้าย `<head>` ของ `index.html` ตามโค้ดจากบัญชีของคุณ

