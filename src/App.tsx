import './App.css'
import BasicButton from "./components/UiComponents/BasicButton";
import BasicTextField from "./components/UiComponents/BasicTextField";


function App() {
    const handleClick =()=>{
        console.log("Clicked!!")
    }

    const handleKeyUp = ()=>{
        console.log("Key up!!")
    }
    return (
            <>
                <BasicTextField id={'name'} label={'name'} onChange={()=>handleKeyUp()}/>
                <BasicButton variant={'contained'} onClick={()=>handleClick()}>Click Me!</BasicButton>
            </>
    )
}

export default App
