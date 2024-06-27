import { useState } from "react"


const ColorForm = (props) => {

  const [colorUser, setColorUser] = useState("");

  const cargarColor = (e) => {
    e.preventDefault();
    props.funcionColor(colorUser);

  }
  return (
    <>
      <form onSubmit={cargarColor}>

        <label htmlFor="color" className="color-label">Color</label>
        <input type="text" id="color" name="color" value={colorUser} onChange={(e) => setColorUser(e.target.value)} />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}

export default ColorForm;