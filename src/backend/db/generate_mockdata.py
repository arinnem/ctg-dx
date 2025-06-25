import uuid
import random
import json
from faker import Faker

fake = Faker('vi_VN')
NUM_USERS = 20
NUM_MISSIONS = 20
NUM_INITIATIVES = 20
NUM_NEWS = 20
NUM_RECOGNITION = 20

# 1. Roles
roles = [
    {'id': 1, 'name': 'Người dùng thường'},
    {'id': 2, 'name': 'IO'},
    {'id': 3, 'name': 'TO'},
]

# 2. Statuses
initiative_statuses = [
    {'id': 1, 'name': 'Nghiên cứu', 'description': 'Giai đoạn nghiên cứu ý tưởng', 'color_code': '#3498db'},
    {'id': 2, 'name': 'Xây dựng', 'description': 'Giai đoạn xây dựng giải pháp', 'color_code': '#e67e22'},
    {'id': 3, 'name': 'Thí điểm', 'description': 'Giai đoạn thí điểm triển khai', 'color_code': '#f1c40f'},
    {'id': 4, 'name': 'Triển khai rộng', 'description': 'Giai đoạn triển khai rộng rãi', 'color_code': '#2ecc71'},
]
mission_statuses = [
    {'id': 5, 'name': 'Đang triển khai', 'description': 'Nhiệm vụ/Chương trình thi đua đang được triển khai', 'color_code': '#2980b9'},
    {'id': 6, 'name': 'Kết thúc', 'description': 'Nhiệm vụ/Chương trình thi đua đã kết thúc', 'color_code': '#7f8c8d'},
]
statuses = initiative_statuses + mission_statuses

# 3. Categories
categories = [
    {'id': 1, 'name': 'Công nghệ'},
    {'id': 2, 'name': 'Chương trình thi đua'},
    {'id': 3, 'name': 'Giao nhiệm vụ'},
    {'id': 4, 'name': 'Vinh danh'},
    {'id': 5, 'name': 'Tin tức'},
    {'id': 6, 'name': 'Triển khai sáng kiến'},
]

# 4. Divisions (20 real names)
division_names = [
    'Hội sở chính',
    'Chi nhánh TP.HCM',
    'Chi nhánh Hà Nội',
    'Chi nhánh Đà Nẵng',
    'Chi nhánh Hải Dương',
    'Chi nhánh Cần Thơ',
    'Chi nhánh Ngô Quyền',
    'Chi nhánh Hải Phòng',
    'Chi nhánh Cần Thơ',
    'Khối Công nghệ Thông tin',
    'Khối Khách hàng Doanh nghiệp',
    'Khối Bán lẻ',
    'Khối Quản lý Rủi ro',
    'Khối QLRR',
    'Khối CNTT',
    'Khối Nhân sự',
    'Chi nhánh Bình Dương',
    'Chi nhánh Đồng Nai',
    'Chi nhánh Quảng Ninh',
    'Chi nhánh Thanh Hóa',
]
divisions = [
    {
        'id': i+1,
        'name': division_names[i],
        'avatar_url': fake.image_url(),
        'parent_division_id': None if i == 0 else random.randint(1, i)
    }
    for i in range(len(division_names))
]

# 5. Users (random, but logical)
users = []
user_ids = []
for i in range(NUM_USERS):
    user_id = str(uuid.uuid4())
    user_ids.append(user_id)
    role_id = random.choice(roles)['id']
    users.append({
        'id': user_id,
        'employee_id': f'EMP{1000+i}',
        'full_name': fake.name(),
        'email': f"{fake.user_name()}@vietinbank.vn",
        'avatar_url': fake.image_url(),
        'role_id': role_id
    })

