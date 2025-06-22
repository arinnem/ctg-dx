import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { missionsData } from '../data/mockData';
import QnAAccordion from '../components/QnAAccordion';

// --- Child Components ---

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Main Page Component ---

const MissionDetailPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { missionId } = useParams<{ missionId: string }>();
  
  const mission = missionId 
    ? missionsData.find(m => m.id === parseInt(missionId, 10))
    : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!mission) {
    return <div className="text-center py-20">Không tìm thấy thông tin nhiệm vụ.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Page Header */}
        <header className="flex items-center space-x-6 mb-8 pb-8 border-b-2 border-gray-200">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-md">
                <TargetIcon />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-gray-900">{mission.title}</h1>
                <p className="mt-2 text-lg text-gray-600">{mission.summary}</p>
            </div>
        </header>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <main className="lg:col-span-2">
            <div className="w-full">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button onClick={() => setActiveTab('description')} className={`${activeTab === 'description' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Mô tả</button>
                  <button onClick={() => setActiveTab('results')} className={`${activeTab === 'results' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Kết quả</button>
                  <button onClick={() => setActiveTab('qa')} className={`${activeTab === 'qa' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Hỏi & Đáp</button>
                </nav>
              </div>
              
              {/* Nội dung Tab */}
              <div className="py-6">
                {activeTab === 'description' && (
                    <div className="prose max-w-none text-justify">
                        <p>{mission.fullDescription}</p>
                    </div>
                )}
                {activeTab === 'results' && (
                  <div className="mt-6">
                    <QnAAccordion
                      items={mission.highlightResults.map((result) => ({
                        question: result.title,
                        answer: result.description,
                      }))}
                    />
                  </div>
                )}
                {activeTab === 'qa' && (
                  <div>
                    {mission.qa && mission.qa.length > 0 ? (
                        <QnAAccordion items={mission.qa} />
                    ) : (
                        <div className="prose max-w-none">
                            <p>Chưa có câu hỏi và trả lời cho nhiệm vụ này.</p>
                        </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Sidebar Column */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
                <div>
                    <h4 className="font-semibold text-gray-800">Thông tin chung</h4>
                    <div className="mt-4 space-y-2 text-sm">
                        <p><strong>Trạng thái:</strong> 
                          <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                            mission.status === 'Đang diễn ra' 
                              ? 'bg-green-100 text-green-800 animate-pulse' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {mission.status}
                          </span>
                        </p>
                        <p><strong>Thời hạn:</strong> {mission.deadline}</p>
                        <p><strong>Số đơn vị tham gia:</strong> {mission.participants}</p>
                        <p><strong>IO:</strong> {mission.io}</p>
                        <p><strong>Backup IO:</strong> {mission.backupIo}</p>
                        <p><strong>Phòng ban:</strong> {mission.contact}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${mission.email}`} className="text-blue-600 hover:underline">{mission.email}</a></p>
                        <p><strong>Group link:</strong> <a href={mission.grouplink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Link</a></p>
                    </div>
                </div>
                <hr/>
                <div>
                    <h4 className="font-semibold text-gray-800">Tài liệu liên quan</h4>
                    <ul className="mt-4 space-y-3">
                        {mission.documents.map((doc, i) => (
                            <li key={i}>
                                <a href={doc.url} download className="flex items-center space-x-3 text-sm text-blue-600 hover:underline">
                                    <DocumentIcon/>
                                    <span>{doc.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default MissionDetailPage; 