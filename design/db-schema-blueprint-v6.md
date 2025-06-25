# Database Schema Blueprint (v6 - Toàn diện)

Tài liệu này mô tả chi tiết cấu trúc của tất cả các bảng trong cơ sở dữ liệu PostgreSQL. Đây là phiên bản tổng hợp, đầy đủ nhất, kết hợp tất cả các cải tiến đã được thống nhất, đặc biệt là khả năng định danh và vinh danh các tập thể.

## Phần 1: Các Bảng "Thực thể" Cốt lõi

### roles
Quản lý tập trung các vai trò và quyền hạn trong hệ thống.

| Cột         | Kiểu dữ liệu  | Ràng buộc/Mặc định | Giải thích                                                      |
|:-----------|:--------------|:-------------------|:----------------------------------------------------------------|
| id         | SERIAL        | PRIMARY KEY        | ID định danh của vai trò.                                       |
| name       | VARCHAR(50)   | UNIQUE, NOT NULL   | Tên vai trò (ví dụ: 'Leadership', 'TO_Admin', 'Employee').      |

#### role_permissions
Lưu trữ từng quyền hạn riêng biệt cho mỗi vai trò (thay cho JSONB permissions).

| Cột        | Kiểu dữ liệu | Ràng buộc/Mặc định         | Giải thích                                 |
|:-----------|:-------------|:---------------------------|:-------------------------------------------|
| id         | SERIAL       | PRIMARY KEY                | ID định danh của quyền hạn.                |
| role_id    | INTEGER      | REFERENCES roles(id)       | Liên kết tới vai trò.                      |
| permission | VARCHAR(100) | NOT NULL                   | Tên quyền hạn (ví dụ: 'edit_user').        |
| value      | TEXT         |                            | Giá trị hoặc chi tiết quyền hạn (nếu có).  |

### users
Lưu trữ thông tin cho mọi người dùng trong hệ thống.

| Cột         | Kiểu dữ liệu   | Ràng buộc/Mặc định | Giải thích                                                      |
|:-----------|:---------------|:-------------------|:----------------------------------------------------------------|
| id         | SERIAL         | PRIMARY KEY        | ID định danh duy nhất của người dùng.                           |
| employee_id| VARCHAR(50)    | UNIQUE, NOT NULL   | Mã nhân viên, dùng để liên kết với hệ thống SSO.                |
| full_name  | VARCHAR(255)   | NOT NULL           | Họ và tên đầy đủ của người dùng.                                |
| email      | VARCHAR(255)   | UNIQUE, NOT NULL   | Email của người dùng, dùng cho đăng nhập và thông báo.          |
| avatar_url | TEXT           |                   | URL ảnh đại diện của người dùng.                                |
| role_id    | INTEGER        | REFERENCES roles(id)| Liên kết tới vai trò của người dùng trong bảng roles.           |

### divisions
Đại diện cho các đơn vị trong tổ chức như Khối, Trung tâm, Chi nhánh (Branch).

| Cột               | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                                                      |
|:------------------|:---------------|:------------------------|:----------------------------------------------------------------|
| id                | SERIAL         | PRIMARY KEY             | ID định danh duy nhất của đơn vị.                               |
| name              | VARCHAR(255)   | NOT NULL                | Tên của đơn vị (ví dụ: "Khối Bán lẻ").                        |
| avatar_url        | TEXT           |                        | URL logo hoặc icon của đơn vị.                                  |
| parent_division_id| INTEGER        | REFERENCES divisions(id)| Khóa tự tham chiếu để tạo cấu trúc phân cấp (cha-con).          |

### statuses
Bảng quản lý tập trung tất cả các trạng thái có thể có của một sáng kiến hoặc chương trình.

| Cột        | Kiểu dữ liệu | Ràng buộc/Mặc định | Giải thích                                                      |
|:-----------|:-------------|:-------------------|:----------------------------------------------------------------|
| id         | SERIAL       | PRIMARY KEY        | ID định danh duy nhất của trạng thái.                           |
| name       | VARCHAR(50)  | UNIQUE, NOT NULL   | Tên trạng thái (ví dụ: 'Nghiên cứu', 'Đang diễn ra').           |
| description| TEXT         |                    | Mô tả ý nghĩa của trạng thái này.                               |
| color_code | VARCHAR(7)   |                    | Mã màu HEX (ví dụ: '#4A90E2') để hiển thị trên UI.              |

