import './App.css';
import BasicButton from "./components/UiComponents/BasicButton";
import FormDialog from "./components/UiComponents/Dialog";
import {useState} from "react";

function App() {
    const [isOpen, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <>
            <FormDialog
                title={'Test Dialog'}
                isOpen={isOpen}
                onClose={closeDialog}
            />
            <BasicButton variant={'contained'} onClick={() => openDialog()}>
                Open Dialog
            </BasicButton>
        </>
    );
}

export default App;
