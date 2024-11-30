import { Link } from "react-router-dom";
import HomeDescription from "../components/HomeDescription";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron bg-primary text-light text-center py-5 mb-4">
        <h1 className="display-4">Welcome to Our Home Page</h1>
        <p className="lead">
          Discover the best products and services we offer.
        </p>
      </div>
      <HomeDescription />
      <div className="d-flex justify-content-center mt-4">
        <Link to="/products" className="btn btn-success btn-lg">
          Go to Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
