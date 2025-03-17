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

// 메인 색상 매핑 (active 상태일 때 적용)
const colorMap = {
  추천: '#D32A87',
  비추천: '#E14C19',
  질문: '#11AFAF',
  주의: '#E1C512',
  도움요청: '#90C30F',
};

const SecondFilter = ({ type, status }) => {
  const isActive = status === 'active';

  // 기본 상태에서의 색상
  const borderColor = isActive ? colorMap[type] : colorMap[type]; // default와 active 모두 적용되는 색상
  const textColor = isActive ? 'white' : colorMap[type]; // active일 때 텍스트 색상을 흰색으로 변경
  const fontWeight = isActive ? '700' : '600'; // active 상태일 때는 더 두껍게
  const outlineWidth = isActive ? '3px' : '1px'; // active일 때 테두리 두껍게

  // active 상태일 때는 type 앞에 #을 추가
  const displayType = isActive ? `#${type}` : type;

  return (
    <div
      data-category={type}
      data-status={status}
      style={{
        height: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 4,
        paddingBottom: 4,
        background: isActive ? colorMap[type] : 'transparent', // active 상태일 때 배경색을 타입에 맞게 변경
        borderRadius: 24,
        outline: `${outlineWidth} ${borderColor} solid`, // 테두리 색상
        outlineOffset: '-1px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        width: 'fit-content',  // 내용 크기에 맞게 너비 자동 조정
      }}
    >
      {/* 텍스트 */}
      <div
        style={{
          textAlign: 'center',
          color: isActive ? 'white' : textColor, // active 상태일 때 텍스트 색상 white로 변경
          fontSize: 14,
          fontFamily: 'IBM Plex Sans KR',
          fontWeight: fontWeight, // active 상태일 때는 두꺼운 글씨
          lineHeight: '19.88px',
          wordWrap: 'break-word',
        }}
      >
        {displayType} {/* active일 때 #을 추가한 type */}
      </div>

      {/* active 상태일 때만 close 아이콘 표시 */}
      {isActive && (
        <img
          src={'/close.svg'}
          alt={'close icon'}
          style={{ width: 18, height: 18 }}
        />
      )}
    </div>
  );
};

// PropTypes 추가 (유효성 검사)
SecondFilter.propTypes = {
  type: PropTypes.oneOf(['추천', '비추천', '질문', '주의', '도움요청']).isRequired,
  status: PropTypes.oneOf(['default', 'active']).isRequired, // 'selected' 상태 제거
};

export default SecondFilter;
