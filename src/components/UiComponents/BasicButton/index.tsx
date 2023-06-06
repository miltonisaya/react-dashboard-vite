import * as React from 'react';
import Button, {ButtonProps} from '@mui/material/Button';

interface Props extends ButtonProps{
    children: React.ReactNode
}

export default function BasicButton(props: Props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}
