import axios from "axios";
export default function App() {
  return (
    <>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <textarea className="form-control" id="body" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="public" />
            <label className="form-check-label" htmlFor="public">
              Public
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
