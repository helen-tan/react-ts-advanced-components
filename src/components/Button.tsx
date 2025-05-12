// returning different native elements based on some configuration

import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps { // tells TS that if this fn returns true, the arg, props. is of AnchorProps type
    return ('href' in props); // if href property is part of the props object => means its an anchor
}

export default function Button(props: ButtonProps | AnchorProps) {

    if (isAnchorProps(props)) {
        return (
            <a className="button" {...props}></a>
        )
    }

    return (
        <button className="button" {...props}></button>
    )
}