# 6. Missions (handwritten, logical Vietnamese)
mission_titles = [
    'Chuyển đổi số toàn diện ngân hàng',
    'Triển khai hệ thống AI thẩm định tín dụng',
    'Tự động hóa quy trình nội bộ với RPA',
    'Nâng cấp bảo mật thông tin',
    'Đào tạo nhân viên về công nghệ mới',
    'Phát triển ứng dụng ngân hàng số',
    'Tối ưu hóa trải nghiệm khách hàng',
    'Triển khai chương trình thi đua sáng kiến',
    'Mở rộng mạng lưới chi nhánh',
    'Ứng dụng Blockchain trong giao dịch',
    'Phát triển hệ thống Chatbot',
    'Tăng cường quản lý rủi ro',
    'Cải tiến quy trình giao dịch',
    'Đổi mới sản phẩm dịch vụ',
    'Nâng cao chất lượng đào tạo',
    'Tăng trưởng tín dụng bền vững',
    'Phát triển dịch vụ khách hàng ưu tiên',
    'Ứng dụng dữ liệu lớn (Big Data)',
    'Tối ưu hóa vận hành chi nhánh',
    'Phát triển hệ sinh thái số',
]
missions = []
for i in range(NUM_MISSIONS):
    status_id = random.choice([5, 6])
    missions.append({
        'id': i+1,
        'title': mission_titles[i % len(mission_titles)],
        'summary': f"{mission_titles[i % len(mission_titles)]} - {fake.sentence()}",
        'full_description': fake.text(),
        'image_url': fake.image_url(),
        'status_id': status_id,
        'deadline': fake.date_this_year().isoformat(),
        'created_at': fake.date_time_this_year().isoformat(),
        'updated_at': fake.date_time_this_year().isoformat()
    })

# 7. Initiatives (handwritten, logical Vietnamese)
initiative_titles = [
    'Triển khai eKYC toàn hệ thống',
    'Phát triển ứng dụng Mobile Banking mới',
    'Tích hợp AI vào chăm sóc khách hàng',
    'Tự động hóa phê duyệt khoản vay',
    'Ứng dụng RPA vào xử lý giao dịch',
    'Nâng cấp hệ thống bảo mật OTP',
    'Phát triển hệ thống báo cáo thông minh',
    'Tối ưu hóa quy trình mở tài khoản',
    'Xây dựng nền tảng đào tạo trực tuyến',
    'Ứng dụng Blockchain vào chuyển tiền',
    'Phát triển hệ thống quản lý rủi ro',
    'Tối ưu hóa vận hành chi nhánh',
    'Nâng cao trải nghiệm khách hàng số',
    'Phát triển sản phẩm tiết kiệm số',
    'Tăng cường bảo mật dữ liệu khách hàng',
    'Ứng dụng Big Data trong phân tích tín dụng',
    'Tối ưu hóa quy trình giao dịch ATM',
    'Phát triển hệ sinh thái dịch vụ số',
    'Triển khai chương trình thi đua sáng kiến',
    'Đổi mới quy trình quản trị nội bộ',
]
initiatives = []
for i in range(NUM_INITIATIVES):
    mission_id = random.choice(missions)['id']
    status_id = random.choice([1, 2, 3, 4])
    initiatives.append({
        'id': i+1,
        'title': initiative_titles[i % len(initiative_titles)],
        'summary': f"{initiative_titles[i % len(initiative_titles)]} - {fake.sentence()}",
        'full_description': fake.text(),
        'avatar_url': fake.image_url(),
        'team_avatar_url': fake.image_url(),
        'video_url': fake.url(),
        'mission_id': mission_id,
        'current_status_id': status_id,
        'dashboard_iframe_url': fake.url(),
        'group_link': fake.url(),
        'created_at': fake.date_time_this_year().isoformat(),
        'updated_at': fake.date_time_this_year().isoformat()
    })

# 8. News Articles (handwritten, logical Vietnamese)
news_titles = [
    'VietinBank ra mắt nền tảng ngân hàng số thế hệ mới',
    'Ứng dụng AI trong quy trình thẩm định tín dụng',
    'Tự động hóa quy trình nội bộ với RPA',
    'Chatbot thông minh hỗ trợ khách hàng 24/7',
    'Nâng cấp hệ thống bảo mật thông tin',
    'Chương trình đào tạo nhân viên về công nghệ mới',
    'Phát triển ứng dụng ngân hàng số',
    'Tối ưu hóa trải nghiệm khách hàng',
    'Triển khai chương trình thi đua sáng kiến',
    'Ứng dụng Blockchain trong giao dịch',
    'Phát triển hệ thống Chatbot',
    'Tăng cường quản lý rủi ro',
    'Cải tiến quy trình giao dịch',
    'Đổi mới sản phẩm dịch vụ',
    'Nâng cao chất lượng đào tạo',
    'Tăng trưởng tín dụng bền vững',
    'Phát triển dịch vụ khách hàng ưu tiên',
    'Ứng dụng dữ liệu lớn (Big Data)',
    'Tối ưu hóa vận hành chi nhánh',
    'Phát triển hệ sinh thái số',
]
news_articles = []
for i in range(NUM_NEWS):
    author_id = random.choice(user_ids)
    category_id = random.choice(categories)['id']
    news_articles.append({
        'id': i+1,
        'title': news_titles[i % len(news_titles)],
        'summary': f"{news_titles[i % len(news_titles)]} - {fake.sentence()}",
        'content': fake.text(),
        'image_url': fake.image_url(),
        'author_id': author_id,
        'category_id': category_id,
        'is_featured': fake.boolean(),
        'published_at': fake.date_time_this_year().isoformat()
    })

