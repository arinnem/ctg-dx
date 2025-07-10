# Tài liệu Yêu cầu Sản phẩm (URD)
# Cổng thông tin Chuyển đổi số VietinBank (PROJECT X01)

**Phiên bản:** 2.3  
**Ngày cập nhật:** 24/06/2025  
**Trạng thái:** Hoạt động

---

## 1. Tổng quan (Overview)

### 1.1. Giới thiệu

Tài liệu này mô tả chi tiết các yêu cầu về sản phẩm, tính năng, và kỹ thuật cho việc xây dựng "Cổng thông tin Chuyển đổi số VietinBank" (tên dự án: PROJECT X01). Cổng thông tin này được hình thành với mục tiêu trở thành trung tâm thông tin (single source of truth) cho mọi hoạt động, dữ liệu, và kết quả liên quan đến hành trình chuyển đổi số của Ngân hàng TMCP Công thương Việt Nam (VietinBank).

### 1.2. Bối cảnh và Vấn đề

Trong bối cảnh chuyển đổi số diễn ra mạnh mẽ, thông tin về các dự án và sáng kiến tại VietinBank hiện đang bị phân mảnh trên nhiều kênh (email, báo cáo PowerPoint, các nhóm chat), gây ra các thách thức lớn:

- **Thiếu minh bạch và nhất quán:** Ban Lãnh đạo và nhân viên khó nắm bắt được bức tranh toàn cảnh, cập nhật về tiến độ và kết quả của các sáng kiến.
- **Hợp tác rời rạc:** Các đội nhóm dự án thiếu một không gian chung để chia sẻ tài liệu, cập nhật trạng thái và thảo luận, dẫn đến việc phối hợp không hiệu quả.
- **Truyền thông không hiệu quả:** Những thành công và nỗ lực của các cá nhân, chi nhánh chưa được ghi nhận và lan tỏa kịp thời, làm giảm động lực và sự gắn kết của nhân viên với quá trình chuyển đổi.
- **Lãng phí thời gian:** Nhân viên mất nhiều thời gian để tìm kiếm tài liệu, hướng dẫn, hoặc thông tin liên hệ chính xác liên quan đến một dự án.

### 1.3. Giải pháp đề xuất

Xây dựng một Cổng thông tin (Portal) hiện đại, tập trung, tích hợp cơ chế đăng nhập một lần (SSO) và cá nhân hóa trải nghiệm theo vai trò người dùng. Cổng thông tin sẽ cung cấp một nền tảng hợp nhất để quản lý, theo dõi, và truyền thông về hành trình chuyển đổi số của ngân hàng.

---

## 2. Mục tiêu sản phẩm (Product Goals)

- **Mục tiêu Chiến lược:** Cung cấp cho Ban Lãnh đạo một công cụ trực quan để theo dõi và đánh giá hiệu quả của các khoản đầu tư vào chuyển đổi số.
- **Mục tiêu Vận hành:** Tăng cường sự minh bạch, hợp tác và hiệu quả trong việc quản lý và triển khai các sáng kiến chuyển đổi số cho Ban Quản lý.
- **Mục tiêu Văn hóa:** Thúc đẩy sự gắn kết, lan tỏa tinh thần đổi mới và xây dựng văn hóa ghi nhận trong toàn thể nhân viên.

---

## 3. Phân tích người dùng và Phân quyền (User Roles & Permissions)

Hệ thống sẽ có 6 nhóm người dùng chính, với các quyền hạn được phân cấp rõ ràng:

### 3.1. Nhóm 1: Người dùng thông thường (Employee)

- **Mô tả:** Toàn bộ nhân viên của VietinBank có tài khoản đăng nhập.
- **Quyền hạn:**
  - **Xem:** Có quyền xem tất cả các thông tin công khai trên cổng thông tin: danh sách và chi tiết các Sáng kiến, Tin tức, Chương trình Thi đua, các bài đăng Vinh danh.
  - **Tương tác:** Có thể thích và bình luận trên các bài đăng Vinh danh, đặt câu hỏi trong mục Q&A của các Sáng kiến/Chương trình.
- **Mục tiêu trải nghiệm:** Nắm bắt thông tin một cách dễ dàng, cảm thấy được kết nối với hành trình chuyển đổi chung.

### 3.2. Nhóm 2: Người dùng được phân quyền / Team Triển khai (Privileged / Team Member)

- **Mô tả:** Các thành viên chính thức của một đội dự án/sáng kiến.
- **Quyền hạn:**
  - Bao gồm tất cả quyền của **Người dùng thông thường**.
  - **Xem Dashboard:** Được cấp quyền xem các dashboard chi tiết (dạng iframe hoặc native) của các sáng kiến mà họ là thành viên.
- **Mục tiêu trải nghiệm:** Theo dõi được tiến độ và hiệu quả công việc của đội nhóm mình một cách trực quan.

### 3.3. Nhóm 3: IO & Backup IO

- **Mô tả:** Người chịu trách nhiệm chính (Initiative Owner) và người dự phòng cho một sáng kiến.
- **Quyền hạn:**
  - Bao gồm tất cả quyền của **Team Triển khai**.
  - **Quyền Quản trị Nội dung (giới hạn):** Được truy cập vào CMS (`/admin`) để **chỉnh sửa thông tin chi tiết** (mô tả, trạng thái, tài liệu, Q&A) của **chỉ những sáng kiến mà họ phụ trách**.
- **Mục tiêu trải nghiệm:** Có khả năng tự chủ động cập nhật thông tin, tiến độ dự án của mình một cách nhanh chóng và chính xác.

### 3.4. Nhóm 4: Ban Lãnh đạo Khối (Division Leadership)

- **Mô tả:** Các Giám đốc Khối (GĐK).
- **Quyền hạn:**
  - Bao gồm tất cả quyền của **Người dùng được phân quyền**.
  - **Xem Dashboard theo Khối:** Được xem dashboard của tất cả các sáng kiến thuộc Khối mình phụ trách.
- **Mục tiêu trải nghiệm:** Có cái nhìn tổng quan về hiệu suất của tất cả các dự án chuyển đổi số trong phạm vi quản lý của mình.

### 3.5. Nhóm 5: Ban Lãnh đạo Cấp cao (Top Leadership)

- **Mô tả:** Hội đồng Quản trị (HĐQT), Ban Điều hành (BĐH).
- **Quyền hạn:**
  - Bao gồm tất cả quyền của **Người dùng được phân quyền**.
  - **Xem Toàn bộ Dashboard:** Được xem dashboard của **tất cả** các sáng kiến trong toàn hệ thống.
  - **Xem Dashboard Chiến lược:** Có quyền truy cập các dashboard đặc biệt, tổng hợp các chỉ số chiến lược như hiệu quả đầu tư (ROI), các rủi ro chính, và tiến độ các cột mốc quan trọng.
- **Mục tiêu trải nghiệm:** Nắm bắt nhanh chóng, toàn diện và chiến lược về toàn bộ hành trình chuyển đổi số.

### 3.6. Nhóm 6: Quản trị viên TO (TO Admin)

- **Mô tả:** Các thành viên chủ chốt của Văn phòng Chuyển đổi số (TO).
- **Quyền hạn:**
  - **Quyền lực cao nhất:** Có tất cả các quyền xem và tương tác.
  - **Toàn quyền Quản trị Nội dung (CMS):** Được truy cập vào CMS (`/admin`) để **tạo, sửa, xóa tất cả** các loại nội dung (Sáng kiến, Tin tức, Vinh danh, Thi đua, Người dùng, Phân quyền...).
- **Mục tiêu trải nghiệm:** Có toàn quyền điều hành, quản lý và cấu hình toàn bộ nội dung và hoạt động của cổng thông tin.

---

## 4. Yêu cầu Chức năng (Functional Requirements)

### 4.1. Hệ thống CMS Backend

- **Mô tả:** Hệ thống CMS backend được xây dựng để quản lý tất cả nội dung của cổng thông tin, bao gồm Tin tức, Chương trình Thi đua, Vinh danh, và Sáng kiến, được truy cập tại route `/admin`. Giao diện này sẽ hiển thị các chức năng khác nhau tùy thuộc vào vai trò của người dùng (`TO_Admin` hay `IO`).
- **Chức năng chính:**
  - **Quản lý Tin tức:** Tạo, chỉnh sửa, xóa bài viết tin tức với hỗ trợ rich text editor, upload hình ảnh, và phân loại theo danh mục.
  - **Quản lý Chương trình Thi đua:** Tạo và cập nhật thông tin về các chương trình thi đua, bao gồm thể lệ, tiêu chí đánh giá, và kết quả.
  - **Quản lý Vinh danh:** Đăng bài vinh danh với hình ảnh, nội dung, và danh sách người được vinh danh.
  - **Quản lý Sáng kiến:** Cập nhật thông tin chi tiết về các sáng kiến, trạng thái, tiến độ, và tài liệu liên quan.
  - **Quản lý Dashboard:** Cấu hình URL iframe cho các dashboard bên ngoài và thiết lập thông số KPI.
