import { useState } from "react"
import { Card, Container } from "react-bootstrap"
import data from "./data/data"
import './css/slider.css'
function App() {
  const [index, setIndex] = useState(0)
  const user = data[index]
  const {name, role, image, text} = user

  const checkIndex = (index: any) => {
    if(index < 0){
       index = data.length - 1;
    }
    if(index > data.length -1){
      index = 0;    
    }
    return index
  }

  const nextHero = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex)
    })
  }
  const prevHero = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex)
    })
  }
  return (
    <>
    <Container className="text-center">
       <Card style={{ width: '40em' }}>
          <Card.Img variant="top" src={image}/>
            <Card.Body>
             <Card.Title>{name}</Card.Title>
             <Card.Text>{text}</Card.Text>
             <Card.Text className="role">{role}</Card.Text>
             <div className="section">
              <h1 onClick={prevHero}>{"<"}</h1>
              <h1 onClick={nextHero}>{">"}</h1>
             </div>
            </Card.Body>
         </Card>
    </Container>
    </>
  )
}

export default App
