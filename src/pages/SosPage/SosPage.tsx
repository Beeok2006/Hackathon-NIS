
import React from 'react';

const SosPage: React.FC = () => {
  return (
    <div>
      <h1 className='fixed-top text-[22px] w-[65%] rounded-[13px] mx-auto text-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}}>Гуманитарная помощь</h1>
      
      <div  className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-between items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
          <p>Еда</p><i className='pi pi-chevron-down'></i>
        </div>
          <br />
        <div  className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-between items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
          <p>Одежда</p><i className='pi pi-chevron-down'></i>
        </div>
          <br />
        <div  className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-between items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
          <p>Медикаменты</p><i className='pi pi-chevron-down'></i>
        </div>
        <br />
        <div  className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-between items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
        <textarea className='w-full bg-white h-[150px]' placeholder='Личные пожелание'>

        </textarea>
          
        </div>
        <br />
        <button  className='bg-[#8a2be2] rounded-[13px] w-[90%] relative mx-auto relative top-[80px] text-white flex justify-center  items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
        
           Отправить                  
        </button>
    <br /><br />
    
        <div  className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-between items-center mb-[10px]' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
        <textarea className='w-full bg-white h-[100px] text-[24px] font-bold' placeholder='Хотите оказать гуманитарную помощь ?'>

        </textarea>
          
        </div>
        <div className='bg-white rounded-[13px] w-[90%] relative mx-auto relative top-[80px] flex justify-around items-center'>
          
        <div>
    <input type="checkbox" id="coding" name="interest" className='w-[30px]' checked />
    <label >Да</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest"  />
    <label >Нет</label>
  </div>
        </div>
        <br />
        <button  className='bg-[#8a2be2] rounded-[13px] w-[90%] relative mx-auto relative top-[80px] text-white flex justify-center  items-center' style={{boxShadow: '0px 0px 4px #8a8a8a', padding: '10px 12px'}} >
        
           Отправить                  
        </button>
    </div>
  );
};

export default SosPage;