# 9. Recognition Posts (handwritten, logical Vietnamese)
recognition_contents = [
    '🎉 Vinh danh các Chi nhánh xuất sắc trong chương trình thi đua năm 2024!',
    '🌟 Ghi nhận các đội nhóm sáng kiến tích cực năm 2024!',
    '🏆 Ban Chuyển đổi số khen thưởng các phòng ban triển khai thành công nền tảng đào tạo trực tuyến.',
    '👏 Vinh danh cá nhân xuất sắc trong phát triển sản phẩm mới.',
    '🎊 Ghi nhận các sáng kiến đổi mới quy trình nội bộ.',
    '💡 Tôn vinh các nhóm phát triển ứng dụng ngân hàng số.',
    '🏅 Khen thưởng các phòng giao dịch đạt thành tích vượt trội.',
    '🎖️ Vinh danh các chi nhánh triển khai thành công RPA.',
    '🏅 Ghi nhận các cá nhân xuất sắc trong đào tạo công nghệ.',
    '🌟 Tôn vinh các nhóm phát triển hệ sinh thái số.',
    '🎉 Vinh danh các phòng ban đổi mới sản phẩm dịch vụ.',
    '🏆 Khen thưởng các nhóm triển khai AI vào chăm sóc khách hàng.',
    '👏 Ghi nhận các sáng kiến tối ưu hóa vận hành.',
    '🎊 Vinh danh các chi nhánh phát triển dịch vụ khách hàng ưu tiên.',
    '💡 Tôn vinh các nhóm phát triển hệ thống bảo mật.',
    '🏅 Khen thưởng các phòng giao dịch đạt thành tích xuất sắc.',
    '🎖️ Vinh danh các chi nhánh triển khai thành công Blockchain.',
    '🏅 Ghi nhận các cá nhân xuất sắc trong phân tích dữ liệu lớn.',
    '🌟 Tôn vinh các nhóm phát triển sản phẩm tiết kiệm số.',
    '🎉 Vinh danh các phòng ban đổi mới quy trình quản trị.',
]
recognition_posts = []
for i in range(NUM_RECOGNITION):
    poster_id = random.choice(user_ids)
    recognition_posts.append({
        'id': i+1,
        'poster_id': poster_id,
        'content': recognition_contents[i % len(recognition_contents)],
        'created_at': fake.date_time_this_year().isoformat()
    })

# 10. Join Tables

# initiative_divisions: each initiative links to 2-4 divisions
initiative_divisions = []
for initiative in initiatives:
    division_ids = random.sample([d['id'] for d in divisions], k=random.randint(2, 4))
    for division_id in division_ids:
        initiative_divisions.append({
            'initiative_id': initiative['id'],
            'division_id': division_id
        })

# initiative_members: each initiative has 3-6 members, each with a role
initiative_members = []
for initiative in initiatives:
    member_ids = random.sample(user_ids, k=random.randint(3, 6))
    for user_id in member_ids:
        role = random.choice(['Thành viên', 'Trưởng nhóm', 'Cố vấn'])
        initiative_members.append({
            'initiative_id': initiative['id'],
            'user_id': user_id,
            'role': role
        })

# mission_honorees: each mission honors 1-3 divisions
mission_honorees = []
for mission in missions:
    honoree_divisions = random.sample([d['id'] for d in divisions], k=random.randint(1, 3))
    for division_id in honoree_divisions:
        mission_honorees.append({
            'mission_id': mission['id'],
            'division_id': division_id,
            'description': fake.sentence()
        })

# mission_honored_initiatives: each mission honors 1-2 initiatives
mission_honored_initiatives = []
for mission in missions:
    honored_inits = random.sample([i['id'] for i in initiatives], k=random.randint(1, 2))
    for initiative_id in honored_inits:
        mission_honored_initiatives.append({
            'mission_id': mission['id'],
            'initiative_id': initiative_id,
            'description': fake.sentence(),
            'honored_at': fake.date_time_this_year().isoformat()
        })

