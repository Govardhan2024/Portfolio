import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
        <img className='hero-img' src="../../../imges/Media.png"alt=''/>
        <h1><span>I am Vardhan,</span><br/>Front end Developer based in India.</h1>
        <p>I am a frontend developer from carrynow.</p>
        <div>
        <button className='btn-1'>Contact with me</button>
        <button className='btn-2'>My resume</button>
        </div>
    </div>
  )
}

export default Hero