### missions
Lưu trữ các chương trình/nhiệm vụ chiến lược, được trang bị đầy đủ tính năng.

| Cột           | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                                                      |
|:--------------|:---------------|:------------------------|:----------------------------------------------------------------|
| id            | SERIAL         | PRIMARY KEY             | ID định danh duy nhất của chương trình.                         |
| title         | VARCHAR(255)   | NOT NULL                | Tên chính thức của chương trình.                                |
| summary       | TEXT           |                         | Mô tả ngắn gọn về mục tiêu.                                     |
| full_description| TEXT         |                         | Mô tả chi tiết về thể lệ, cách tính điểm, giải thưởng...        |
| image_url     | TEXT           |                         | URL ảnh bìa hoặc banner của chương trình.                       |
| status_id     | INTEGER        | REFERENCES statuses(id)  | Liên kết tới trạng thái hiện tại.                               |
| deadline      | DATE           |                         | Ngày kết thúc dự kiến của chương trình.                         |
| created_at    | TIMESTAMPTZ    | DEFAULT now()           | Dấu thời gian khi chương trình được tạo.                        |
| updated_at    | TIMESTAMPTZ    | DEFAULT now()           | Dấu thời gian khi có cập nhật.                                  |

### initiatives
Bảng trung tâm của ứng dụng, lưu trữ chi tiết các dự án/sáng kiến.

| Cột               | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                                                      |
|:------------------|:---------------|:------------------------|:----------------------------------------------------------------|
| id                | SERIAL         | PRIMARY KEY             | ID định danh duy nhất của sáng kiến.                            |
| title             | VARCHAR(255)   | NOT NULL                | Tên của sáng kiến.                                              |
| summary           | TEXT           |                         | Mô tả ngắn gọn.                                                 |
| full_description  | TEXT           |                         | Mô tả chi tiết, có thể hỗ trợ Markdown.                         |
| avatar_url        | TEXT           |                         | URL icon/logo của bản thân sáng kiến.                           |
| team_avatar_url   | TEXT           |                         | URL logo của đội dự án thuộc sáng kiến này.                     |
| video_url         | TEXT           |                         | URL video giới thiệu sáng kiến.                                 |
| mission_id        | INTEGER        | REFERENCES missions(id)  | Liên kết (tùy chọn) tới chương trình missions cha.              |
| current_status_id | INTEGER        | REFERENCES statuses(id)  | Liên kết tới trạng thái hiện tại trong bảng statuses.           |
| dashboard_iframe_url| TEXT         |                         | URL để nhúng iframe dashboard (PowerBI, Tableau...).             |
| group_link        | TEXT           |                         | URL tới nhóm Zalo/Workplace/Teams.                              |
| created_at        | TIMESTAMPTZ    | DEFAULT now()           | Thời gian tạo.                                                  |
| updated_at        | TIMESTAMPTZ    | DEFAULT now()           | Thời gian cập nhật cuối cùng.                                   |

### categories
Quản lý các danh mục cho tin tức.

| Cột   | Kiểu dữ liệu   | Ràng buộc/Mặc định | Giải thích                              |
|:------|:---------------|:-------------------|:----------------------------------------|
| id    | SERIAL         | PRIMARY KEY        | ID định danh danh mục.                  |
| name  | VARCHAR(100)   | UNIQUE, NOT NULL   | Tên danh mục (ví dụ: 'Công nghệ').      |

### news_articles
Lưu trữ các bài viết tin tức, sự kiện, thông báo.

| Cột         | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                              |
|:------------|:---------------|:------------------------|:----------------------------------------|
| id          | SERIAL         | PRIMARY KEY             | ID định danh bài viết.                  |
| title       | VARCHAR(255)   | NOT NULL                | Tiêu đề bài viết.                       |
| summary     | TEXT           |                         | Tóm tắt ngắn.                           |
| content     | TEXT           | NOT NULL                | Nội dung chi tiết, hỗ trợ Markdown/HTML.|
| image_url   | TEXT           |                         | URL ảnh bìa của bài viết.               |
| author_id   | INTEGER        | REFERENCES users(id)     | Người viết bài.                         |
| category_id | INTEGER        | REFERENCES categories(id)| Bài viết thuộc danh mục nào.            |
| is_featured | BOOLEAN        | DEFAULT false           | Đánh dấu tin nổi bật.                   |
| published_at| TIMESTAMPTZ    | DEFAULT now()           | Thời gian xuất bản.                     |

### recognition_posts
Lưu trữ nội dung các bài đăng vinh danh.

