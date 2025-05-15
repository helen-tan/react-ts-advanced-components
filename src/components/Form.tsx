import type { ComponentPropsWithoutRef, FormEvent } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & { // gives an object type that contains all the props accepted by the form element
    onSave: (value: unknown) => void;
}; // more props to custom Form component

export default function Form(props: FormProps) {
    const {
        onSave,
        children,
        ...otherProps
    } = props

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Gather all the user inputs in the form
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData); // converts formData obj to a simpler obj so that dot notation can be used to access
        
        // pass data to place where we use the form
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>
    )
}
