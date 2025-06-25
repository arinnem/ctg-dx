```mermaid
---
config:
  layout: elk
---
flowchart TD
 subgraph subGraph0["Tầng Giao diện (UI Layer)"]
        FE_UI@{ label: "<font size=\"3\">📄<br>Pages &amp; Components</font><br><i>Hiển thị giao diện, bắt sự kiện</i>" }
  end
 subgraph subGraph1["Tầng Logic (Logic Layer)"]
        FE_LOGIC@{ label: "<font size=\"3\">⚙️<br>Hooks &amp; Services</font><br><i>Xử lý trạng thái, gọi API</i>" }
  end
 subgraph subGraph2["<b>Frontend</b> (Browser)"]
    direction TB
        subGraph0
        subGraph1
  end
 subgraph subGraph3["Lớp Xử lý nghiệp vụ"]
        BE_CTRL@{ label: "<font size=\"3\">🎮<br>Controllers</font><br><i>Xác thực input</i>" }
        BE_SVC@{ label: "<font size=\"3\">🧠<br>Services</font><br><i>Thực thi logic nghiệp vụ,<br>tổng hợp dữ liệu</i>" }
        BE_DAL@{ label: "<font size=\"3\">📚<br>DAL</font><br><i>DB interface</i>" }
  end
 subgraph s1["<b>Backend</b>"]
    direction TB
        BE_API@{ label: "<font size=\"3\">🚪<br>API Gateway / Router</font><br><i>Tiếp nhận, điều hướng request</i>" }
        subGraph3
  end
 subgraph subGraph5["Storage & Auth"]
        DB@{ label: "<font size=\"4\">🗃️<br>Database</font><br>PostgreSQL" }
        EXT_SSO@{ label: "<font size=\"3\">🏢<br>Hệ thống SSO</font>" }
  end
    FE_UI -- "1\. Tương tác người dùng" --> FE_LOGIC
    BE_API -- "3\. Route đến" --> BE_CTRL
    BE_CTRL -- "4\. Gọi" --> BE_SVC
    BE_SVC -- "5\. Sử dụng" --> BE_DAL
    FE_LOGIC -- "2\. Gửi yêu cầu API" --> BE_API
    BE_DAL -- "6\. Truy vấn SQL" --> DB
    DB -- "7\. Trả dữ liệu" --> BE_DAL
    BE_DAL -- "8\. Trả dữ liệu" --> BE_SVC
    BE_SVC -- "9\. Trả dữ liệu" --> BE_CTRL
    BE_CTRL -- "10\. Trả phản hồi JSON" --> BE_API
    BE_API -- "11\. Trả dữ liệu" --> FE_LOGIC
    FE_LOGIC -- "12\. Cập nhật giao diện" --> FE_UI
    FE_UI -- "13\. Hiển thị cho" --> U@{ label: "<font size=\"4\">👤<br>Người dùng</font>" }
    U@{ label: "<font size=\"4\">👤<br>Người dùng</font>" } -- "0\. Sign in request" --> FE_UI
    FE_LOGIC -- Redirect --> EXT_SSO
    EXT_SSO -- Callback với token --> BE_API
    U@{ shape: rect}
    FE_UI@{ shape: rounded}
    FE_LOGIC@{ shape: rounded}
    BE_API@{ shape: rounded}
    BE_CTRL@{ shape: rect}
    BE_SVC@{ shape: rect}
    BE_DAL@{ shape: rect}
    DB@{ shape: rounded}
    EXT_SSO@{ shape: rect}
     U:::frontend
     FE_UI:::frontend
     FE_LOGIC:::frontend
     BE_API:::backend
     BE_CTRL:::backend
     BE_SVC:::backend
     BE_DAL:::backend
     DB:::database
     EXT_SSO:::database
    classDef frontend fill:#e6f7ff,stroke:#91d5ff,stroke-width:2px
    classDef backend fill:#f6ffed,stroke:#b7eb8f,stroke-width:2px
    classDef database fill:#fff0f6,stroke:#ffadd2,stroke-width:2px
