import { useRouteError } from "react-router-dom";
import ActiveLink from "./components/ActiveLink/ActiveLink";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-error">{error.status}</h1>
          <p className="py-6 text-warning font-medium">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="mb-6 font-medium">
            <i>{error.statusText || error.message}</i>
          </p>
          <ActiveLink to={"/"}>
            <button className="btn btn-primary text-white">Get Back</button>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
}
