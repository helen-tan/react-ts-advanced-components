import type { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>; 
// gives an object containing all the default props of the standard built-in element
// now this component accepts custom props and the all the standard props of that element

// Wrapper component
export default function Input(props: InputProps) {
    const {label, id} = props; // obj destructuring to pull out the props

    return (
        <p>
            <label htmlFor={id}>{ label }</label>
            <input {...props} />
        </p>
    )
}
