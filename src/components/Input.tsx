
type InputProps = {
    label: string;
    id: string;
}

// Wrapper component
export default function Input(props: InputProps) {
    const {label, id} = props; // obj destructuring to pull out the props

    return (
        <p>
            <label htmlFor={id}>{ label }</label>
            <input id={id} type="text" />
        </p>
    )
}
