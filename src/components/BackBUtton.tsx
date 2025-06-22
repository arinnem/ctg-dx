// src/components/BackButton.tsx

import React from 'react';

// Icon mũi tên sang trái
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h17" />
    </svg>
);


// Định nghĩa kiểu dữ liệu cho props
interface BackButtonProps {
  /**
   * Nhãn hiển thị trên nút, ví dụ: "Quay lại"
   */
  label: string;
  /**
   * Hàm sẽ được gọi khi người dùng bấm vào nút.
   * Thường dùng để điều hướng về trang trước.
   */
  onClick: () => void;
}

/**
 * Một nút điều hướng để quay lại trang trước,
 * có phong cách nhất quán với ViewAllButton.
 */
const BackButton: React.FC<BackButtonProps> = ({ label, onClick }) => {
  return (
    <button
        onClick={onClick}
        // Áp dụng các lớp CSS tương tự như ViewAllButton
        className="group inline-flex items-center text-sm font-semibold text-[#005AAB] hover:text-[#DD0031] transition-colors duration-300"
    >
      <ArrowLeftIcon />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
