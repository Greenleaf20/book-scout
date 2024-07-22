import { Button } from "flowbite-react";
import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Output() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <Button color="purple" pill onClick={goToHome}>
                <HiChevronLeft />Back
            </Button>
        </div>
    );
}

export default Output;