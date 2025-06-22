// src/components/QnAAccordion.tsx

import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho một cặp Hỏi & Đáp
interface QnAItemProps {
  question: string;
  answer: string;
}

// Định nghĩa props cho component Accordion chính
interface QnAAccordionProps {
  items: QnAItemProps[];
}

// Icon mũi tên cho trigger
const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const QnAAccordion: React.FC<QnAAccordionProps> = ({ items }) => {
  const [openItem, setOpenItem] = useState<number | null>(0); // Mặc định mở mục đầu tiên

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index); // Nếu đang mở thì đóng lại, nếu không thì mở mục mới
  };

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => {
        const isOpen = openItem === index;
        return (
          <div key={index} className="border-b border-gray-200">
            {/* Phần câu hỏi (Trigger) */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 px-2"
            >
              <span>{item.question}</span>
              <ChevronDownIcon isOpen={isOpen} />
            </button>
            
            {/* Phần câu trả lời (Content) */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
              <div className="px-2 py-4 text-gray-600 text-justify">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QnAAccordion; 