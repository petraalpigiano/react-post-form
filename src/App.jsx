import axios from "axios";
import { useState } from "react";

export default function App() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => console.log(res));
  }

  function handleFormData(event) {
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
      <form onSubmit={handleFormSubmit}>
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
