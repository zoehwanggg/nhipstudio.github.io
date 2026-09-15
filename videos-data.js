// ============================================================================
// DANH SÁCH VIDEO THAM KHẢO
// ============================================================================
// Đây là file DUY NHẤT bạn cần sửa để thêm/xóa video — không cần đụng vào
// script.js hay styles.css.
//
// CÁCH THÊM 1 VIDEO MỚI:
//   1. Copy file .mp4 vào thư mục "videos/" (cùng cấp với index.html).
//   2. Thêm 1 dòng { ... } vào mảng VIDEOS bên dưới, theo đúng mẫu có sẵn.
//   3. Lưu lại, mở lại trang là thấy video xuất hiện.
//
// Mỗi video có các trường:
//   title : tên hiển thị (bắt buộc)
//   file  : đường dẫn tới file trong thư mục videos/ (bắt buộc, đúng chính tả
//           kể cả hoa/thường, vì tên file phân biệt hoa thường trên nhiều hệ
//           thống dù Windows không phân biệt)
//   note  : mô tả ngắn, ví dụ hiệu ứng nào được dùng, dùng cho loại banner nào
//           (không bắt buộc, có thể để chuỗi rỗng "")
//
// Ví dụ mẫu — xóa hoặc sửa lại theo video thật của bạn:

const VIDEOS = [
   { title: "MIK Group", file: "videos/MIK.mp4",
     note: "Áp dụng Typewriter cho sub text + Skrink out cho các dots + Pop in bảng biển và tagline." },
   { title: "Sun Urban City", file: "videos/Sun urban city_01.08.26.mp4",
     note: "Áp dụng Light Sweep cho tagline + Zoom In cho ảnh sản phẩm + Fade in từng frame." },
   { title: "Ariel", file: "videos/Ariel.mp4",
     note: "Áp dụng Typewriter cho tagline + Pop in và Light Sweep cho sản phẩm, Zoom out chuyển frame 2." },
   { title: "Biofermin", file: "videos/Biofermin.mp4",
     note: "Áp dụng Pop In box tagline + Shake promotion + Shimmer quanh box voucher." },
   { title: "Geely EX2", file: "videos/Geely EX2.mp4",
     note: "Áp dụng Typewriter cho tagline + Light Sweep element dải lụa + Flip thẻ xe." },
   { title: "Redmi Note 15", file: "videos/Redmi Note 15.mp4",
     note: "Áp dụng Lightsweep cho sản phẩm và Promotion + Pulse promotion." },
    { title: "Grab sinh viên_bike", file: "videos/Grab sinh viên_bike.mp4",
     note: "Áp dụng Zoom In, Wiggle, Light Sweep cho tagline + Rotation cho logo." },
];