- **Tính năng kỹ thuật:**
  - **API RESTful:** Cung cấp đầy đủ các endpoint CRUD cho tất cả loại nội dung.
  - **Xác thực và Phân quyền:** Tích hợp với hệ thống phân quyền để đảm bảo chỉ người dùng có quyền mới được truy cập.
  - **Upload File:** Hỗ trợ upload và quản lý file (hình ảnh, tài liệu) với validation và security.
  - **Version Control:** Lưu trữ lịch sử thay đổi và khả năng rollback.
  - **Audit Log:** Ghi lại tất cả hoạt động thay đổi nội dung để theo dõi và bảo mật.
- **Luồng hoạt động (Ví dụ cho IO):**
  a. **Frontend:** Khi một IO đăng nhập và truy cập `/admin`, frontend sẽ gọi API `/api/auth/me` để lấy thông tin vai trò và các sáng kiến họ được phép quản lý.
  b. **Tương tác:** Giao diện CMS sẽ chỉ hiển thị danh sách các sáng kiến mà IO đó phụ trách. Khi họ bấm "Sửa", form chỉnh sửa sẽ hiện ra.
  c. **Backend:** Khi IO gửi form, frontend gọi API `PUT /api/admin/initiatives/:id`. Backend sẽ có một middleware kiểm tra: "Người dùng này có phải là TO_Admin HOẶC có phải là IO của sáng kiến có ID này không?". Nếu hợp lệ, backend mới tiến hành cập nhật dữ liệu.

### 4.2. Dashboard & Báo cáo

- **Mô tả:** Cung cấp các dashboard trực quan để theo dõi KPIs.
- **Yêu cầu Giai đoạn 1 (MVP):**
  - Tại trang chi tiết của mỗi Sáng kiến, cho phép lấy dữ liệu từ một dashboard có sẵn từ hệ thống khác thông qua cơ chế phù hợp để hiển thị bằng các thư viện biểu đồ (ví dụ: Recharts).
- **Yêu cầu Giai đoạn 2:**
  - Xây dựng các dashboard gốc (native) ngay trên cổng thông tin.
  - Backend sẽ cung cấp API để Frontend có thể kéo dữ liệu chuỗi thời gian (time-series) từ bảng `initiative_kpis` và hiển thị bằng các thư viện biểu đồ (ví dụ: Recharts).

### 4.3. Các Chuyên mục Nội dung

- **Sáng kiến (/initiatives):** Thư viện các dự án chuyển đổi số. Trang chi tiết có bố cục 2 cột, hiển thị thông tin tổng quan, tab nội dung (Mô tả, Kết quả, Dashboard, Q&A), và cột thông tin phụ (Trạng thái, Nhân sự, Tài liệu).
- **Chương trình Thi đua (/missions):** Tương tự Sáng kiến, nhưng tập trung vào các thông tin như thể lệ, cách tính điểm, và kết quả thi đua.
- **Tin tức (/newsupdate):** Kênh truyền thông với các bài viết được phân loại.
- **Vinh danh (/recognition):** Bức tường ghi nhận thành tích, cho phép tương tác (thích, bình luận).

---

## 5. Yêu cầu Kỹ thuật (Technical Specifications)

### 5.1. Frontend

- **Ngôn ngữ/Thư viện:** TypeScript, React.js (v18+).
- **Định tuyến (Routing):** `react-router-dom`.
- **Tạo kiểu (Styling):** Tailwind CSS.
- **Kiến trúc Đáp ứng & Di động (Responsive & Mobile Architecture):**
  - **Nguyên tắc Mobile-First:** Tất cả các thành phần giao diện (UI) phải được xây dựng theo phương pháp "Ưu tiên thiết bị di động trước".
  - **Định hướng Kiến trúc cho App:** Dự án sẽ được cấu trúc để hỗ trợ việc phát triển một ứng dụng di động gốc (Native App) trong tương lai bằng **React Native**, thông qua việc tách biệt Logic và Giao diện.

### 5.2. Backend

- **Ngôn ngữ/Nền tảng:** Node.js.
- **Framework:** Express.js.
- **Kiến trúc:** RESTful API.

### 5.3. Cơ sở dữ liệu (Database)

- **Hệ quản trị CSDL:** PostgreSQL.
- **Sơ đồ CSDL chi tiết:**

