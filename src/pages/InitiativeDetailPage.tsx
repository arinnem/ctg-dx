// src/pages/InitiativeDetailPage.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initiativesData } from '../data/mockData';

// --- Các component con cho trang chi tiết ---

// Icon cho các tài liệu
const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


// --- Component chính của trang ---

const InitiativeDetailPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { initiativeId } = useParams<{ initiativeId: string }>();
  const parsedId = initiativeId ? parseInt(initiativeId, 10) : NaN;
  const initiative = !isNaN(parsedId)
    ? initiativesData.find(i => i.id === parsedId)
    : undefined;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!initiative) {
    return <div className="text-center py-20">Không tìm thấy thông tin sáng kiến.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* 1. Header của trang */}
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

        {/* 2. Bố cục 2 cột */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột chính bên trái */}
          <div className="lg:col-span-2">
            {/* Giao diện Tab */}
            <div>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button onClick={() => setActiveTab('description')} className={`${activeTab === 'description' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Mô tả</button>
                  <button onClick={() => setActiveTab('results')} className={`${activeTab === 'results' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Kết quả</button>
                  <button onClick={() => setActiveTab('qa')} className={`${activeTab === 'qa' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Hỏi & Đáp</button>
                </nav>
              </div>
              
              {/* Nội dung Tab */}
              <div className="py-6 prose max-w-none text-justify">
                {activeTab === 'description' && (
                    <div>
                        <p>{initiative.fullDescription}</p>
                        {initiative.videoUrl && (
                            <div className="mt-6 aspect-w-16 aspect-h-9">
                                <iframe
                                    src={initiative.videoUrl}
                                    title={`Video giới thiệu ${initiative.title}`}
                                    frameBorder="0"
                                    sandbox="allow-scripts allow-same-origin allow-presentation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'results' && (
                  <div>
                    <ul className="not-prose list-none p-0 m-0">
                      {initiative.highlightResults.map((result, i) => (
                        <li key={i} className="flex items-start pb-4">
                          <CheckCircleIcon />
                          <span className="text-base text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'qa' && (
                  <div>
                    <p>Chức năng Hỏi & Đáp đang được phát triển.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cột phụ bên phải */}
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
        </main>

      </div>
    </div>
  );
};

export default InitiativeDetailPage;
