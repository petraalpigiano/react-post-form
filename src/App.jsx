import axios from "axios";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
  function handleFormData(event) {
    event.preventDefault();
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }));
  }
  return (
    <>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="author-input" className="form-label">
              Author
            </label>
            <input
              name="author"
              value={formData.author}
              onChange={handleFormData}
              type="text"
              className="form-control"
              id="author-input"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title-input" className="form-label">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleFormData}
              type="text"
              className="form-control"
              id="title-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body-input" className="form-label">
              Body
            </label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleFormData}
              className="form-control"
              id="body-input"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              name="public"
              value={formData.public}
              onChange={handleFormData}
              type="checkbox"
              className="form-check-input"
              id="public-input"
            />
            <label className="form-check-label" htmlFor="public-input">
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
