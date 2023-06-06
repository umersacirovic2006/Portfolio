import Hero from '../../components/Hero/Hero'
import Nav from '../../components/Nav/Nav'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <Nav />
        <Hero />
    </div>
  )
}

export default Home