import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center text-center max-w-xl mx-auto m-10">
            <img className="" src="https://i.ibb.co/b7k3Y8T/error-404-1.png" alt="" />
            <p></p>
            <Link to='/'>
            <button className="btn btn-accent w-full mt-10">back to home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;