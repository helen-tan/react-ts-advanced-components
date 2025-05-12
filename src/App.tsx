import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import { useRef } from 'react';

function App() {
  const textInput = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={textInput}/>
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>

      {/* We can add properties of a Button to this polymorphic component */}
      <Container as={Button} onClick={() => {console.log("hi")}}>  
        Click Me
      </Container>
    </main>
  )
}

export default App;
