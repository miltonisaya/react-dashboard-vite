import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export type CustomProps = {
    title: string;
    dialogContentText?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void; // Added onClose prop
}

export default function FormDialog({ isOpen, title, dialogContentText, children, onClose }: CustomProps) {
    return (
        <div>
            <Dialog open={isOpen} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogContentText}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
