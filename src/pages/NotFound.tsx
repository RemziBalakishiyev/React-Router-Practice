import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occurred, the requested page was not found!
            </div>
            <div className="error-actions mt-4">
              <Link to="/" className="btn btn-primary btn-lg">
                <span className="glyphicon glyphicon-home"></span> Take Me Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