| Tên bảng | Tên cột | Kiểu dữ liệu | Khóa/Tham chiếu | Mô tả chi tiết |
| :--- | :--- | :--- | :--- | :--- |
| **users** | `id` | SERIAL | PK | ID định danh người dùng |
| | `employee_id` | VARCHAR(50) | UNIQUE, NOT NULL | Mã nhân viên, dùng để liên kết với SSO |
| | `email` | VARCHAR(255) | UNIQUE, NOT NULL | Email nhân viên |
| | `full_name` | VARCHAR(255) | NOT NULL | Họ và tên đầy đủ |
| | `avatar_url` | TEXT | | URL ảnh đại diện |
| | `role_id` | INTEGER | FK -> roles(id) | ID của vai trò chính |
| **roles** | `id` | SERIAL | PK | ID định danh vai trò |
| | `name` | VARCHAR(50) | UNIQUE, NOT NULL | Tên vai trò ('TopLeadership', 'DivisionLeadership', 'TO_Admin', 'IO', 'TeamMember', 'Employee') |
| **user_initiative_roles** | `user_id` | INTEGER | FK -> users(id) | ID người dùng |
| | `initiative_id`| INTEGER | FK -> initiatives(id)| ID sáng kiến |
| | `role_in_initiative`| VARCHAR(50) | | Vai trò trong sáng kiến ('IO', 'BackupIO', 'Member') |
| | PRIMARY KEY | (user_id, initiative_id) | | |
| **initiatives**| `id` | SERIAL | PK | ID định danh sáng kiến |
| | `title` | VARCHAR(255) | NOT NULL | Tên sáng kiến |
| | `division_id` | INTEGER | FK -> divisions(id) | Sáng kiến thuộc division nào (để phân quyền cho GĐD) |
| | `status` | VARCHAR(50) | | ('In research', 'Implementation', 'Pilot', 'Go-live') |
| | `pilot_date` | DATE | | Ngày dự kiến thí điểm |
| | `go_live_date`| DATE | | Ngày dự kiến triển khai rộng |
| | `dashboard_iframe_url`| TEXT | | URL iframe cho dashboard (MVP1) |
| **divisions** | `id` | SERIAL | PK | ID Division |
| | `name` | VARCHAR(255) | UNIQUE, NOT NULL | Tên Division (ví dụ: 'Division Bán lẻ', 'Division Công nghệ') |
| | `leader_id` | INTEGER | FK -> users(id) | ID của Lãnh đạo Division |
| **documents** | `id` | SERIAL | PK | ID tài liệu |
| | `name` | VARCHAR(255) | NOT NULL | Tên tài liệu hiển thị |
| | `url` | TEXT | NOT NULL | Đường dẫn đến file (ví dụ: S3 bucket URL) |
| | `uploader_id`| INTEGER | FK -> users(id) | Người tải lên |
| | `initiative_id`| INTEGER | FK -> initiatives(id)| Thuộc sáng kiến nào (có thể null) |
| **news_articles** | `id` | SERIAL | PK | ID định danh tin tức |
| | `author_id` | INTEGER | FK -> users(id) | Người đăng bài |
| | `title` | VARCHAR(255) | NOT NULL | Tiêu đề bài viết |
| | `summary` | TEXT | | Tóm tắt bài viết |
| | `content` | TEXT | NOT NULL | Nội dung chi tiết (hỗ trợ Markdown/HTML) |
| | `image_url` | TEXT | | URL ảnh đại diện |
| | `category_id`| INTEGER | FK -> categories(id)| Danh mục tin tức |
| | `is_featured`| BOOLEAN | DEFAULT false | Có phải tin nổi bật không? |
| | `created_at` | TIMESTAMPTZ| DEFAULT NOW() | Thời gian đăng |
| **categories** | `id` | SERIAL | PK | ID danh mục |
| | `name` | VARCHAR(100)| UNIQUE, NOT NULL | Tên danh mục (ví dụ: 'Công nghệ', 'Sự kiện') |
| **recognition_posts**| `id` | SERIAL | PK | ID bài đăng vinh danh |
| | `poster_id` | INTEGER | FK -> users(id) | Người đăng bài vinh danh |
| | `content` | TEXT | NOT NULL | Nội dung bài đăng |
| | `type` | VARCHAR(50) | NOT NULL | Loại vinh danh ('branch' hoặc 'team') |
| | `created_at` | TIMESTAMPTZ| DEFAULT NOW() | Thời gian đăng |
| **honorees** | `id` | SERIAL | PK | ID của người/đơn vị được vinh danh |
| | `post_id` | INTEGER | FK -> recognition_posts(id)| Thuộc bài đăng nào |
| | `name` | VARCHAR(255)| NOT NULL | Tên người/đơn vị được vinh danh |
| | `avatar_url`| TEXT | | URL ảnh đại diện |
| **comments** | `id` | SERIAL | PK | ID bình luận |
| | `post_id` | INTEGER | FK -> recognition_posts(id)| Bài đăng được bình luận |
| | `user_id` | INTEGER | FK -> users(id) | Người bình luận |
| | `content` | TEXT | NOT NULL | Nội dung bình luận |
| | `parent_comment_id`| INTEGER | FK -> comments(id) | Để trả lời bình luận khác (có thể null) |
| **likes** | `post_id` | INTEGER | FK -> recognition_posts(id)| Bài đăng được thích |
| | `user_id` | INTEGER | FK -> users(id) | Người thích |
| | PRIMARY KEY | (post_id, user_id) | Khóa chính kết hợp, mỗi người chỉ thích 1 lần |
| **qna_items** | `id` | SERIAL | PK | ID câu hỏi |
| | `asker_id` | INTEGER | FK -> users(id) | Người hỏi |
| | `answerer_id` | INTEGER | FK -> users(id) | Người trả lời (nếu có) |
| | `initiative_id`| INTEGER | FK -> initiatives(id)| Thuộc sáng kiến nào |
| | `mission_id` | INTEGER | FK -> missions(id) | Thuộc chương trình thi đua nào (có thể null) |
| | `question` | TEXT | NOT NULL | Nội dung câu hỏi |
| | `answer` | TEXT | | Nội dung câu trả lời |
| | `status` | VARCHAR(50) | DEFAULT 'pending' | Trạng thái ('pending', 'answered', 'closed') |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo câu hỏi |
| | `answered_at` | TIMESTAMPTZ | | Thời gian trả lời |
| **missions** | `id` | SERIAL | PK | ID định danh chương trình thi đua |
| | `title` | VARCHAR(255) | NOT NULL | Tên chương trình thi đua |
| | `description` | TEXT | | Mô tả chi tiết |
| | `rules` | TEXT | | Thể lệ thi đua |
| | `start_date` | DATE | | Ngày bắt đầu |
| | `end_date` | DATE | | Ngày kết thúc |
| | `status` | VARCHAR(50) | DEFAULT 'active' | Trạng thái ('active', 'completed', 'cancelled') |
| | `dashboard_iframe_url` | TEXT | | URL iframe cho dashboard (MVP1) |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| **kpi_categories** | `id` | SERIAL | PK | ID danh mục KPI |
| | `name` | VARCHAR(255) | NOT NULL | Tên danh mục (ví dụ: 'Financial', 'Operational', 'Customer') |
| | `description` | TEXT | | Mô tả danh mục |
| | `color_code` | VARCHAR(7) | | Mã màu hiển thị (ví dụ: '#FF5733') |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| **kpis** | `id` | SERIAL | PK | ID định danh KPI |
| | `name` | VARCHAR(255) | NOT NULL | Tên KPI |
| | `description` | TEXT | | Mô tả chi tiết KPI |
| | `category_id` | INTEGER | FK -> kpi_categories(id) | Thuộc danh mục nào |
| | `unit` | VARCHAR(50) | | Đơn vị đo (ví dụ: '%', 'VND', 'count') |
| | `target_value` | DECIMAL(15,2) | | Giá trị mục tiêu |
| | `min_value` | DECIMAL(15,2) | | Giá trị tối thiểu |
| | `max_value` | DECIMAL(15,2) | | Giá trị tối đa |
| | `is_percentage` | BOOLEAN | DEFAULT false | Có phải là phần trăm không |
| | `is_currency` | BOOLEAN | DEFAULT false | Có phải là tiền tệ không |
| | `display_format` | VARCHAR(50) | | Định dạng hiển thị (ví dụ: '0.00%', '0,000') |
| | `calculation_method` | VARCHAR(100) | | Phương pháp tính toán |
| | `data_source` | VARCHAR(255) | | Nguồn dữ liệu |
| | `refresh_frequency` | VARCHAR(50) | | Tần suất cập nhật ('daily', 'weekly', 'monthly') |
| | `is_active` | BOOLEAN | DEFAULT true | Có đang hoạt động không |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| | `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian cập nhật |
| **initiative_kpis** | `id` | SERIAL | PK | ID liên kết KPI với sáng kiến |
| | `initiative_id` | INTEGER | FK -> initiatives(id) | ID sáng kiến |
| | `kpi_id` | INTEGER | FK -> kpis(id) | ID KPI |
| | `is_primary` | BOOLEAN | DEFAULT false | Có phải KPI chính không |
| | `display_order` | INTEGER | DEFAULT 0 | Thứ tự hiển thị |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| **mission_kpis** | `id` | SERIAL | PK | ID liên kết KPI với chương trình thi đua |
| | `mission_id` | INTEGER | FK -> missions(id) | ID chương trình thi đua |
| | `kpi_id` | INTEGER | FK -> kpis(id) | ID KPI |
| | `is_primary` | BOOLEAN | DEFAULT false | Có phải KPI chính không |
| | `display_order` | INTEGER | DEFAULT 0 | Thứ tự hiển thị |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| **kpi_measurements** | `id` | SERIAL | PK | ID đo lường KPI |
| | `kpi_id` | INTEGER | FK -> kpis(id) | ID KPI |
| | `initiative_id` | INTEGER | FK -> initiatives(id) | ID sáng kiến (có thể null) |
| | `mission_id` | INTEGER | FK -> missions(id) | ID chương trình thi đua (có thể null) |
| | `division_id` | INTEGER | FK -> divisions(id) | ID division (có thể null) |
| | `measured_value` | DECIMAL(15,4) | NOT NULL | Giá trị đo được |
| | `target_value` | DECIMAL(15,4) | | Giá trị mục tiêu tại thời điểm đo |
| | `measurement_date` | DATE | NOT NULL | Ngày đo |
| | `measurement_period` | VARCHAR(20) | | Kỳ đo ('daily', 'weekly', 'monthly', 'quarterly', 'yearly') |
| | `data_source` | VARCHAR(255) | | Nguồn dữ liệu cụ thể |
| | `notes` | TEXT | | Ghi chú về đo lường |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| | `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian cập nhật |
| **dashboard_configs** | `id` | SERIAL | PK | ID cấu hình dashboard |
| | `dashboard_type` | VARCHAR(50) | NOT NULL | Loại dashboard ('overview', 'initiatives', 'performance', 'analytics') |
| | `config_key` | VARCHAR(100) | NOT NULL | Khóa cấu hình |
| | `config_value` | TEXT | | Giá trị cấu hình |
| | `config_type` | VARCHAR(50) | | Loại giá trị ('string', 'number', 'boolean', 'json') |
| | `description` | TEXT | | Mô tả cấu hình |
| | `is_active` | BOOLEAN | DEFAULT true | Có đang hoạt động không |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| | `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian cập nhật |
| **dashboard_widgets** | `id` | SERIAL | PK | ID widget dashboard |
| | `dashboard_type` | VARCHAR(50) | NOT NULL | Loại dashboard |
| | `widget_name` | VARCHAR(100) | NOT NULL | Tên widget |
| | `widget_type` | VARCHAR(50) | NOT NULL | Loại widget ('chart', 'metric', 'table', 'gauge') |
| | `widget_config` | TEXT | | Cấu hình widget (JSON string) |
| | `kpi_id` | INTEGER | FK -> kpis(id) | KPI liên quan (có thể null) |
| | `display_order` | INTEGER | DEFAULT 0 | Thứ tự hiển thị |
| | `is_visible` | BOOLEAN | DEFAULT true | Có hiển thị không |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian tạo |
| | `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian cập nhật |
| **user_activities** | `id` | SERIAL | PK | ID hoạt động người dùng |
| | `user_id` | INTEGER | FK -> users(id) | ID người dùng |
| | `activity_type` | VARCHAR(50) | NOT NULL | Loại hoạt động ('login', 'view', 'create', 'update', 'delete', 'like', 'comment') |
| | `entity_type` | VARCHAR(50) | | Loại đối tượng ('initiative', 'mission', 'news', 'recognition', 'comment') |
| | `entity_id` | INTEGER | | ID đối tượng |
| | `activity_data` | TEXT | | Dữ liệu bổ sung (JSON string) |
| | `ip_address` | INET | | Địa chỉ IP |
| | `user_agent` | TEXT | | User agent |
| | `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Thời gian hoạt động |

---

## 6. Thiết kế API chi tiết (API Endpoints)

- **Quy ước chung:**
  - Prefix: `/api/v1`.
  - Xác thực: JWT gửi trong header `Authorization: Bearer <token>`.
  - Phân quyền: API sẽ được bảo vệ bởi middleware kiểm tra vai trò và quyền hạn của người dùng.

| Phương thức | URL Endpoint | Mô tả | Phân quyền yêu cầu |
| :--- | :--- | :--- | :--- |
| **Authentication** |
| `POST` | `/auth/sso/callback` | Xử lý callback từ SSO, trả về JWT và thông tin người dùng. | Public |
| `GET` | `/auth/me` | Lấy thông tin chi tiết (bao gồm vai trò) của người dùng đang đăng nhập. | Authenticated |
| **Initiatives** |
| `GET` | `/initiatives` | Lấy danh sách sáng kiến công khai. | Authenticated |
| `GET` | `/initiatives/:id` | Lấy chi tiết một sáng kiến. | Authenticated |
| `GET` | `/initiatives/:id/dashboard` | Lấy thông tin dashboard của một sáng kiến. | `TeamMember` (của SK đó), `IO`, `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| **Missions** |
| `GET` | `/missions` | Lấy danh sách chương trình thi đua. | Authenticated |
| `GET` | `/missions/:id` | Lấy chi tiết một chương trình thi đua. | Authenticated |
| `GET` | `/missions/:id/dashboard` | Lấy thông tin dashboard của một chương trình thi đua. | `TeamMember` (của CT đó), `IO`, `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| **News** |
| `GET` | `/news` | Lấy danh sách tin tức (hỗ trợ lọc, phân trang). | Authenticated |
| `GET` | `/news/:id` | Lấy chi tiết một bài viết. | Authenticated |
| **Recognition Posts** |
| `GET` | `/recognition` | Lấy danh sách bài vinh danh (hỗ trợ lọc, phân trang). | Authenticated |
| `POST`| `/recognition/:id/like`| Thích/Bỏ thích một bài đăng. | Authenticated |
| `GET` | `/recognition/:id/comments`| Lấy bình luận của một bài đăng. | Authenticated |
| `POST`| `/recognition/:id/comments`| Gửi một bình luận mới. | Authenticated |
| `PUT` | `/recognition/:id/comments/:comment_id`| Chỉnh sửa bình luận. | Authenticated (chỉ người viết bình luận) |
| `DELETE`| `/recognition/:id/comments/:comment_id`| Xóa bình luận. | Authenticated (chỉ người viết bình luận hoặc Admin) |
| **Dashboard** |
| `GET` | `/dashboard/overview` | Lấy dữ liệu dashboard tổng quan. | `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| `GET` | `/dashboard/initiatives` | Lấy dữ liệu dashboard sáng kiến. | `TeamMember`, `IO`, `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| `GET` | `/dashboard/performance` | Lấy dữ liệu dashboard hiệu suất. | `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| `GET` | `/dashboard/analytics` | Lấy dữ liệu dashboard phân tích. | `TopLeadership`, `TO_Admin` |
| `GET` | `/dashboard/kpis` | Lấy danh sách KPIs cho dashboard. | `DivisionLeadership`, `TopLeadership`, `TO_Admin` |
| **Q&A** |
| `GET` | `/initiatives/:id/qna` | Lấy danh sách câu hỏi của một sáng kiến. | Authenticated |
| `POST` | `/initiatives/:id/qna` | Đặt câu hỏi mới cho một sáng kiến. | Authenticated |
| `PUT` | `/qna/:id/answer` | Trả lời một câu hỏi. | `IO`, `TO_Admin` |
| `GET` | `/missions/:id/qna` | Lấy danh sách câu hỏi của một chương trình thi đua. | Authenticated |
| `POST` | `/missions/:id/qna` | Đặt câu hỏi mới cho một chương trình thi đua. | Authenticated |
| **Comments & Interactions** |
| `GET` | `/comments` | Lấy danh sách bình luận (hỗ trợ filter). | Authenticated |
| `POST` | `/comments` | Tạo bình luận mới. | Authenticated |
| `PUT` | `/comments/:id` | Chỉnh sửa bình luận. | Authenticated (chỉ người viết) |
| `DELETE` | `/comments/:id` | Xóa bình luận. | Authenticated (chỉ người viết hoặc Admin) |
| `POST` | `/comments/:id/reply` | Trả lời bình luận. | Authenticated |
| `POST` | `/likes` | Thích một nội dung (bài viết, bình luận). | Authenticated |
| `DELETE` | `/likes/:id` | Bỏ thích một nội dung. | Authenticated |
| **Admin / CMS** |
| `GET` | `/admin/initiatives` | (Admin) Lấy danh sách sáng kiến để quản lý. | TO_Admin |
| `POST` | `/admin/initiatives` | (Admin) Tạo một sáng kiến mới. | TO_Admin |
| `PUT` | `/admin/initiatives/:id` | (Admin/IO) Cập nhật một sáng kiến. Backend sẽ kiểm tra xem người dùng có phải là TO_Admin hoặc IO của sáng kiến này không. | TO_Admin, IO |
| `DELETE`| `/admin/initiatives/:id` | (Admin) Xóa một sáng kiến. | TO_Admin |
| `POST` | `/admin/initiatives/:id/documents`| Tải lên một tài liệu cho sáng kiến. | TO_Admin, IO |
| `DELETE`| `/admin/documents/:id` | (Admin/IO) Xóa một tài liệu. | TO_Admin, IO |
| `GET` | `/admin/missions` | (Admin) Lấy danh sách chương trình thi đua để quản lý. | TO_Admin |
| `POST` | `/admin/missions` | (Admin) Tạo một chương trình thi đua mới. | TO_Admin |
| `PUT` | `/admin/missions/:id` | (Admin) Cập nhật một chương trình thi đua. | TO_Admin |
| `DELETE`| `/admin/missions/:id` | (Admin) Xóa một chương trình thi đua. | TO_Admin |
| `POST` | `/admin/news` | (Admin) Tạo bài viết mới. | TO_Admin |
| `PUT` | `/admin/news/:id` | (Admin) Cập nhật một bài viết. | TO_Admin |
| `DELETE`| `/admin/news/:id` | (Admin) Xóa một bài viết. | TO_Admin |
| `POST` | `/admin/recognition` | (Admin) Tạo bài đăng vinh danh mới. | TO_Admin |
| `PUT` | `/admin/recognition/:id` | (Admin) Cập nhật một bài đăng vinh danh. | TO_Admin |
| `DELETE`| `/admin/recognition/:id` | (Admin) Xóa một bài đăng vinh danh. | TO_Admin |
| `PUT` | `/admin/qna/:id` | (Admin/IO) Trả lời một câu hỏi. | TO_Admin, IO |
| `GET` | `/admin/users` | (Admin) Lấy danh sách người dùng. | TO_Admin |
| `PUT` | `/admin/users/:id/role` | (Admin) Cập nhật vai trò cho người dùng. | TO_Admin |
| `GET` | `/admin/dashboard/config` | (Admin) Lấy cấu hình dashboard. | TO_Admin |
| `PUT` | `/admin/dashboard/config` | (Admin) Cập nhật cấu hình dashboard. | TO_Admin |
| `GET` | `/admin/dashboard/kpis` | (Admin) Lấy danh sách KPIs để quản lý. | TO_Admin |
| `POST` | `/admin/dashboard/kpis` | (Admin) Tạo KPI mới. | TO_Admin |
| `PUT` | `/admin/dashboard/kpis/:id` | (Admin) Cập nhật KPI. | TO_Admin |
| `DELETE`| `/admin/dashboard/kpis/:id` | (Admin) Xóa KPI. | TO_Admin |

