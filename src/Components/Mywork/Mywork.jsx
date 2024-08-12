import   './Mywork.css'

import arrow_icon from '../../assets/Images/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='Mywork'>
        <h1 style={{textAlign:'center',fontSize:'50px',marginBottom:'20px'}}>My work Latest</h1>
        <div className='myworkcard2'>
        <div className='mywork-title'>
        <img  className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723445971/a1kj4rirn1ed4wvg5lyd.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723446145/rzu46t1pcbmkdbpff3bf.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723446183/n6e7yyl2hjkbrjecflaj.png' alt=''/>
        </div>
        </div>
        <div  className='myworkcard2'>
        <div className='mywork-title'>
        <img className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723446219/xokmxloo7qemv2fmtarm.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723446362/hno5q7z1fibbvchwve8l.png' alt=''/>
        </div>
        <div className='mywork-title'>
        <img className='myworkpng' src='https://res.cloudinary.com/dmo8tti9k/image/upload/v1723446249/xnndfsjev3awozb2mra8.png' alt=''/>
        </div>
        
        </div>
        <div className='showmore'>
      <button className='btn'>Show More <img style={{width:'18px'}} src={arrow_icon}/></button>
      </div>
    </div>
  )
}

export default Mywork
