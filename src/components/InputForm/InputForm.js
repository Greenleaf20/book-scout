import { Alert, Button, Label, TextInput } from "flowbite-react";
import './InputForm.css';
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import data from './sample-response.json';

function InputForm({sendBooksList}) {
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
        sendBooksList(data.items);
        navigate('/output');
    }

    const handleTextChange = (event) => {
        setKeyword(event.target.value);
    }

    return (
        <div className="input-container relative mt-10">
            <div className="flex justify-center items-center">
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block input-container">
                            <Label htmlFor="small" value="Enter keyword here" className="input-label"/>
                        </div>
                        <TextInput id="small" type="text" sizing="sm"/>
                    </div>
                    <Button gradientDuoTone="purpleToPink" type="submit" onClick={searchBooks} className="search-button w-20 justify-center">Search</Button>
                </form>
            </div>
            <div className='input-alert-container flex flex-col justify-center items-center absolute top-0 left-0 right-0 mt-4'>
                {
                    emptyAlert && <Alert color="failure" icon={HiInformationCircle} className="">
                        <span className="font-medium input-alert">Empty input!</span> Enter a keyword.
                    </Alert>
                }
            </div>
        </div>
    );
}

export default InputForm;