const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="category_label">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkMark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;