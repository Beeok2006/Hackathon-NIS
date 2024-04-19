import React from 'react';
import Header from '../../components/Header/Header';
import sea from '../../assets/whea.jpeg'
import oblako from '../../assets/oblako.jpeg'
import storm from '../../assets/storm.jpeg'
import earth from '../../assets/earthquake.jpeg'
import potop from '../../assets/potop.jpeg'
import ava from '../../assets/ava.png'
const Home: React.FC = () => {
  return (
    <>      
      <Header/>
      <div style={{padding: '0px 20px'}}>
        <p>Текущее местоположение</p>
        <div className="">
          <img src={sea} className='rounded-[14px] mt-[10px]' alt="" />
          <div className="absolute top-[215px] left-[175px] w-[220px] z-index z-10">
          <span className='bg-[#ffffffd9]'>
          Как сохранять спокойствие в критических ситуациях
          </span>
          <button className='bg-white p-2 rounded-[12px] mt-[8px] float-right mr-[9px]'>
            Подробнее
          </button>
          </div>
          
        </div>
        <p className='text-gray-500 text-center'>Совет министерства службы безопасности</p>
        <br />
        <div className="flex">

        <div className="">
        <img src={storm} className='w-[80px] h-[76px] rounded-[60px] mr-4' />
        <p className='ml-4'>Шторм</p>
        </div>
       <div className="">
       <img src={earth} className='w-[80px] h-[76px] rounded-[60px] mr-4' />
       <p className='ml-3'>Землят.</p>
       </div>
      
       <div className="">
       <img src={potop} className='w-[80px] h-[76px] rounded-[60px] mr-4' />
       <p className='ml-[15px]'>Потоп</p>
       </div>
       <div className="">
       <img src={oblako} className='w-[80px] h-[76px] rounded-[60px] mr-4' />
       <p className='ml-3'>Другое</p>
       </div>
        </div>
        <h4 className='float-right font-bold mt-2'>Посмотреть все</h4>
        <br /><br />
        <div className="">
          <p className='text-[19px] rounded-[8px] p-[4px]' style={{boxShadow: '0px 0px 2px'}}>Чрезвычайная помощь</p>
          <br />
          <div className="flex items-center">
          <progress value={75} max={100} className='w-full' /> <img className='w-[50px] ml-2 rounded-full' src={ava}/>
            </div>
          <p className='float-right'>Прибудут через 5 мин</p>
        </div>
        <br /><br />
        <div className="flex items-center justify-center">
        <button className='text-[4rem] bg-[red] text-white p-4 rounded-[13px] w-[300px] h-[80px] flex items-center justify-center'>
          SOS
        </button>
        </div>
       
      </div>
    </>
  );
};

export default Home;
