import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Link don&apos;t work.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}