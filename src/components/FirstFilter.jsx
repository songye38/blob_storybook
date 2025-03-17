import React from 'react';
import PropTypes from 'prop-types';

// 아이콘 매핑
const iconMap = {
  추천: '/thumbs-up.svg',
  비추천: '/thumbs-down.svg',
  질문: '/question.svg',
  주의: '/alert.svg',
  도움요청: '/help.svg',
};

// 정확한 색상 매핑
const colorMap = {
  추천: '#D32A87',
  비추천: '#E14C19',
  질문: '#11AFAF',
  주의: '#E1C512',
  도움요청: '#90C30F',
};

const FirstFilter = ({ type, status }) => {
  const isActive = status === 'active';
  const borderColor = isActive ? colorMap[type] : 'transparent';
  const textColor = isActive ? colorMap[type] : 'black';
  const iconColor = isActive ? colorMap[type] : 'black';

  return (
    <div
      data-category={type}
      data-status={status}
      style={{
        height: '100%',
        padding: '8px 12px',
        background: 'var(--BDS-Grayscale-1, white)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
        borderRadius: 24,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        maxWidth: 'fit-content',
        outline: `2px solid ${borderColor}`, // ✅ active 상태일 때 테두리 색상 적용
        outlineOffset: '-1.2px',
      }}
    >
      {/* 왼쪽 아이콘 + 텍스트 그룹 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <img
          src={iconMap[type] || '/thumbs-up.svg'}
          alt={`${type} Icon`}
          style={{ width: 18, height: 18 }}
        />
        <div
          style={{
            textAlign: 'center',
            color: textColor, // ✅ active 상태일 때 type 색상 적용
            fontSize: 16,
            fontFamily: 'IBM Plex Sans KR',
            fontWeight: '500',
            lineHeight: '24px',
            whiteSpace: 'nowrap',
          }}
        >
          {type}
        </div>
      </div>

      {/* 오른쪽 아이콘 (색상 변경 적용) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke={iconColor} // ✅ 정확한 색상 적용
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

// ✅ PropTypes 추가 (유효성 검사)
FirstFilter.propTypes = {
  type: PropTypes.oneOf(['추천', '비추천', '질문', '주의', '도움요청']).isRequired,
  status: PropTypes.oneOf(['default', 'active']).isRequired,
};

export default FirstFilter;
