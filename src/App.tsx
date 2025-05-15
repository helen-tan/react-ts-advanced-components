import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form';

type MyFormValues = {
  name: string;
  age: string
}

function App() {
  const textInput = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as MyFormValues;
    console.log('extracted data', extractedData);

    customForm.current?.clear();
  }

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

      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Name" type="text"/>
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App;
