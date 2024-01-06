import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ handleSearchFormSubmit }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchFormSubmit(searchInput);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        required
        className="search-form__text-input"
        type="text"
        placeholder="Enter topic"
        value={searchInput}
        name="search-input"
        onChange={handleSearchInputChange}
      />
      <button className="search-form__submit-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
