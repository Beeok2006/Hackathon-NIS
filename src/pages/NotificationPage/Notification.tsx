
import React from 'react';
import ChatHead from '../../components/Header/HeadforChat';
import Chatbar from '../../components/navbar/Chatbar';

const NotificationPage: React.FC = () => {
  return (
    <><ChatHead />
    <div className='flex relative top-[570px]'>
      <img className='w-[50px] rounded-[24px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFQzIdJq-P0YaCCdCBRKXefFMqCCN6-93EQ&usqp=CAU" />
      <span className='rounded-[12px] text-[19px] ml-4' style={{boxShadow: '0px 0px 9px 0px #cbcbcb', padding: '8px 12px'}}>Чем могу вам помочь ?</span>
    </div>
    <Chatbar /></>
  );
};

export default NotificationPage;
