import ProjectCard from '../ProjectCard/ProjectCard'
import './App.css'

function App() {
  return (
    <>
      <h1>Stephen Buley - Software Developer</h1>
      <p>
        I enjoy web developement and am always hungry to learn something new or
        interesting.
      </p>
      <div className="projects-container">
        <div className="projects">
          <ProjectCard
            description={`Star Wars Epic Duels was a board game in the early 2000's that was discontinued quickly but gained a cult following. This app allows you to input player names and randomly assign available characters and seats in order to help speed up game set up.`}
            imgDescription="Epic Duels Randomizer"
            src=""
            title="Epic Duels Randomizer"
            url="https://epicduelsonline.stephenbuley.com/"
          />
          <ProjectCard
            description={`Frontend mentor has been a great place to flex my front-end skills and test out some different things. Check out all the challenges I've completed!`}
            imgDescription="Frontend Mentor Challenges"
            src=""
            title="Frontend Mentor Challenges"
            url="https://stephenbuley.com/"
          />
          <ProjectCard
            description={`I created this app for a friend from college who wanted to help her middle school band students to learn to play different instruments. I would love to go back and complete the site to extend the ranges of the instruments and add new instruments.`}
            imgDescription="Band Fingerings"
            src=""
            title="Band Fingerings"
            url="https://stephenbuley.com/"
          />
        </div>
      </div>
    </>
  )
}

export default App
