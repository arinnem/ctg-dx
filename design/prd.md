# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD)

## 1. Giới thiệu

### 1.1. Mục tiêu dự án
Xây dựng một cổng thông tin DX (DX Portal) nhằm nâng cao trải nghiệm số cho nhân viên, cung cấp thông tin về các sáng kiến, nhiệm vụ, tin tức, và ghi nhận thành tích trong tổ chức.

### 1.2. Đối tượng sử dụng
- Nhân viên trong tổ chức
- Ban lãnh đạo
- Bộ phận truyền thông nội bộ

---

## 2. Phạm vi chức năng

### 2.1. Trang chủ (Dashboard)
- Hiển thị tổng quan các sáng kiến, nhiệm vụ nổi bật, tin tức mới nhất, và các bài ghi nhận thành tích.
- Có các thẻ (card) nổi bật cho từng mục.

### 2.2. Quản lý Sáng kiến (Initiatives)
- Danh sách các sáng kiến đang triển khai.
- Xem chi tiết từng sáng kiến: mô tả, tiến độ, người phụ trách, các mốc quan trọng.
- Tìm kiếm, lọc sáng kiến theo trạng thái, phòng ban.

### 2.3. Quản lý Nhiệm vụ (Missions)
- Danh sách các nhiệm vụ được giao.
- Xem chi tiết nhiệm vụ: mục tiêu, deadline, người thực hiện, trạng thái.
- Đánh dấu hoàn thành nhiệm vụ.

### 2.4. Tin tức & Cập nhật (News & Updates)
- Danh sách các bài viết, thông báo mới nhất.
- Xem chi tiết từng bài viết.

### 2.5. Ghi nhận thành tích (Recognition)
- Danh sách các bài ghi nhận thành tích cá nhân/nhóm.
- Xem chi tiết bài ghi nhận: nội dung, người được ghi nhận, người ghi nhận.

### 2.6. Hỏi đáp (Q&A)
- Danh sách các câu hỏi thường gặp.
- Accordion hiển thị câu trả lời cho từng câu hỏi.

---

## 3. Yêu cầu chức năng chi tiết

### 3.1. Đăng nhập/Đăng xuất (nếu có)
- Xác thực người dùng qua email nội bộ hoặc SSO.

### 3.2. Giao diện người dùng
- Responsive, tối ưu cho cả desktop và mobile.
- Sử dụng màu sắc, logo nhận diện thương hiệu tổ chức.
- Thanh điều hướng (Navigation Header) rõ ràng, dễ sử dụng.

### 3.3. Tìm kiếm & Lọc
- Tìm kiếm sáng kiến, nhiệm vụ, tin tức theo từ khóa.
- Lọc theo trạng thái, phòng ban, thời gian.

### 3.4. Thông báo (Notification)
- Hiển thị thông báo khi có nhiệm vụ mới, sáng kiến mới, hoặc ghi nhận mới.

---

## 4. Yêu cầu phi chức năng

### 4.1. Hiệu năng
- Tải trang nhanh, tối ưu hóa hình ảnh và dữ liệu.
- Hỗ trợ nhiều người dùng truy cập đồng thời.

### 4.2. Bảo mật
- Bảo vệ dữ liệu người dùng, phân quyền truy cập.
- Lưu trữ dữ liệu an toàn, backup định kỳ.

### 4.3. Khả năng mở rộng
- Dễ dàng bổ sung thêm module mới (ví dụ: khảo sát, sự kiện).
- Kiến trúc backend tách biệt, hỗ trợ API.

---

## 5. Kiến trúc hệ thống

### 5.1. Frontend
- Sử dụng React (TypeScript), cấu trúc component rõ ràng.
- Sử dụng Tailwind CSS cho style.

### 5.2. Backend
- Xây dựng API phục vụ dữ liệu cho frontend.
- Quản lý dữ liệu sáng kiến, nhiệm vụ, tin tức, ghi nhận.
- Có thể sử dụng Node.js hoặc Python cho backend.

### 5.3. Cơ sở dữ liệu
- Thiết kế bảng cho các thực thể: Initiative, Mission, News, Recognition, User.
- Hỗ trợ seed dữ liệu mock cho phát triển.

---

## 6. Lộ trình phát triển (Roadmap)

1. Thiết kế giao diện (UI/UX)
2. Xây dựng backend và cơ sở dữ liệu
3. Phát triển frontend
4. Tích hợp API
5. Kiểm thử và hoàn thiện
6. Triển khai và đào tạo người dùng

---

## 7. Đánh giá thành công

- 90% nhân viên sử dụng cổng thông tin hàng tuần.
- Thời gian cập nhật thông tin mới < 5 phút.
- Giao diện thân thiện, dễ sử dụng (đánh giá > 8/10 từ khảo sát nội bộ).

---

## 8. Phụ lục

- Sơ đồ hệ thống, luồng dữ liệu (tham khảo file system_flow.md)
- Blueprint cơ sở dữ liệu (db-schema-blueprint-v6.md, db-schema-v6.sql)
- Mock data và script seed (generate_mockdata.py, seed_mockdata.sql)

---