# honorees: each recognition post honors 1-2 users or divisions
honorees = []
for post in recognition_posts:
    for _ in range(random.randint(1, 2)):
        honoree_type = random.choice(['user', 'division'])
        if honoree_type == 'user':
            honoree_id = random.choice(user_ids)
        else:
            honoree_id = random.choice([d['id'] for d in divisions])
        honorees.append({
            'post_id': post['id'],
            'honoree_id': honoree_id,
            'honoree_type': honoree_type
        })

# likes: each recognition post gets 2-5 likes from different users
likes = []
for post in recognition_posts:
    liker_ids = random.sample(user_ids, k=random.randint(2, 5))
    for user_id in liker_ids:
        likes.append({
            'post_id': post['id'],
            'user_id': user_id
        })

# 11. Log/Content Tables

# initiative_status_history: each initiative has 2-4 status changes
initiative_status_history = []
for initiative in initiatives:
    for _ in range(random.randint(2, 4)):
        status_id = random.choice([1, 2, 3, 4])
        initiative_status_history.append({
            'id': len(initiative_status_history)+1,
            'initiative_id': initiative['id'],
            'status_id': status_id,
            'start_date': fake.date_time_this_year().isoformat(),
            'notes': fake.sentence()
        })

# initiative_kpis: each initiative has 2-3 KPIs
initiative_kpis = []
for initiative in initiatives:
    for _ in range(random.randint(2, 3)):
        initiative_kpis.append({
            'id': len(initiative_kpis)+1,
            'initiative_id': initiative['id'],
            'kpi_name': fake.word()
        })

# initiative_kpi_data: each kpi has 3-5 data points
initiative_kpi_data = []
for kpi in initiative_kpis:
    for _ in range(random.randint(3, 5)):
        initiative_kpi_data.append({
            'id': len(initiative_kpi_data)+1,
            'kpi_id': kpi['id'],
            'date': fake.date_this_year().isoformat(),
            'value': round(random.uniform(10, 1000), 2)
        })

# comments: each recognition post has 2-4 comments from users
comments = []
for post in recognition_posts:
    commenter_ids = random.sample(user_ids, k=random.randint(2, 4))
    for user_id in commenter_ids:
        comments.append({
            'id': len(comments)+1,
            'post_id': post['id'],
            'user_id': user_id,
            'content': fake.sentence(),
            'parent_comment_id': None,
            'created_at': fake.date_time_this_year().isoformat()
        })

# documents: each initiative and mission has 1-2 documents
documents = []
for parent_type, parents in [('initiative', initiatives), ('mission', missions)]:
    for parent in parents:
        for _ in range(random.randint(1, 2)):
            uploader_id = random.choice(user_ids)
            documents.append({
                'id': len(documents)+1,
                'name': fake.file_name(),
                'url': fake.url(),
                'file_type': fake.file_extension(),
                'parent_id': parent['id'],
                'parent_type': parent_type,
                'uploader_id': uploader_id,
                'created_at': fake.date_time_this_year().isoformat()
            })

# qa_items: each initiative and mission has 1-2 Q&A items
qa_items = []
for parent_type, parents in [('initiative', initiatives), ('mission', missions)]:
    for parent in parents:
        for _ in range(random.randint(1, 2)):
            asker_id = random.choice(user_ids)
            answerer_id = random.choice(user_ids)
            qa_items.append({
                'id': len(qa_items)+1,
                'question': fake.sentence(),
                'answer': fake.sentence(),
                'parent_id': parent['id'],
                'parent_type': parent_type,
                'asker_id': asker_id,
                'answerer_id': answerer_id,
                'created_at': fake.date_time_this_year().isoformat()
            })

# 12. Output to file
mockdata = {
    'roles': roles,
    'statuses': statuses,
    'categories': categories,
    'divisions': divisions,
    'users': users,
    'missions': missions,
    'initiatives': initiatives,
    'news_articles': news_articles,
    'recognition_posts': recognition_posts,
    'initiative_divisions': initiative_divisions,
    'initiative_members': initiative_members,
    'mission_honorees': mission_honorees,
    'mission_honored_initiatives': mission_honored_initiatives,
    'honorees': honorees,
    'likes': likes,
    'initiative_status_history': initiative_status_history,
    'initiative_kpis': initiative_kpis,
    'initiative_kpi_data': initiative_kpi_data,
    'comments': comments,
    'documents': documents,
    'qa_items': qa_items
}

with open('mockdata.json', 'w', encoding='utf-8') as f:
    json.dump(mockdata, f, ensure_ascii=False, indent=2)

print("Mock data generated to mockdata.json") 