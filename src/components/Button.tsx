// returning different native elements based on some configuration

import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    elem: 'button'
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    elem: 'anchor'
} & ComponentPropsWithoutRef<'a'>


export default function Button(props: ButtonProps | AnchorProps) {
    const { elem } = props;

    if (elem === 'anchor') {
        return (
            <a {...props}></a>
        )
    }

    return (
        <button {...props}></button>
    )
}