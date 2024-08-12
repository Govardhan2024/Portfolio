import   './Mywork.css'

import arrow_icon from '../../assets/Images/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='Mywork'>
        <h1 style={{textAlign:'center',fontSize:'50px',marginBottom:'20px'}}>My work Latest</h1>
        <div className='myworkcard2'>
        <div className='mywork-title'>
        <img  className='myworkpng' src='../../../imges/Screenshot 2024-08-12 111946.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='../../../imges/screenshopt2png 2.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='../../../imges/Screenshot 2024-08-12 112904img3.png' alt=''/>
        </div>
        </div>
        <div  className='myworkcard2'>
        <div className='mywork-title'>
        <img className='myworkpng' src='../../../imges/Screenshot 2024-08-12 1130004.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='../../../imges/Screenshot 2024-08-12 113239-7.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='../../../imges/Screenshot 2024-08-12 1130485.png' alt=''/>
        </div>
        
        </div>
        <div className='showmore'>
      <button className='btn'>Show More <img style={{width:'18px'}} src={arrow_icon}/></button>
      </div>
    </div>
  )
}

export default Mywork
