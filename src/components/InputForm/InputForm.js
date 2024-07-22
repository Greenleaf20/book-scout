import { Alert, Button, Label, TextInput } from "flowbite-react";
import './InputForm.css';
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function InputForm() {
    const [keyword, setKeyword] = useState('');
    const [emptyAlert, setEmptyAlert] = useState(false);
    const navigate = useNavigate();

    const searchBooks = (event) => {
        event.preventDefault();
        if (keyword === '') {
            setEmptyAlert(true);
            setTimeout(() => {
                setEmptyAlert(false);
            },5000);
            return;
        }

        console.log("Searching for books", keyword);
        navigate('/output');
    }

    const handleTextChange = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <div className="input-container">
            <div className="flex justify-center items-start">
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block input-container">
                            <Label htmlFor="small" value="Enter keyword here" className="input-label"/>
                        </div>
                        <TextInput id="small" type="text" sizing="sm" onChange={handleTextChange}/>
                    </div>
                    <Button gradientDuoTone="purpleToPink" type="submit" onClick={searchBooks}>Search</Button>
                </form>
            </div>
            <div className='input-alert-container flex justify-center items-center mt-4'>
                {
                    emptyAlert && <Alert color="failure" icon={HiInformationCircle} className="max-w-md w-full">
                        <span className="font-medium input-alert">Empty input!</span> Enter keyword to search for books.
                    </Alert>
                }
            </div>
        </div>
    );
}

export default InputForm;