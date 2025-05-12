import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>; 
// gives an object containing all the default props of the standard built-in element
// now this component accepts custom props and the all the standard props of that element

// Wrapper component
// forwardRef: receives 2 params: props, ref
// the type of forwardRef is the type of the value that will eventually be stored in ref
// forwardRef<type of value the ref will manage, type of props the wrapped fn will receive>
const Input = forwardRef<HTMLInputElement, InputProps>(function Input (
    { label, id, ...props }, 
    ref
) {
    return (
        <p>
            <label htmlFor={id}>{ label }</label>
            <input {...props} ref={ref}/>
        </p>
    )
});

export default Input;
