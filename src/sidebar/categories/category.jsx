import "./Category.css";
import Input from "../../components/inputs";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="category_title">Category</h2>

      <div className="category ">
        <label className="category_label">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkMark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;