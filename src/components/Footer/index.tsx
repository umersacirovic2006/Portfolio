import './index.scss'
import logo from '/images/logo.png'

function Footer() {
  return (
    <div className='Footer'>
        <img src={logo} alt='logo' style={{width: '100px'}} />
        <small>© Umer Sacirovic 2023</small>
    </div>
  )
}

export default Footer