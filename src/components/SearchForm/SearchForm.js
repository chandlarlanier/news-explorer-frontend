import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        className="search-form__text-input"
        type="text"
        placeholder="Enter topic"
      ></input>
      <button className="search-form__submit-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
