import { Button } from "flowbite-react";
import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import './Output.css';
import { useEffect, useState } from "react";
import OutputItem from "../OutputItem/OutputItem";

function Output({data}) {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

    const [books,setBooks] = useState([]);

    useEffect(() => {
        if (data) {
            setBooks(data);
        }
    },[data])

    return (
        <div className="output-container">
            <Button color="purple" pill onClick={goToHome} className="go-home-button">
                <HiChevronLeft />Back
            </Button>
            <div className="grid grid-cols-12 books-output-row">
                {
                    books && books.map ( (item,index)=> 
                        <div className="col-span-4 p-4 book-col" key={index}>
                            <OutputItem item={item} id={index} key={index}></OutputItem>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Output;