---

## 7. Sitemap và các màn hình liên quan

### 7.1. Sơ đồ Trang web chi tiết (Detailed Sitemap)

Sơ đồ này mô tả cấu trúc của tất cả các trang và đường dẫn trong Cổng thông tin, bao gồm cả các trang công khai và khu vực quản trị.

```
[A] CÁC TRANG CÔNG KHAI (Dành cho mọi người dùng)
 |
 +-- / (Trang chủ)
 |
 +-- /initiatives (Danh sách Sáng kiến)
 |   `-- /initiatives/:id (Chi tiết Sáng kiến)
 |       |-- Tab: Mô tả
 |       |-- Tab: Kết quả
 |       |-- Tab: Dashboard (Hiển thị nếu có quyền)
 |       `-- Tab: Hỏi & Đáp
 |
 +-- /missions (Danh sách Chương trình Thi đua)
 |   `-- /missions/:id (Chi tiết Chương trình Thi đua)
 |       |-- Tab: Thể lệ & Mô tả
 |       |-- Tab: Kết quả
 |       |-- Tab: Dashboard (Hiển thị nếu có quyền)
 |       `-- Tab: Hỏi & Đáp
 |
 +-- /newsupdate (Danh sách Tin tức)
 |   `-- /newsupdate/:id (Chi tiết Tin tức)
 |
 +-- /recognition (Tường Vinh danh)
 |   |-- ?type=branch (Lọc theo Chi nhánh)
 |   |-- ?type=team (Lọc theo Đội nhóm)
 |   |-- /recognition/:id (Chi tiết bài đăng)
 |   |   |-- Like/Unlike functionality
 |   |   |-- Comments section
 |   |   |-- Reply to comments
 |   |   `-- Edit/Delete comments (cho người viết)
 |   `-- /comments (Quản lý bình luận cá nhân)
 |
 +-- /dashboard (Dashboard tổng quan)
 |   |-- /dashboard/overview (Dashboard tổng quan)
 |   |   |-- KPIs tổng hợp
 |   |   |-- Charts và biểu đồ
 |   |   `-- Thống kê tổng thể
 |   |-- /dashboard/initiatives (Dashboard Sáng kiến)
 |   |   |-- Biểu đồ tiến độ
 |   |   |-- Trạng thái các sáng kiến
 |   |   `-- Metrics theo division
 |   |-- /dashboard/performance (Dashboard Hiệu suất)
 |   |   |-- ROI metrics
 |   |   |-- Timeline charts
 |   |   `-- Performance indicators
 |   `-- /dashboard/analytics (Dashboard Phân tích)
 |       |-- Advanced analytics
 |       |-- Trends analysis
 |       |-- Predictions
 |       `-- Custom reports
 |
 +-- /qna (Quản lý Q&A cá nhân)
 |   |-- /qna/my-questions (Câu hỏi của tôi)
 |   |-- /qna/my-answers (Câu trả lời của tôi)
 |   `-- /qna/search (Tìm kiếm Q&A)
 |
 `-- /profile/me (Hồ sơ cá nhân)
     |-- Xem thông tin cá nhân
     |-- Lịch sử hoạt động
     |-- Quản lý bình luận cá nhân
     |-- Quản lý likes cá nhân
     `-- Cài đặt tài khoản

