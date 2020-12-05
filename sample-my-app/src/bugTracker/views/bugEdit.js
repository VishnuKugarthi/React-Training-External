import { useState } from "react";

const BugEdit = ({ addNew }) => {
  const [newBugName, setNewBugName] = useState("");
  /* const onTxtBugNameChange = (evt) => {
        setNewBugName(evt.target.value);
        console.log(newBugName);
    } */
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={(evt) => setNewBugName(evt.target.value)} />
      <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
    </section>
  );
};

export default BugEdit;
