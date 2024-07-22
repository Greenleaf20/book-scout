import { Button, Label, TextInput } from "flowbite-react";
import './InputForm.css';

function InputForm() {
    return (
        <div className="input-container flex justify-center items-start">
           <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block input-container">
                        <Label htmlFor="small" value="Enter keyword here" className="input-label"/>
                    </div>
                    <TextInput id="small" type="text" sizing="sm" />
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit">Search</Button>
            </form>
        </div>
    );
}

export default InputForm;