| Cột       | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                              |
|:----------|:---------------|:------------------------|:----------------------------------------|
| id        | SERIAL         | PRIMARY KEY             | ID định danh bài đăng.                  |
| poster_id | INTEGER        | REFERENCES users(id)     | Người đăng bài.                         |
| content   | TEXT           | NOT NULL                | Nội dung bài đăng vinh danh.            |
| created_at| TIMESTAMPTZ    | DEFAULT now()           | Thời gian đăng.                         |

## Phần 2: Các Bảng "Join" (Kết nối)

### initiative_divisions
Kết nối một sáng kiến với nhiều đơn vị tham gia.

| Cột          | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:-------------|:-------------|:----------------------------------|:---------------------------|
| initiative_id| INTEGER      | PRIMARY KEY, REFERENCES initiatives(id) | Liên kết tới sáng kiến.    |
| division_id  | INTEGER      | PRIMARY KEY, REFERENCES divisions(id)   | Liên kết tới đơn vị.       |

### initiative_members
Kết nối người dùng với các sáng kiến và xác định vai trò của họ.

| Cột          | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:-------------|:-------------|:----------------------------------|:---------------------------|
| initiative_id| INTEGER      | PRIMARY KEY, REFERENCES initiatives(id) | Liên kết tới sáng kiến.    |
| user_id      | INTEGER      | PRIMARY KEY, REFERENCES users(id)       | Liên kết tới người dùng.   |
| role         | VARCHAR(100) | PRIMARY KEY, NOT NULL, CHECK(...)       | Vai trò trong sáng kiến.   |

### mission_honorees
Vinh danh các đơn vị có thành tích xuất sắc trong một chương trình thi đua.

| Cột        | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:-----------|:-------------|:----------------------------------|:---------------------------|
| mission_id | INTEGER      | PRIMARY KEY, REFERENCES missions(id)    | Chương trình thi đua.      |
| division_id| INTEGER      | PRIMARY KEY, REFERENCES divisions(id)   | Đơn vị được vinh danh.     |
| description| TEXT         |                                    | Ghi chú lý do vinh danh.   |

#### mission_honored_initiatives
Ghi nhận các sáng kiến được vinh danh trong các chương trình (missions).

| Cột           | Kiểu dữ liệu | Ràng buộc/Mặc định                        | Giải thích                                 |
|:--------------|:-------------|:------------------------------------------|:-------------------------------------------|
| mission_id    | INTEGER      | PRIMARY KEY, REFERENCES missions(id)       | Chương trình vinh danh sáng kiến           |
| initiative_id | INTEGER      | PRIMARY KEY, REFERENCES initiatives(id)    | Sáng kiến được vinh danh                   |
| description   | TEXT         |                                           | Lý do hoặc ghi chú về vinh danh            |
| honored_at    | TIMESTAMPTZ  | DEFAULT now()                             | Thời điểm vinh danh                        |

### honorees
Kết nối các đối tượng tập thể được vinh danh với một bài đăng.

| Cột        | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:-----------|:-------------|:----------------------------------|:---------------------------|
| post_id    | INTEGER      | PRIMARY KEY, REFERENCES recognition_posts(id) | Bài đăng vinh danh.        |
| honoree_id | INTEGER      | PRIMARY KEY                       | ID của đối tượng được vinh danh. |
| honoree_type| VARCHAR(50) | PRIMARY KEY, NOT NULL             | Loại đối tượng: 'division' hoặc 'initiative'. |

### likes
Lưu trữ lượt thích của người dùng cho các bài đăng vinh danh.

| Cột     | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:--------|:-------------|:----------------------------------|:---------------------------|
| post_id | INTEGER      | PRIMARY KEY, REFERENCES recognition_posts(id) | Bài đăng được thích.       |
| user_id | INTEGER      | PRIMARY KEY, REFERENCES users(id)           | Người đã thích bài đăng.   |

## Phần 3: Các Bảng "Log" và "Nội dung"

### initiative_status_history
Lưu lại lịch sử thay đổi trạng thái của một sáng kiến.

| Cột           | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:--------------|:-------------|:----------------------------------|:---------------------------|
| id            | SERIAL       | PRIMARY KEY                       | ID của bản ghi lịch sử.     |
| initiative_id | INTEGER      | NOT NULL, REFERENCES initiatives(id) | Sáng kiến đã thay đổi trạng thái. |
| status_id     | INTEGER      | NOT NULL, REFERENCES statuses(id)     | Trạng thái mới.            |
| start_date    | TIMESTAMPTZ  | NOT NULL, DEFAULT now()            | Thời điểm trạng thái này bắt đầu. |
| notes         | TEXT         |                                    | Ghi chú về việc thay đổi trạng thái. |

