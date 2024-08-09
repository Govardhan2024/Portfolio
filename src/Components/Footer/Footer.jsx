import  './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="main-footer-bg-card">
            <div className='flex-footer-card'>
                <div className='first-footer-item-card'>
                   
                    <p className='footer-head'>I am a frontend developer from, india with 1 year experience in companies carrynow</p>
                </div>
                <div className='flex-footer-link-items'>
                    
                        
                        
                        <p>Terms of Services</p>
                        <p>Privacy policy</p>
                        <p>contact with me</p>
 
                  
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className='center-line'>
            <div className='horizantal-line'></div>
            
            </div>
            <div>
            <p style={{marginLeft:'300px',paddingTop:'40px'}}>© 2024 . All rights reserved.</p>
            </div>
            <div style={{display:'flex',flexDirection:'row',marginLeft:'auto',marginRight:'20%',gap:'10px',}}>
              <div style={{width:'30px',height:'30px',borderRadius:'30px',backgroundColor:'white',gap:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}><img src='../../assets/Images/Screen-Shot-2002.png'/></div>
              <div style={{width:'30px',height:'30px',borderRadius:'30px',backgroundColor:'white',gap:'10px'}}></div>
              <div  style={{width:'30px',height:'30px',borderRadius:'30px',backgroundColor:'white',gap:'10px'}}></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
