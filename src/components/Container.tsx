// Polymorphic component - A wrapper component where we don't know in advance,
// which component it will wrap

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type ContainerProps<T extends ElementType> = { // T - accept some type which should be set from the place where ContrainerProps are used
    as?: T;
    children: ReactNode
} & ComponentPropsWithoutRef<T>;

// This component can be used essentially just like the component that it is wrapping
// This example is not very useful, but can be built for shared styling, structure, or special logic
export default function Container<C extends ElementType>({
     as, 
     children,
     ...props 
    }: ContainerProps<C>) {
    const Component = as || 'div';  // can also destructure like: { as: Component } = props

    return (
        <Component {...props}>
            {children}
        </Component>
    )
}