import './App.css'
import Section from '../Section/Section'
import ProjectCard from '../ProjectCard/ProjectCard'

function App() {
  return (
    <>
      <header className="section header-section">
        <h1>Software and Web Developer</h1>
        <p>Stephen Buley</p>
      </header>
      <Section title="Projects">
        <ProjectCard
          description={`I created this app for a friend from college who wanted to help her middle school band students to learn to play different instruments. I would love to go back and complete the site to extend the ranges of the instruments and add new instruments.`}
          imgDescription="Band Fingerings"
          src=""
          title="Band Fingerings"
          url="https://stephenbuley.com/"
        />
      </Section>

      <Section title="About Me">hello world</Section>

      <Section title="Reach Out">I am some more children</Section>
    </>
  )
}

export default App
