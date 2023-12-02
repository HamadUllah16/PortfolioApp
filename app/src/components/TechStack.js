import React from 'react'

const techStack = [
  {
    name: "Front-End Development", tech: ["React", "Javascript", "Bootstrap5", "HTML5", "CSS3", "Figma"]
  },
  {
    name: "Back-End Development", tech: ["Express", "NodeJS", "MongoDB", "Postman"]
  },
  {
    name: "Misc", tech: ["Git", "GitHub", "Vercel", "Python", "Java"]
  }
]

function TechStack() {
  return (
    <section className='row gap-4 m-2 justify-content-md-center' style={{ width: "100%" }}>
      {techStack.map((item, index) => {
        return (
          <article key={index} className='col-12 col-lg-6 col-md-6 col-sm-12 p-0 card rounded-3' style={{maxWidth: "400px"}}>
            <div className='bgDark rounded-top'>
              <p className='text-center darkText m-2'>{item.name}</p>
            </div>
            <article className='d-flex flex-wrap gap-3 m-4'>
              {item.tech.map((name, index) => {
                return (
                  <p className='techBox px-2 text-center' key={index}>{name}</p>
                )
              })}
            </article>
          </article>
        )
      })}
    </section>
  )
}

export default TechStack
