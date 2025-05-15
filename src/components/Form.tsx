import { forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef, type FormEvent } from "react"

export type FormHandle = {
    clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & { // gives an object type that contains all the props accepted by the form element
    onSave: (value: unknown) => void;
}; // more props to custom Form component

const Form = forwardRef<FormHandle, FormProps>(function Form({ 
    onSave, 
    children, 
    ...otherProps 
}, 
ref) {
    const form = useRef<HTMLFormElement>(null);

    // Expose callable functions (exposing an API)
    // useImperativeHandle only works in a component that receives a forwarded ref
    // arg2 is a fn that returns an object that contains any methods you want to call from outside this component
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset(); // clear form input
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Gather all the user inputs in the form
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData); // converts formData obj to a simpler obj so that dot notation can be used to access
        
        // pass data to place where we use the form
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}> 
            {children}
        </form>
    )
})

export default Form;
