import styled from "styled-components";


function ProjectsInVerse() {
  return (
    <ProjectsInVerseSection>
        <div className="projectInVerse">
            <Slogan>
                <h1>Projects In The Verse</h1>
                <p>Games and Digital Experiences</p>
            </Slogan>

            <Projects>
                <First>
                    <img src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" alt="Adventure in Breath Image" />
                    <div className="firstTag">
                        <p>Game</p>
                    </div>
                    <h1>Adventure in Breath (AiB)</h1>
                </First> 
                <Second>
                    <img src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" alt="Adventure in Breath Image" />
                    <div className="secondTag">
                        <p>Game</p>
                    </div>
                </Second> 
                <Third>
                    <img src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340" alt="Adventure in Breath Image" />
                    <div className="thirdTag">
                        <p>Digital Experience</p>
                    </div>
                </Third> 
            </Projects>
        </div>
    </ProjectsInVerseSection>
  )
}

const ProjectsInVerseSection = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    color: white; 
`; 

const Slogan = styled.div`
    h1{
        display: flex; 
        justify-content: center; 
        align-items: center; 
    }

    p{
        display: flex; 
        justify-content: center; 
        align-items: center; 
    }
`; 

const Projects = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    gap: 1.8rem; 
    margin-top: 3rem; 
`; 

const First = styled.div`
    height: 45rem; 
    width: 28rem; 
    border: 2px solid black; 
    border-radius: 10px; 

    img{
        height: 25rem; 
        width: 100%; 
        border-radius: 10px 10px 0px 0; 
    }

    div{
        margin-left: 1rem; 
        margin-right: 1rem; 
    }

    .firstTag{
        background: #2B80FD; 
        width: 3.5rem; 
        height: 1.5rem; 
        border-radius: 20px;
        margin-top: .5rem; 
        display: flex; 
    justify-content: center; 
    align-items: center;

        p{
            display: flex; 
            justify-content: center; 
            align-items: center;
            font-size: 0.8rem; 
        }
    }
`; 

const Second = styled.div`
    height: 45rem; 
    width: 28rem; 
    border: 2px solid black; 
    border-radius: 10px; 

    img{
        height: 25rem; 
        width: 100%; 
        border-radius: 10px 10px 0px 0; 
    }

    div{
        margin-left: 1rem; 
        margin-right: 1rem; 
    }

    .secondTag{
        background: #2B80FD; 
        width: 3.5rem; 
        height: 1.5rem; 
        border-radius: 20px; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        margin-top: .5rem; 

        p{
            display: flex; 
            justify-content: center; 
            align-items: center;
            font-size: 0.8rem; 
        }
    }
`; 

const Third = styled.div`
    height: 45rem; 
    width: 28rem; 
    border: 2px solid black; 
    border-radius: 10px; 

    img{
        height: 25rem; 
        width: 100%; 
        border-radius: 10px 10px 0px 0; 
    }

    div{
        margin-left: 1rem; 
        margin-right: 1rem; 
    }

    .thirdTag{
        background: #2B80FD; 
        width: 8rem; 
        height: 1.5rem; 
        border-radius: 20px; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        margin-top: .5rem; 

        p{
            display: flex; 
            justify-content: center; 
            align-items: center;
            font-size: 0.8rem; 
        }
    }
`; 


export default ProjectsInVerse