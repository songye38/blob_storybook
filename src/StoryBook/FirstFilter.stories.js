import React from 'react';
import FirstFilter from '../components/FirstFilter';

export default {
  title: 'Components/FirstFilter',
  component: FirstFilter,
  argTypes: {
    type: {
      control: { type: 'radio' }, // 라디오 버튼으로 선택
      options: ['추천', '비추천', '질문', '주의', '도움요청'], // 선택할 수 있는 값들
    },
    status: {
      control: { type: 'radio' },
      options: ['default', 'active'], // 상태도 선택 가능하도록
    },
  },
};

const Template = (args) => <FirstFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: '추천',
  status: 'default',
};

// export const Active = Template.bind({});
// Active.args = {
//   type: '추천',
//   status: 'active',
// };

// export const CustomType = Template.bind({});
// CustomType.args = {
//   type: '상담', // 🚨 여기서 '상담'은 유효하지 않은 값이므로 에러 발생 가능
//   status: 'default',
// };