[B] KHU VỰC QUẢN TRỊ CMS (Dành cho TO Admin & IO)
 |
 `-- /admin (Trang tổng quan CMS)
     |
     +-- /admin/initiatives (Quản lý Sáng kiến)
     |   |-- /admin/initiatives/new (Form Tạo Sáng kiến mới)
     |   |-- /admin/initiatives/:id/edit (Form Chỉnh sửa Sáng kiến)
     |   `-- /admin/initiatives/:id/dashboard (Cấu hình Dashboard SK)
     |
     +-- /admin/missions (Quản lý Chương trình Thi đua)
     |   |-- /admin/missions/new (Form Tạo Chương trình mới)
     |   |-- /admin/missions/:id/edit (Form Chỉnh sửa Chương trình)
     |   `-- /admin/missions/:id/dashboard (Cấu hình Dashboard CT)
     |
     +-- /admin/news (Quản lý Tin tức)
     |   |-- /admin/news/new (Form Tạo Tin tức mới)
     |   |-- /admin/news/:id/edit (Form Chỉnh sửa Tin tức)
     |   `-- /admin/news/categories (Quản lý danh mục tin tức)
     |
     +-- /admin/recognition (Quản lý Vinh danh)
     |   |-- /admin/recognition/new (Form Tạo bài đăng mới)
     |   |-- /admin/recognition/:id/edit (Form Chỉnh sửa bài đăng)
     |   |-- /admin/recognition/comments (Quản lý bình luận)
     |   `-- /admin/recognition/likes (Thống kê likes)
     |
     +-- /admin/dashboard (Quản lý Dashboard)
     |   |-- /admin/dashboard/config (Cấu hình Dashboard)
     |   |   |-- Dashboard URLs
     |   |   |-- Permissions settings
     |   |   |-- Widget configurations
     |   |   `-- Theme settings
     |   |-- /admin/dashboard/kpis (Quản lý KPI)
     |   |   |-- CRUD operations cho KPIs
     |   |   |-- KPI categories
     |   |   |-- Metrics definitions
     |   |   `-- Data sources
     |   |-- /admin/dashboard/overview (Dashboard tổng quan Admin)
     |   |-- /admin/dashboard/initiatives (Dashboard sáng kiến Admin)
     |   |-- /admin/dashboard/performance (Dashboard hiệu suất Admin)
     |   `-- /admin/dashboard/analytics (Dashboard phân tích Admin)
     |
     +-- /admin/qna (Quản lý Q&A)
     |   |-- /admin/qna/questions (Danh sách câu hỏi)
     |   |-- /admin/qna/answers (Quản lý câu trả lời)
     |   |-- /admin/qna/categories (Danh mục Q&A)
     |   `-- /admin/qna/statistics (Thống kê Q&A)
     |
     +-- /admin/comments (Quản lý Bình luận)
     |   |-- /admin/comments/all (Tất cả bình luận)
     |   |-- /admin/comments/pending (Bình luận chờ duyệt)
     |   |-- /admin/comments/reported (Bình luận bị báo cáo)
     |   `-- /admin/comments/statistics (Thống kê bình luận)
     |
     `-- /admin/users (Quản lý Người dùng & Phân quyền)
         |-- /admin/users/list (Danh sách người dùng)
         |-- /admin/users/:id/edit (Form Chỉnh sửa quyền)
         |-- /admin/users/roles (Quản lý vai trò)
         |-- /admin/users/permissions (Quản lý phân quyền)
         `-- /admin/users/activity (Hoạt động người dùng)
