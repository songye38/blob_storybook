import React from 'react';
import SecondFilter from '../components/SecondFilter';

// 스토리북에서 컴포넌트를 렌더링할 때 필요한 기본 설정을 export
export default {
  title: 'Components/SecondFilter',  // 스토리북에서 보여질 컴포넌트 이름
  component: SecondFilter,           // 사용할 컴포넌트
};

// Template: 이 컴포넌트를 다양한 상태로 보여줄 수 있게 만듦
const Template = (args) => <SecondFilter {...args} />;

// 다양한 상태에 대한 스토리들
export const Default = Template.bind({});
Default.args = {
  type: '추천',
  status: 'default',  // 기본 상태
};