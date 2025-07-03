# CMS UI to Database Schema Mapping Guide

This document provides a mapping between the CMS UI fields/components and the corresponding database schema fields, including notes on relationships and data handling. Use this as a reference when designing, developing, or maintaining the CMS.


---

## Initiative Management Page — UI to Database Mapping

| UI Field/Component      | DB Table/Column(s)                | Notes/Relationship                                 |
|------------------------ |-----------------------------------|----------------------------------------------------|
| Title                   | initiatives.title                  |                                                    |
| Summary                 | initiatives.summary                |                                                    |
| Full Description        | initiatives.full_description       |                                                    |
| Avatar/Icon             | initiatives.avatar_url             | Image upload                                       |
| Team Logo               | initiatives.team_avatar_url        | Image upload                                       |
| Video URL(s)            | initiatives.video_url (or related) | Support multiple, dynamic list                     |
| Dashboard Iframe URL    | initiatives.dashboard_iframe_url   |                                                    |
| Group Link              | initiatives.group_link             |                                                    |
| Parent Mission          | initiatives.mission_id             | Dropdown, links to missions                        |
| Current Status          | initiatives.current_status_id      | Dropdown, links to statuses                        |
| Divisions Involved      | initiative_divisions               | Multi-select, links to divisions                   |
| Team Members (+role)    | initiative_members                 | Multi-select, links to users, assign role          |
| KPIs                    | initiative_kpis                    | Dynamic list                                       |
| File Attachments        | initiative_files (if exists)       | File upload                                        |
| Draft/Published         | initiatives.published (if exists)  | Toggle                                             |
| Schedule Publication    | initiatives.published_at (if exists)| Date picker                                       |
| Admin Notes             | initiatives.admin_notes (if exists)| Internal only                                      |
| Created At              | initiatives.created_at             | Read-only                                          |
| Updated At              | initiatives.updated_at             | Read-only                                          |

### Q&A Section (Separate Page or Section)

| UI Field/Component      | DB Table/Column(s)                | Notes/Relationship                                 |
|------------------------ |-----------------------------------|----------------------------------------------------|
| Q&A List (Dynamic)      | initiative_qna (if exists)         | Each entry: question, answer, links to initiative  |
| Question                | initiative_qna.question            | Text input                                         |
| Answer                  | initiative_qna.answer              | Textarea or rich text                              |
| Add/Remove Q&A Pair     | initiative_qna                     | Dynamic list, links to initiative                  |

--- 
## Missions Management Page — UI to Database Mapping

| UI Field/Component      | DB Table/Column(s)                | Notes/Relationship                                 |
|------------------------ |-----------------------------------|----------------------------------------------------|
| Title                   | missions.title                     |                                                    |
| Summary                 | missions.summary                   |                                                    |
| Full Description        | missions.full_description          |                                                    |
| Image/Banner            | missions.image_url                 | Image upload                                       |
| Status                  | missions.status_id                 | Dropdown, links to statuses                        |
| Deadline                | missions.deadline                  | Date picker                                        |
| Honored Divisions       | mission_honorees                   | Multi-select, links to divisions                   |
| Honored Initiatives     | mission_honored_initiatives        | Multi-select, links to initiatives                 |
| KPIs                    | mission_kpis (if exists)           | Dynamic list                                       |
| Status History          | mission_status_history (if exists) | Read-only, for edit/view                           |
| File Attachments        | mission_files (if exists)          | File upload                                        |
| Draft/Published         | missions.published (if exists)     | Toggle                                             |
| Schedule Publication    | missions.published_at (if exists)  | Date picker                                        |
| Admin Notes             | missions.admin_notes (if exists)   | Internal only                                      |
| Created At              | missions.created_at                | Read-only                                          |
| Updated At              | missions.updated_at                | Read-only                                          |

---

## News Article Management Page — UI to Database Mapping

| UI Field/Component      | DB Table/Column(s)                | Notes/Relationship                                 |
|------------------------ |-----------------------------------|----------------------------------------------------|
| Title                   | news_articles.title                |                                                    |
| Summary                 | news_articles.summary              |                                                    |
| Content (Rich Text)     | news_articles.content              | Supports Markdown/HTML                             |
| Image                   | news_articles.image_url            | Image upload                                       |
| Author                  | news_articles.author_id            | Dropdown, links to users                           |
| Category                | news_articles.category_id          | Dropdown, links to categories                      |
| Featured                | news_articles.is_featured          | Toggle                                             |
| Publication Date        | news_articles.published_at         | Date picker                                        |
| File Attachments        | news_article_files (if exists)     | File upload                                        |
| Draft/Published         | news_articles.published (if exists)| Toggle                                             |
| Schedule Publication    | news_articles.scheduled_at (if exists)| Date picker                                    |
| Admin Notes             | news_articles.admin_notes (if exists)| Internal only                                   |
| Created At              | news_articles.created_at           | Read-only                                          |
| Updated At              | news_articles.updated_at           | Read-only                                          |

---

## How to Use This Table
- **UI Field/Component:** The label or function as seen in the CMS interface.
- **DB Table/Column(s):** The exact table and column in the database where the data is stored or referenced.
- **Notes/Relationship:** Special notes, such as if the field is a dropdown, multi-select, file upload, or has a relationship to another table.

This mapping ensures that your CMS is fully aligned with your backend data model, making it easier to maintain data integrity and extend functionality in the future. 