### initiative_kpis
Lưu trữ thông tin KPI cho các sáng kiến (không còn trường kpi_data dạng JSONB).

| Cột           | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:--------------|:-------------|:----------------------------------|:---------------------------|
| id            | SERIAL       | PRIMARY KEY                       | ID của bản ghi KPI.         |
| initiative_id | INTEGER      | REFERENCES initiatives(id)         | Sáng kiến sở hữu KPI này.   |
| kpi_name      | VARCHAR(255) | NOT NULL                          | Tên của KPI.                |

#### initiative_kpi_data
Lưu trữ dữ liệu chuỗi thời gian cho từng KPI (thay cho JSONB kpi_data).

| Cột           | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:--------------|:-------------|:----------------------------------|:---------------------------|
| id            | SERIAL       | PRIMARY KEY                       | ID của bản ghi dữ liệu KPI. |
| kpi_id        | INTEGER      | REFERENCES initiative_kpis(id)     | Liên kết tới KPI.           |
| date          | DATE         | NOT NULL                          | Ngày của giá trị KPI.       |
| value         | NUMERIC      | NOT NULL                          | Giá trị KPI tại ngày đó.    |

### comments
Lưu trữ các bình luận cho bài đăng vinh danh, hỗ trợ bình luận lồng nhau.

| Cột             | Kiểu dữ liệu | Ràng buộc/Mặc định                | Giải thích                  |
|:----------------|:-------------|:----------------------------------|:---------------------------|
| id              | SERIAL       | PRIMARY KEY                       | ID bình luận.              |
| post_id         | INTEGER      | NOT NULL, REFERENCES recognition_posts(id)| Bài đăng được bình luận.  |
| user_id         | INTEGER      | NOT NULL, REFERENCES users(id)    | Người bình luận.           |
| content         | TEXT         | NOT NULL                          | Nội dung bình luận.        |
| parent_comment_id| INTEGER     | REFERENCES comments(id)           | Dùng để trả lời một bình luận khác. |
| created_at      | TIMESTAMPTZ  | DEFAULT now()                     | Thời gian bình luận.       |

### documents
Bảng đa hình linh hoạt, cho phép đính kèm tài liệu vào bất cứ đâu.

| Cột        | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                              |
|:-----------|:---------------|:------------------------|:----------------------------------------|
| id         | SERIAL         | PRIMARY KEY             | ID tài liệu.                            |
| name       | VARCHAR(255)   | NOT NULL                | Tên hiển thị của file.                  |
| url        | TEXT           | NOT NULL                | Đường dẫn tới file.                     |
| file_type  | VARCHAR(50)    |                         | Loại file (pdf, docx, ...).             |
| parent_id  | INTEGER        | NOT NULL                | ID của đối tượng chứa tài liệu này.      |
| parent_type| VARCHAR(50)    | NOT NULL                | Loại đối tượng ('initiative', ...).      |
| uploader_id| INTEGER        | REFERENCES users(id)     | Người tải lên.                          |
| created_at | TIMESTAMPTZ    | DEFAULT now()           | Thời gian tải lên.                      |

### qa_items
Bảng đa hình để lưu các cặp câu hỏi-trả lời, có thể gắn vào Sáng kiến hoặc Chương trình.

| Cột        | Kiểu dữ liệu   | Ràng buộc/Mặc định      | Giải thích                              |
|:-----------|:---------------|:------------------------|:----------------------------------------|
| id         | SERIAL         | PRIMARY KEY             | ID câu hỏi.                             |
| question   | TEXT           | NOT NULL                | Nội dung câu hỏi.                       |
| answer     | TEXT           |                         | Nội dung câu trả lời.                   |
| parent_id  | INTEGER        | NOT NULL                | ID của đối tượng chứa câu hỏi này.       |
| parent_type| VARCHAR(50)    | NOT NULL                | Loại đối tượng ('initiative', ...).      |
| asker_id   | INTEGER        | REFERENCES users(id)     | Người hỏi.                              |
| answerer_id| INTEGER        | REFERENCES users(id)     | Người trả lời.                          |
| created_at | TIMESTAMPTZ    | DEFAULT now()           | Thời gian hỏi.                          |