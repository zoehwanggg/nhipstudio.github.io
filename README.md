# NHỊP — Thư viện hiệu ứng & video tham khảo cho banner

Website tĩnh, dùng nội bộ, không cần server, không cần API key, không tốn phí.

```
index.html       giao diện
styles.css       style + toàn bộ @keyframes
script.js        dữ liệu 34 hiệu ứng + logic hiển thị/lọc theo nhóm + hiển thị video
videos-data.js   danh sách video tham khảo — file DUY NHẤT bạn cần sửa để thêm video
videos/          nơi copy các file video (.mp4) vào
```

## Dùng ngay

Mở thẳng `index.html` bằng trình duyệt — chạy được luôn, không cần cài gì.
Có 2 tab: **Thư viện hiệu ứng** (34 hiệu ứng CSS dựng sẵn) và **Video tham khảo**
(video banner thật do bạn tự thêm vào, xem hướng dẫn bên dưới).

## Cách thêm video tham khảo của bạn

Vì đây là site tĩnh (không có server), video không "upload" qua một nút bấm
trên web — mà bạn copy file thẳng vào thư mục, rất đơn giản:

1. Copy file `.mp4` vào thư mục `videos/` (ngay cạnh `index.html`).
2. Mở file `videos-data.js`, thêm 1 dòng vào mảng `VIDEOS`, theo mẫu có sẵn
   trong file (chỉ cần đổi `title`, `file`, `note`):
   ```js
   const VIDEOS = [
     { title: "Banner Sale Tết 2026", file: "videos/banner-sale-tet.mp4",
       note: "Áp dụng Pop In cho tiêu đề + Light Sweep cho logo ở giây thứ 4." },
   ];
   ```
3. Lưu lại, mở lại `index.html` (hoặc tải lại trang nếu đang host) — video xuất
   hiện ngay trong tab Video tham khảo, có trình phát video gốc của trình
   duyệt (tua, phát, toàn màn hình...).

Nếu quên copy file hoặc gõ sai tên file, thẻ video đó sẽ tự hiện dòng báo lỗi
"Không tìm thấy file ..." thay vì trắng trơn, để bạn biết ngay cần sửa gì.

**Lưu ý về dung lượng:** video gốc thường khá nặng (vài chục–vài trăm MB).
Nếu định host qua Netlify Drop hoặc gửi qua Google Drive, nên nén nhẹ video
trước (ví dụ xuất H.264 1080p, bitrate vừa phải) để trang tải nhanh và không
vượt giới hạn dung lượng miễn phí của nơi host.

## Chia sẻ cho người khác dùng nội bộ

Vì không có phần server nào, bạn có thể host ở bất kỳ đâu chỉ cần chỗ chứa file
tĩnh, hoàn toàn miễn phí:

- **Đơn giản nhất**: nén cả thư mục này (đã có video bên trong) gửi qua
  Zalo/email/Google Drive, người nhận giải nén và mở `index.html`.
- **Có link để mở trên điện thoại/máy khác**: kéo-thả cả thư mục này vào
  [app.netlify.com/drop](https://app.netlify.com/drop) (Netlify Drop) — có link
  public sau vài giây, không cần tài khoản, không cần cấu hình gì.
- **Nội bộ công ty**: bỏ cả thư mục này vào một chỗ dùng chung (Google Drive,
  SharePoint, ổ mạng nội bộ...), mọi người tự mở `index.html`.

## Tùy chỉnh

- Thêm/sửa hiệu ứng: sửa mảng `EFFECTS` ở đầu `script.js`, thêm class
  `.anim-<id>` + `@keyframes` tương ứng trong `styles.css`.
- Thêm/xóa video tham khảo: sửa `videos-data.js` (xem hướng dẫn ở trên).
- Đổi màu/phong cách: các biến màu nằm ở đầu `styles.css` trong khối `:root`.
- Đổi nhóm/thứ tự hiệu ứng: sửa mảng `CATS` và trường `cat` của từng effect
  trong `EFFECTS`.
