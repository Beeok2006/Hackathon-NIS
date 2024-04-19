
import React from 'react';
import profile from '../../assets/profi.png'
import quit from '../../assets/quit.svg'
import security from '../../assets/security.svg'
import lang from '../../assets/lang.svg'
import about from '../../assets/about.svg'
import ring from '../../assets/ring.svg'
import ques from '../../assets/quest.svg'
import logo from '../../assets/saqtau.png'
import ava from '../../assets/ava.png'
const ProfilePage: React.FC = () => {
  return (
    <>
    <div className='mx-auto flex flex-col items-center justify-center bg-[#D9D9D9]'>
       <img src={ava} className='w-[35%] mt-[150px] mb-4 rounded-[54px]' alt="" />
       <h1 className='text-[24px] font-bold'>Нурбек Дулатов Бекарысович</h1>
       <br />
    </div>
    <div className='p-10'>
      <ul>
      <li className='flex items-center justify-start'><img src={ring} className='w-[10%] ' alt="" /> <p className='font-bold ml-2'>Уведомление в экстренных случаях</p></li>
      <br />
      <li  className='flex items-center justify-start'><img src={security} className='w-[10%]  ' alt="" /><p className='font-bold ml-2'>Безопасность</p></li>
      <br />
      <li  className='flex items-center justify-start'><img src={ques} className='w-[10%] ' alt="" /><p className='font-bold ml-2'>Служба поддержки</p></li>
      <br />
      <li  className='flex items-center justify-start'><img src={lang} className='w-[10%] ' alt="" /><p className='font-bold ml-2'>Язык </p></li>                    
      <br />
        <li  className='flex items-center justify-start'><img src={about} className='w-[8%]' alt="" /><p className='font-bold ml-2'>Saqtau App приложение</p></li>
        <br />
        <li  className='flex items-center justify-start'><img src={quit} className='w-[8%] ' alt="" /><p className='font-bold ml-2'>Выйти из аккаунта</p>  </li>
        <br />
      </ul>
    
        <img src={logo} alt="" />
        
        
    </div>
    </>
  );
};

export default ProfilePage;
