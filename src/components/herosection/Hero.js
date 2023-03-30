import './hero.css'
import Button from '../button/Button'
const Hero = () => {
  return (
      <div className='hero-container'>
        <video  src='../videos/video-1.mp4' muted autoPlay loop/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What Are You Waiting for</p>
        <div className='btns'>
        <Button path={'/sign-up'} children={'Sign Up'}/>
        <Button path={'/video'} children={<div className='btn-div'>Watch <i className='fa fa-play-circle'></i></div>}/>
        </div>
      </div>
  )
}

export default Hero
