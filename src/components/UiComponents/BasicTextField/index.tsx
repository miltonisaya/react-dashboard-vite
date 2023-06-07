import TextField, {TextFieldProps} from '@mui/material/TextField';

export type CustomTextFieldProps = {
    label: string;
    id?: string;
} & TextFieldProps

export default function BasicTextField(props: CustomTextFieldProps) {
    return (
            <TextField {...props} />
    );
}