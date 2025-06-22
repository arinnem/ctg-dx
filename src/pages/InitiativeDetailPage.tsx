// src/pages/InitiativeDetailPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { initiativesData } from '../data/mockData';
import QnAAccordion from '../components/QnAAccordion';
//import { Separator } from '../components/Separator';
import TabButton from '../components/TabButton';

// --- Child Components ---

const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

/*const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
*/

// --- Main Page Component ---

const InitiativeDetailPage = () => {
  const { initiativeId } = useParams<{ initiativeId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  
  const initiative = initiativeId 
    ? initiativesData.find(i => i.id === parseInt(initiativeId, 10))
    : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/initiatives/${initiativeId}/dashboard`);
  };

  if (!initiative) {
    return <div className="text-center py-20">Không tìm thấy thông tin sáng kiến.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Page Header */}
        <header className="flex items-center space-x-6 mb-8 pb-8 border-b-2 border-gray-200">
            <img 
                src={initiative.avatarUrl} 
                alt={`Avatar của ${initiative.title}`} 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
                <h1 className="text-4xl font-bold text-gray-900">{initiative.title}</h1>
                <p className="mt-2 text-lg text-gray-600">{initiative.shortDescription}</p>
            </div>
        </header>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column: 'flex flex-col' is the key fix */}
          <main className="lg:col-span-2">
            <div className="w-full">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <TabButton
                    label="Mô tả"
                    isActive={activeTab === 'description'}
                    onClick={() => setActiveTab('description')}
                  />
                  <TabButton
                    label="Kết quả"
                    isActive={activeTab === 'results'}
                    onClick={() => setActiveTab('results')}
                  />
                  <TabButton
                    label="Hỏi & Đáp"
                    isActive={activeTab === 'qa'}
                    onClick={() => setActiveTab('qa')}
                  />
                </nav>
              </div>
              
              {/* Nội dung Tab */}
              <div className="py-6">
                {activeTab === 'description' && (
                    <div className="prose max-w-none text-justify">
                        <p>{initiative.fullDescription}</p>
                        {initiative.videoUrl && (
                            <div className="mt-6 aspect-w-16 aspect-h-9 not-prose">
                                <iframe className="w-full h-full rounded-lg" 
                                    src={initiative.videoUrl} 
                                    title={`Video giới thiệu ${initiative.title}`} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'results' && (
                  <div className="mt-6">
                    <QnAAccordion
                      items={initiative.highlightResults.map((result) => ({
                        question: result.title,
                        answer: result.description,
                      }))}
                    />
                  </div>
                )}
                {activeTab === 'qa' && (
                  <div>
                    {initiative.qa && initiative.qa.length > 0 ? (
                        <QnAAccordion items={initiative.qa} />
                    ) : (
                        <div className="prose max-w-none">
                            <p>Chưa có câu hỏi và trả lời cho sáng kiến này.</p>
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
                        <p><strong>Trạng thái:</strong> <span className="text-green-600 font-semibold">{initiative.status}</span></p>
                        <p><strong>IO:</strong> {initiative.io}</p>
                        <p><strong>Backup IO:</strong> {initiative.backupIo}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${initiative.email}`} className="text-blue-600 hover:underline">{initiative.email}</a></p>
                        <p><strong>Group link:</strong> <a href={initiative.grouplink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Link</a></p>
                        {initiative.dashboardLink && (
                            <p><strong>Dashboard:</strong> <button onClick={handleDashboardClick} className="text-blue-600 hover:underline">Xem Dashboard</button></p>
                        )}
                    </div>
                </div>
                <hr/>
                <div>
                    <h4 className="font-semibold text-gray-800">Tài liệu liên quan</h4>
                    <ul className="mt-4 space-y-3">
                        {initiative.documents.map((doc, i) => (
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

export default InitiativeDetailPage;