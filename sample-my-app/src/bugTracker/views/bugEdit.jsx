import { useState } from "react";
import {projects} from '../../projects/index'
import mapStateToProps from "../../bugTracker";
const BugEdit = ({ addNew , store}) => {
  const [newBugName, setNewBugName] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={(evt) => setNewBugName(evt.target.value)} />

      <label htmlFor="">Projects :</label>
      <select name="" id="">
        <option value={mapStateToProps}></option>
      </select>

      <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
    </section>
  );
};

export default BugEdit;
