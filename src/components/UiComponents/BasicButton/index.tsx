import * as React from 'react';
import Button, {ButtonProps} from '@mui/material/Button';

export type CustomButtonProps = {
    children: React.ReactNode
} & ButtonProps;

export default function BasicButton(props: CustomButtonProps) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}
