// Write your code here
import {useState} from 'react'
import {
  Container,
  Heading,
  Text,
  Img,
  ShowText,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, setReadMore] = useState(true)

  const onClickReadMore = () => {
    setReadMore(prevStatus => !prevStatus)
  }

  const text = reactHooksDescription
  const beforeText = text.slice(0, 171)
  const showText = readMore ? beforeText : text
  const ShowButtonText = readMore ? 'Read More' : 'Read Less'
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Text>Hooks are a new addition to React</Text>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ShowText>{showText}</ShowText>
      <Button type="button" onClick={onClickReadMore}>
        {ShowButtonText}
      </Button>
    </Container>
  )
}

export default ReadMore
