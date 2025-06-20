import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
function Home() {  

  return (
    <>
      <Header hiddenContact={true} />       
      <About />
      <Projects />
      <Skills />      
      <Footer bg={'bg-dark2'} hiddenSocial={true} />
    </>
  )
}

export default Home