```

### 7.2. Chi tiết màn hình theo sitemap

| STT | Sitemap page | Màn hình | Ghi chú |
| :--- | :--- | :--- | :--- |
| **A. CÁC TRANG CÔNG KHAI** |
| 1 | `/` | Trang chủ | Banner chính, tin tức nổi bật, sáng kiến mới nhất, thống kê tổng quan |
| 2 | `/initiatives` | Danh sách Sáng kiến | Grid/List view với filter theo trạng thái, division, tìm kiếm |
| 3 | `/initiatives/:id` | Chi tiết Sáng kiến | Layout 2 cột: nội dung chính + sidebar thông tin phụ |
| 3.1 | `/initiatives/:id` (Tab: Mô tả) | Tab Mô tả | Thông tin chi tiết, mục tiêu, phạm vi dự án |
| 3.2 | `/initiatives/:id` (Tab: Kết quả) | Tab Kết quả | KPIs, metrics, thành tựu đạt được |
| 3.3 | `/initiatives/:id` (Tab: Dashboard) | Tab Dashboard | Biểu đồ, charts, dữ liệu thời gian thực (có quyền) |
| 3.4 | `/initiatives/:id` (Tab: Q&A) | Tab Hỏi & Đáp | Danh sách câu hỏi, form đặt câu hỏi mới, trả lời |
| 4 | `/missions` | Danh sách Chương trình Thi đua | Grid view với filter theo trạng thái, thời gian |
| 5 | `/missions/:id` | Chi tiết Chương trình Thi đua | Layout tương tự sáng kiến |
| 5.1 | `/missions/:id` (Tab: Thể lệ & Mô tả) | Tab Thể lệ | Quy định, tiêu chí đánh giá |
| 5.2 | `/missions/:id` (Tab: Kết quả) | Tab Kết quả | Bảng xếp hạng, điểm số, thành tích |
| 5.3 | `/missions/:id` (Tab: Dashboard) | Tab Dashboard | Biểu đồ tiến độ thi đua, metrics |
| 5.4 | `/missions/:id` (Tab: Q&A) | Tab Q&A | Câu hỏi về chương trình thi đua |
| 6 | `/newsupdate` | Danh sách Tin tức | Grid layout với phân trang, filter theo danh mục |
| 7 | `/newsupdate/:id` | Chi tiết Tin tức | Bài viết full-width với hình ảnh, nội dung markdown |
| 8 | `/recognition` | Tường Vinh danh | Feed layout với bài đăng, like, comment |
| 8.1 | `/recognition?type=branch` | Lọc theo Chi nhánh | Filter bài đăng vinh danh chi nhánh |
| 8.2 | `/recognition?type=team` | Lọc theo Đội nhóm | Filter bài đăng vinh danh đội nhóm |
| 8.3 | `/recognition/:id` | Chi tiết bài đăng | Full post view với comments, likes, replies |
| 8.4 | `/comments` | Quản lý bình luận cá nhân | Danh sách bình luận của user, edit/delete |
| 9 | `/dashboard/overview` | Dashboard tổng quan | Overview charts, KPIs tổng hợp, thống kê tổng thể |
| 10 | `/dashboard/initiatives` | Dashboard Sáng kiến | Biểu đồ tiến độ, trạng thái các sáng kiến, metrics theo division |
| 11 | `/dashboard/performance` | Dashboard Hiệu suất | Metrics về hiệu suất, ROI, timeline, performance indicators |
| 12 | `/dashboard/analytics` | Dashboard Phân tích | Advanced analytics, trends, predictions, custom reports |
| 13 | `/qna/my-questions` | Câu hỏi của tôi | Danh sách câu hỏi đã đặt, trạng thái trả lời |
| 14 | `/qna/my-answers` | Câu trả lời của tôi | Danh sách câu trả lời đã viết (cho IO/Admin) |
| 15 | `/qna/search` | Tìm kiếm Q&A | Search interface cho Q&A across initiatives/missions |
| 16 | `/profile/me` | Hồ sơ cá nhân | Thông tin cá nhân, avatar, lịch sử hoạt động, quản lý bình luận/likes |
| **B. KHU VỰC QUẢN TRỊ CMS** |
| 17 | `/admin` | Trang tổng quan CMS | Dashboard admin với thống kê, quick actions |
| 18 | `/admin/initiatives` | Quản lý Sáng kiến | Danh sách sáng kiến với actions (edit, delete) |
| 19 | `/admin/initiatives/new` | Form Tạo Sáng kiến mới | Form đầy đủ với validation, upload file |
| 20 | `/admin/initiatives/:id/edit` | Form Chỉnh sửa Sáng kiến | Form edit với pre-filled data |
| 21 | `/admin/initiatives/:id/dashboard` | Cấu hình Dashboard SK | Settings cho dashboard của sáng kiến cụ thể |
| 22 | `/admin/missions` | Quản lý Chương trình Thi đua | Danh sách chương trình thi đua |
| 23 | `/admin/missions/new` | Form Tạo Chương trình mới | Form tạo chương trình thi đua |
| 24 | `/admin/missions/:id/edit` | Form Chỉnh sửa Chương trình | Form edit chương trình thi đua |
| 25 | `/admin/missions/:id/dashboard` | Cấu hình Dashboard CT | Settings cho dashboard của chương trình thi đua |
| 26 | `/admin/news` | Quản lý Tin tức | Danh sách bài viết với status, author |
| 27 | `/admin/news/new` | Form Tạo Tin tức mới | Rich text editor, image upload, category selection |
| 28 | `/admin/news/:id/edit` | Form Chỉnh sửa Tin tức | Form edit với preview |
| 29 | `/admin/news/categories` | Quản lý danh mục tin tức | CRUD operations cho news categories |
| 30 | `/admin/recognition` | Quản lý Vinh danh | Danh sách bài đăng vinh danh |
| 31 | `/admin/recognition/new` | Form Tạo bài đăng mới | Form với multiple honorees, image upload |
| 32 | `/admin/recognition/:id/edit` | Form Chỉnh sửa bài đăng | Form edit bài vinh danh |
| 33 | `/admin/recognition/comments` | Quản lý bình luận | Moderate comments, approve/reject |
| 34 | `/admin/recognition/likes` | Thống kê likes | Analytics về likes, engagement metrics |
| 35 | `/admin/dashboard/config` | Cấu hình Dashboard | Settings cho dashboard URLs, permissions, widgets, themes |
| 36 | `/admin/dashboard/kpis` | Quản lý KPI | CRUD operations cho KPIs, categories, metrics, data sources |
| 37 | `/admin/dashboard/overview` | Dashboard tổng quan Admin | Admin view của overview dashboard |
| 38 | `/admin/dashboard/initiatives` | Dashboard sáng kiến Admin | Admin view của initiatives dashboard |
| 39 | `/admin/dashboard/performance` | Dashboard hiệu suất Admin | Admin view của performance dashboard |
| 40 | `/admin/dashboard/analytics` | Dashboard phân tích Admin | Admin view của analytics dashboard |
| 41 | `/admin/qna/questions` | Danh sách câu hỏi | Quản lý tất cả câu hỏi, assign answers |
| 42 | `/admin/qna/answers` | Quản lý câu trả lời | Review và approve answers |
| 43 | `/admin/qna/categories` | Danh mục Q&A | CRUD operations cho Q&A categories |
| 44 | `/admin/qna/statistics` | Thống kê Q&A | Analytics về Q&A usage, popular questions |
| 45 | `/admin/comments/all` | Tất cả bình luận | Quản lý tất cả bình luận trong hệ thống |
| 46 | `/admin/comments/pending` | Bình luận chờ duyệt | Moderate pending comments |
| 47 | `/admin/comments/reported` | Bình luận bị báo cáo | Review reported comments, take action |
| 48 | `/admin/comments/statistics` | Thống kê bình luận | Analytics về comments, engagement |
| 49 | `/admin/users/list` | Danh sách người dùng | User management với role assignment |
| 50 | `/admin/users/:id/edit` | Form Chỉnh sửa quyền | Form assign roles, permissions |
| 51 | `/admin/users/roles` | Quản lý vai trò | CRUD operations cho user roles |
| 52 | `/admin/users/permissions` | Quản lý phân quyền | Fine-grained permission management |
| 53 | `/admin/users/activity` | Hoạt động người dùng | User activity logs, analytics |

---

## 8. Luồng người dùng

### 8.1. Người dùng thông thường (Employee)

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1 | Truy cập cổng thông tin | Frontend gọi API `/auth/me` để lấy thông tin user, backend kiểm tra JWT token và trả về user data. Frontend render trang chủ với banner, gọi API `/news?featured=true` để lấy tin nổi bật, gọi API `/initiatives?limit=5` để lấy sáng kiến mới nhất, gọi API `/dashboard/overview` để lấy thống kê tổng quan | SSO tự động đăng nhập |
| 2 | Xem danh sách sáng kiến | Frontend gọi API `/initiatives` với query params (status, division, page, limit). Backend query database với JOIN users, divisions, user_initiative_roles, trả về JSON với pagination. Frontend render grid/list view với filter controls | Chỉ hiển thị thông tin công khai |
| 3 | Xem chi tiết sáng kiến | Frontend gọi API `/initiatives/:id` với initiative_id. Backend query database với JOIN documents, user_initiative_roles, trả về chi tiết sáng kiến. Frontend render layout 2 cột: nội dung chính + sidebar thông tin phụ | Không có quyền xem dashboard |
| 4 | Xem danh sách chương trình thi đua | Frontend gọi API `/missions` với query params (status, start_date, end_date). Backend query database với JOIN users, trả về JSON với pagination. Frontend render grid view với filter controls | Chỉ hiển thị thông tin công khai |
| 5 | Xem chi tiết chương trình thi đua | Frontend gọi API `/missions/:id` với mission_id. Backend query database với JOIN qna_items, trả về chi tiết chương trình. Frontend render layout tương tự sáng kiến | Không có quyền xem dashboard |
| 6 | Xem danh sách tin tức | Frontend gọi API `/news` với query params (category, page, limit). Backend query database với JOIN users, categories, trả về JSON với pagination. Frontend render grid layout với phân trang, filter theo danh mục | Sắp xếp theo thời gian mới nhất |
| 7 | Xem chi tiết tin tức | Frontend gọi API `/news/:id` với news_id. Backend query database với JOIN users, categories, trả về chi tiết bài viết. Frontend render bài viết full-width với hình ảnh, parse markdown content | Không có quyền chỉnh sửa |
| 8 | Xem tường vinh danh | Frontend gọi API `/recognition` với query params (type, page, limit). Backend query database với JOIN users, honorees, comments, likes, trả về JSON với pagination. Frontend render feed layout với bài đăng, like, comment | Có thể filter theo type (branch/team) |
| 9 | Thích/bỏ thích bài đăng | Frontend gọi API `POST/DELETE /recognition/:id/like` với post_id. Backend kiểm tra quyền, insert/delete vào bảng likes, update count trong recognition_posts, trả về updated like count. Frontend update UI với số lượng like mới | Mỗi user chỉ thích 1 lần |
| 10 | Bình luận bài đăng | Frontend gọi API `POST /recognition/:id/comments` với post_id và content. Backend validate input, insert vào bảng comments, update count trong recognition_posts, trả về comment data. Frontend thêm bình luận vào danh sách, cập nhật số lượng comment | Có thể reply bình luận khác |
| 11 | Chỉnh sửa bình luận của mình | Frontend gọi API `PUT /recognition/:id/comments/:comment_id` với comment_id và content mới. Backend kiểm tra quyền (chỉ user viết comment), update bảng comments, trả về updated comment. Frontend cập nhật nội dung bình luận trong UI | Chỉ user viết bình luận mới có quyền |
| 12 | Xóa bình luận của mình | Frontend gọi API `DELETE /recognition/:id/comments/:comment_id` với comment_id. Backend kiểm tra quyền, delete từ bảng comments, update count trong recognition_posts, trả về success. Frontend xóa bình luận khỏi danh sách | Chỉ user viết bình luận mới có quyền |
| 13 | Đặt câu hỏi trong Q&A | Frontend gọi API `POST /initiatives/:id/qna` hoặc `/missions/:id/qna` với question content. Backend validate input, insert vào bảng qna_items với status='pending', trả về question data. Frontend thêm câu hỏi vào danh sách, hiển thị trạng thái pending | Hiển thị trạng thái pending |
| 14 | Xem câu hỏi và trả lời | Frontend gọi API `/initiatives/:id/qna` hoặc `/missions/:id/qna` với initiative_id/mission_id. Backend query database với JOIN users, trả về danh sách Q&A. Frontend hiển thị danh sách Q&A với câu hỏi và trả lời | Sắp xếp theo thời gian |
| 15 | Xem hồ sơ cá nhân | Frontend gọi API `/profile/me` để lấy thông tin user, gọi API `/comments?user_id=:id` để lấy bình luận cá nhân, gọi API `/likes?user_id=:id` để lấy likes cá nhân. Backend query database với JOIN users, roles, trả về profile data. Frontend hiển thị thông tin cá nhân, lịch sử hoạt động, bình luận/likes | Chỉ xem thông tin của mình |

### 8.2. Người dùng được phân quyền / Team Triển khai (Privileged / Team Member)

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1-15 | Tất cả hành động của Employee | Tương tự Employee | Bao gồm tất cả quyền của Employee |
| 16 | Xem dashboard sáng kiến | Frontend gọi API `/initiatives/:id/dashboard` với initiative_id. Backend kiểm tra quyền trong user_initiative_roles, query database với JOIN kpi_measurements, initiative_kpis, trả về dashboard data. Frontend render dashboard chi tiết với charts từ Recharts library | Chỉ hiển thị dashboard của sáng kiến được phân quyền |
| 17 | Xem dashboard chương trình thi đua | Frontend gọi API `/missions/:id/dashboard` với mission_id. Backend kiểm tra quyền, query database với JOIN kpi_measurements, mission_kpis, trả về dashboard data. Frontend render dashboard chi tiết với biểu đồ tiến độ | Chỉ hiển thị dashboard của chương trình được phân quyền |
| 18 | Xem thống kê tiến độ | Frontend gọi API `/dashboard/initiatives` với filter theo initiative_id. Backend query database với JOIN kpi_measurements, initiatives, trả về time-series data. Frontend render biểu đồ tiến độ, metrics của dự án với Recharts | Dữ liệu real-time từ KPI measurements |

### 8.3. IO & Backup IO

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1-18 | Tất cả hành động của Team Member | Tương tự Team Member | Bao gồm tất cả quyền của Team Member |
| 19 | Truy cập CMS | Frontend gọi API `/admin/initiatives` với filter theo user_id. Backend kiểm tra quyền IO, query database với JOIN user_initiative_roles WHERE role='IO', trả về danh sách sáng kiến được phép quản lý. Frontend render giao diện CMS với menu quản lý | Chỉ hiển thị các sáng kiến mà họ phụ trách |
| 20 | Chỉnh sửa thông tin sáng kiến | Frontend gọi API `PUT /admin/initiatives/:id` với initiative_id và form data. Backend validate quyền IO, update bảng initiatives, log activity vào user_activities, trả về updated initiative. Frontend hiển thị form edit với dữ liệu pre-filled | Chỉ có thể edit sáng kiến của mình |
| 21 | Cập nhật trạng thái sáng kiến | Frontend gọi API `PUT /admin/initiatives/:id` với status, pilot_date, go_live_date. Backend validate workflow (In research → Implementation → Pilot → Go-live), update bảng initiatives, trả về success. Frontend cập nhật trạng thái trong UI | Validation theo workflow |
| 22 | Upload tài liệu cho sáng kiến | Frontend gọi API `POST /admin/initiatives/:id/documents` với multipart form data. Backend validate file type, size, upload lên S3/cloud storage, insert vào bảng documents, trả về document data. Frontend hiển thị file đã upload | Hỗ trợ nhiều định dạng file |
| 23 | Xóa tài liệu sáng kiến | Frontend gọi API `DELETE /admin/documents/:id` với document_id. Backend kiểm tra quyền, delete file từ storage, delete từ bảng documents, trả về success. Frontend xóa file khỏi danh sách | Chỉ có thể xóa tài liệu của sáng kiến mình |
| 24 | Trả lời câu hỏi Q&A | Frontend gọi API `PUT /qna/:id/answer` với qna_id và answer content. Backend kiểm tra quyền IO, update bảng qna_items với answer và status='answered', trả về updated Q&A. Frontend cập nhật trạng thái câu hỏi thành 'answered' | Chỉ có thể trả lời câu hỏi của sáng kiến mình |
| 25 | Cấu hình dashboard sáng kiến | Frontend gọi API `PUT /admin/initiatives/:id/dashboard` với dashboard config. Backend kiểm tra quyền, update bảng dashboard_configs, trả về success. Frontend hiển thị form cấu hình dashboard URL, widgets | Chỉ có thể cấu hình dashboard của sáng kiến mình |

### 8.4. Ban Lãnh đạo Khối (Division Leadership)

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1-18 | Tất cả hành động của Team Member | Tương tự Team Member | Bao gồm tất cả quyền của Team Member |
| 26 | Xem dashboard tổng quan | Frontend gọi API `/dashboard/overview` với filter division_id. Backend kiểm tra quyền DivisionLeadership, query database với JOIN kpi_measurements WHERE division_id=user.division_id, trả về KPIs tổng hợp. Frontend render dashboard overview với charts và metrics | Chỉ hiển thị dữ liệu của division mình |
| 27 | Xem dashboard sáng kiến theo khối | Frontend gọi API `/dashboard/initiatives` với filter division_id. Backend query database với JOIN initiatives, kpi_measurements WHERE division_id=user.division_id, trả về dashboard data. Frontend render dashboard initiatives với filter theo division | Chỉ hiển thị sáng kiến thuộc division mình |
| 28 | Xem thống kê hiệu suất | Frontend gọi API `/dashboard/performance` với filter division_id. Backend query database với JOIN kpi_measurements, divisions WHERE division_id=user.division_id, trả về performance metrics. Frontend render performance charts và metrics | Dữ liệu từ kpi_measurements theo division_id |
| 29 | Xem báo cáo tiến độ | Frontend gọi API `/admin/reports/division` với division_id. Backend query database với JOIN initiatives, kpi_measurements, user_activities WHERE division_id=user.division_id, trả về comprehensive report. Frontend render báo cáo tổng hợp các dự án trong division | Tổng hợp từ nhiều sáng kiến |
| 30 | Xem danh sách nhân viên division | Frontend gọi API `/admin/users` với filter division_id. Backend query database với JOIN users, roles WHERE division_id=user.division_id, trả về user list. Frontend render danh sách user theo division | Chỉ hiển thị user thuộc division mình |

### 8.5. Ban Lãnh đạo Cấp cao (Top Leadership)

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1-18 | Tất cả hành động của Team Member | Tương tự Team Member | Bao gồm tất cả quyền của Team Member |
| 26-30 | Tất cả hành động của Division Leadership | Tương tự Division Leadership | Bao gồm tất cả quyền của Division Leadership |
| 31 | Xem dashboard tổng quan toàn hệ thống | Frontend gọi API `/dashboard/overview` không có filter. Backend kiểm tra quyền TopLeadership, query database với JOIN kpi_measurements, initiatives, divisions, trả về dữ liệu toàn bộ. Frontend render dashboard overview với dữ liệu toàn bộ | Không có filter division |
| 32 | Xem dashboard chiến lược | Frontend gọi API `/dashboard/strategic` với strategic metrics. Backend query database với JOIN kpi_measurements, initiatives, user_activities, tính toán ROI, rủi ro, cột mốc, trả về strategic data. Frontend render strategic dashboard với ROI charts, risk indicators | Dữ liệu tổng hợp từ tất cả divisions |
| 33 | Xem dashboard hiệu suất toàn hệ thống | Frontend gọi API `/dashboard/performance` không có filter. Backend query database với JOIN kpi_measurements, divisions, tính toán metrics tổng hợp, trả về performance data. Frontend render performance dashboard với metrics tổng hợp và so sánh divisions | So sánh giữa các divisions |
| 34 | Xem dashboard phân tích | Frontend gọi API `/dashboard/analytics` với advanced analytics. Backend query database với JOIN kpi_measurements, user_activities, tính toán trends, predictions, trả về analytics data. Frontend render analytics dashboard với trends, predictions, custom reports | Advanced analytics và reporting |
| 35 | Xem báo cáo tổng hợp | Frontend gọi API `/admin/reports/comprehensive` với export format. Backend query database với JOIN tất cả bảng liên quan, generate comprehensive report, trả về PDF/Excel file. Frontend download và hiển thị comprehensive reports | Export PDF/Excel |

### 8.6. Quản trị viên TO (TO Admin)

| STT | Hành động | Tương tác của hệ thống | Ghi chú |
| :--- | :--- | :--- | :--- |
| 1-35 | Tất cả hành động của các role khác | Tương tự các role tương ứng | Có tất cả quyền của mọi role |
| 36 | Truy cập CMS Admin | Frontend gọi API `/admin` để lấy admin dashboard data. Backend kiểm tra quyền TO_Admin, query database với JOIN tất cả bảng liên quan, trả về comprehensive admin data. Frontend render giao diện CMS đầy đủ với tất cả menu | Không có giới hạn quyền |
| 37 | Tạo sáng kiến mới | Frontend gọi API `POST /admin/initiatives` với form data. Backend validate input, insert vào bảng initiatives, assign IO qua user_initiative_roles, log activity, trả về created initiative. Frontend hiển thị form tạo sáng kiến với đầy đủ fields | Có thể assign IO, division |
| 38 | Chỉnh sửa bất kỳ sáng kiến nào | Frontend gọi API `PUT /admin/initiatives/:id` với initiative_id và form data. Backend kiểm tra quyền TO_Admin, update bảng initiatives, log activity, trả về updated initiative. Frontend hiển thị form edit với dữ liệu pre-filled | Không có giới hạn sáng kiến |
| 39 | Xóa sáng kiến | Frontend gọi API `DELETE /admin/initiatives/:id` với initiative_id. Backend kiểm tra quyền, soft delete hoặc hard delete từ database, cleanup related data, trả về success. Frontend xóa sáng kiến khỏi danh sách | Soft delete hoặc hard delete |
| 40 | Tạo chương trình thi đua mới | Frontend gọi API `POST /admin/missions` với form data. Backend validate input, insert vào bảng missions, log activity, trả về created mission. Frontend hiển thị form tạo chương trình thi đua | Có thể set start_date, end_date |
| 41 | Chỉnh sửa chương trình thi đua | Frontend gọi API `PUT /admin/missions/:id` với mission_id và form data. Backend kiểm tra quyền, update bảng missions, log activity, trả về updated mission. Frontend hiển thị form edit chương trình thi đua | Có thể update rules, criteria |
| 42 | Xóa chương trình thi đua | Frontend gọi API `DELETE /admin/missions/:id` với mission_id. Backend kiểm tra quyền, soft delete hoặc hard delete từ database, cleanup related data, trả về success. Frontend xóa chương trình thi đua khỏi danh sách | Soft delete hoặc hard delete |
| 43 | Tạo bài viết tin tức mới | Frontend gọi API `POST /admin/news` với form data và image upload. Backend validate input, upload image lên storage, insert vào bảng news_articles, log activity, trả về created news. Frontend hiển thị rich text editor với image upload | Có thể set featured, category |
| 44 | Chỉnh sửa bài viết tin tức | Frontend gọi API `PUT /admin/news/:id` với news_id và form data. Backend kiểm tra quyền, update bảng news_articles, log activity, trả về updated news. Frontend hiển thị form edit với preview | Có thể update content, image |
| 45 | Xóa bài viết tin tức | Frontend gọi API `DELETE /admin/news/:id` với news_id. Backend kiểm tra quyền, soft delete hoặc hard delete từ database, cleanup related data, trả về success. Frontend xóa bài viết khỏi danh sách | Soft delete hoặc hard delete |
| 46 | Tạo bài đăng vinh danh mới | Frontend gọi API `POST /admin/recognition` với form data và honorees. Backend validate input, insert vào bảng recognition_posts và honorees, log activity, trả về created post. Frontend hiển thị form với multiple honorees | Có thể upload image, set type |
| 47 | Chỉnh sửa bài đăng vinh danh | Frontend gọi API `PUT /admin/recognition/:id` với post_id và form data. Backend kiểm tra quyền, update bảng recognition_posts và honorees, log activity, trả về updated post. Frontend hiển thị form edit bài vinh danh | Có thể update honorees |
| 48 | Xóa bài đăng vinh danh | Frontend gọi API `DELETE /admin/recognition/:id` với post_id. Backend kiểm tra quyền, soft delete hoặc hard delete từ database, cleanup related data, trả về success. Frontend xóa bài đăng khỏi danh sách | Soft delete hoặc hard delete |
| 49 | Quản lý bình luận | Frontend gọi API `/admin/comments/all` để lấy tất cả comments. Backend query database với JOIN users, recognition_posts, trả về comment list. Frontend hiển thị danh sách tất cả bình luận với actions approve, reject, delete | Có thể approve, reject, delete |
| 50 | Quản lý câu hỏi Q&A | Frontend gọi API `/admin/qna/questions` để lấy tất cả questions. Backend query database với JOIN users, initiatives, missions, trả về Q&A list. Frontend hiển thị danh sách tất cả câu hỏi với actions assign answerer, close questions | Có thể assign answerer, close questions |
| 51 | Quản lý người dùng | Frontend gọi API `/admin/users/list` để lấy tất cả users. Backend query database với JOIN users, roles, divisions, trả về user list. Frontend hiển thị danh sách tất cả user với actions assign roles, permissions | Có thể assign roles, permissions |
| 52 | Cấu hình dashboard | Frontend gọi API `PUT /admin/dashboard/config` với config data. Backend kiểm tra quyền, update bảng dashboard_configs, trả về success. Frontend hiển thị form cấu hình dashboard settings | Có thể set URLs, permissions, widgets |
| 53 | Quản lý KPIs | Frontend gọi API `/admin/dashboard/kpis` để lấy KPIs, gọi CRUD APIs để manage KPIs. Backend query database với JOIN kpis, kpi_categories, trả về KPI list. Frontend hiển thị form CRUD cho KPIs | Có thể create, edit, delete KPIs |
| 54 | Xem thống kê hệ thống | Frontend gọi API `/admin/analytics` để lấy system statistics. Backend query database với JOIN user_activities, initiatives, news_articles, recognition_posts, tính toán usage metrics, trả về analytics data. Frontend hiển thị analytics về usage, engagement | User activity, popular content |
| 55 | Quản lý danh mục | Frontend gọi API `/admin/categories` để lấy categories, gọi CRUD APIs để manage categories. Backend query database với JOIN categories, trả về category list. Frontend hiển thị form CRUD cho categories | News categories, Q&A categories |
| 56 | Backup và restore | Frontend gọi API `/admin/maintenance/backup` để trigger backup. Backend execute database backup script, generate backup file, trả về backup status. Frontend hiển thị backup progress và download link | Maintenance operations |

---

## 9. Yêu cầu Phi chức năng

### 8.1. Bảo mật

- **Đăng nhập một lần (SSO):** Tích hợp với Active Directory/LDAP của VietinBank.
- **Phân quyền (RBAC):** Backend sẽ kiểm tra vai trò và quyền hạn chi tiết của người dùng trước khi cho phép truy cập các API.

### 8.2. Hiệu năng

- Thời gian phản hồi của API cho các yêu cầu GET không được vượt quá 500ms.

### 8.3. Tính khả dụng

- Giao diện đáp ứng (responsive), hoạt động tốt trên các trình duyệt Chrome, Firefox, Safari phiên bản mới nhất.

---

## 9. Lộ trình Phát triển (Roadmap)

### 9.1. Giai đoạn 1 - MVP (3 tháng): Nền tảng Web

**Mục tiêu:** Ra mắt phiên bản web đầu tiên với các chức năng cốt lõi.

**Hạng mục chính:**

- Thiết lập hạ tầng Backend và Frontend.
- Hoàn thành tích hợp SSO và hệ thống phân quyền cơ bản.
- Xây dựng chức năng CMS cho Sáng kiến và Tin tức (dành cho TO_Admin).
- Hiển thị trang danh sách và trang chi tiết (read-only) cho Sáng kiến, Tin tức.
- Nhúng dashboard có sẵn bằng iframe.

### 9.2. Giai đoạn 2 (3 tháng tiếp theo): Hoàn thiện Web và Tương tác

**Mục tiêu:** Mở rộng nội dung và tăng cường sự tương tác của người dùng.

**Hạng mục chính:**

- Xây dựng chức năng CMS cho Vinh danh và Chương trình Thi đua.
- Hoàn thiện các tính năng tương tác: Like, Comment, Q&A.
- Hoàn thiện hệ thống phân quyền chi tiết cho IO và Lãnh đạo.

### 9.3. Giai đoạn 3 (3 tháng tiếp theo): Dashboard và Phân tích

**Mục tiêu:** Cung cấp khả năng phân tích dữ liệu ngay trên nền tảng.

**Hạng mục chính:**

- Xây dựng backend API để cung cấp dữ liệu KPI cho dashboard.
- Xây dựng các dashboard gốc bằng Recharts trên frontend.

### 9.4. Giai đoạn 4 (Tương lai): Mở rộng sang Ứng dụng Di động

**Mục tiêu:** Cung cấp trải nghiệm gốc (native) trên iOS và Android.

**Hạng mục chính:**

- Thiết lập dự án Mobile: Khởi tạo dự án React Native.
- Xây dựng Giao diện Mobile: Phát triển lại các thành phần giao diện, tái sử dụng toàn bộ tầng logic.
- Tích hợp Tính năng Native: Thông báo đẩy, Đăng nhập sinh trắc học.
- Phát hành: Đóng gói và phát hành ứng dụng lên App Store và Google Play Store.

---

## 10. Chỉ số đo lường thành công

- **Mức độ tương tác:** Số lượt xem trang, thời gian trung bình trên trang, số lượt thích/bình luận.
- **Mức độ chấp nhận:** Tỷ lệ nhân viên truy cập cổng thông tin hàng tuần/tháng (User Adoption Rate).
- **Hiệu quả:** Số lượng câu hỏi được giải đáp qua Q&A, giảm số lượng email/request hỗ trợ.
- **Sự hài lòng:** Điểm CSAT (Customer Satisfaction Score)