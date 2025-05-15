import type { ComponentPropsWithoutRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'>; // gives an object type that contains all the props accepted by the form element

export default function Form(props: FormProps) {
    return (
        <form {...props}>
            {props.children}
        </form>
    )
}
