# HƯỚNG DẪN SEED DỮ LIỆU VÀO SUPABASE

## 1. Thiết kế Database Schema
- File thiết kế: `design/db-schema-v6.sql`
- Mô tả chi tiết các bảng, quan hệ, ràng buộc khoá ngoại, kiểu dữ liệu.
- Đảm bảo schema chuẩn hóa, logic, phù hợp nghiệp vụ VietinBank.

## 2. Migrate Schema lên Supabase
- Sử dụng file `db-schema-v6.sql` để tạo các bảng trên Supabase.
- Có thể dùng Supabase Studio hoặc Supabase CLI:
  ```bash
  supabase db execute --file design/db-schema-v6.sql
  ```
- Kiểm tra lại các bảng, ràng buộc sau khi migrate.

## 3. Sinh dữ liệu giả lập (dummy/mock data)
### a. Quy tắc sinh dữ liệu
- Mỗi bảng có ít nhất 20 dòng dữ liệu, đảm bảo tính logic và liên kết khoá ngoại.
- Một số quy tắc đặc biệt:
  - **roles**: Chỉ gồm 3 giá trị: `Người dùng thường`, `IO`, `TO`.
  - **statuses**:
    - Sáng kiến: `Nghiên cứu`, `Xây dựng`, `Thí điểm`, `Triển khai rộng`
    - Nhiệm vụ: `Đang triển khai`, `Kết thúc`
  - **categories**: `Công nghệ`, `Chương trình thi đua`, `Giao nhiệm vụ`, `Vinh danh`, `Tin tức`, `Triển khai sáng kiến`
  - **divisions**: Dùng tên phòng/ban/chi nhánh thực tế của VietinBank (ví dụ: Hội sở chính, Chi nhánh TP.HCM, ...)
  - **users**: Email theo domain `vietinbank.vn`, tên Việt hóa, role hợp lệ.
  - **missions, initiatives, news, recognition**: Không dùng Faker cho tên/summary/content, mà tự đặt tên thực tế, logic, tham khảo file `mockData.ts`.
  - Các bảng liên kết (join tables) và bảng log phải đảm bảo dữ liệu liên kết hợp lý, không trùng lặp vô lý.

### b. Tạo script Python sinh dữ liệu
- File: `src/backend/db/generate_mockdata.py`
- Sử dụng thư viện `faker` (locale `vi_VN`) cho các trường hợp cần random, nhưng tên/sự kiện chính phải tự đặt.
- Script xuất ra file `mockdata.json` chứa dữ liệu cho tất cả các bảng.

## 4. Sinh file SQL để seed dữ liệu vào Supabase
- Viết script Python (`generate_sql_from_mockdata.py`) để chuyển `mockdata.json` thành file SQL (`seed_mockdata.sql`) với các lệnh `INSERT INTO ...` cho từng bảng, đúng thứ tự khoá ngoại.
- Nếu file SQL quá lớn, chia nhỏ thành nhiều file (ví dụ: `seed_mockdata_part1.sql` ... `seed_mockdata_part5.sql`) để migrate dần.

## 5. Migrate dữ liệu lên Supabase
- Dùng Supabase CLI hoặc Supabase MCP để chạy từng file SQL:
  ```bash
  supabase db execute --file seed_mockdata_part1.sql
  supabase db execute --file seed_mockdata_part2.sql
  ...
  ```
- Hoặc dùng giao diện Supabase Studio để chạy từng phần.

## 6. Lưu ý
- Đảm bảo dữ liệu seed không vi phạm ràng buộc khoá ngoại.
- Nếu gặp lỗi do dữ liệu quá lớn, chia nhỏ file và migrate từng phần.
- Có thể kiểm tra dữ liệu trực tiếp trên Supabase Studio sau khi seed xong.

---
**Tóm tắt quy trình:**
1. Thiết kế schema → 2. Migrate schema lên Supabase → 3. Sinh dữ liệu giả lập (theo quy tắc) → 4. Chuyển sang file SQL → 5. Seed dữ liệu lên Supabase. 