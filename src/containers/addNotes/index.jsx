import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {  initSaveNotesValue, initSaveNotesValueSuccesfull } from "./store/actions";
import { useNavigate } from "react-router-dom";

const AddNewNote = () => {
  const [notesName, setNotesName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {success} = useSelector(state=>state.AddNotesReducer);

  console.log(success);

  useEffect(()=>{
    //resetting the form value
    //navigate to list page
    //reset success action as false again
    if(success){
      setNotesName('')
      navigate('/')
      dispatch(initSaveNotesValueSuccesfull(false))
    }

  },[success])

  const handleOnChange = (event) => {
    const { value } = event.target;

    setNotesName(value);
  };
  //usedispatch method
  const handleClick = () => {
    dispatch(initSaveNotesValue(notesName));
  };
  return (
    <div className="add-new-note-wrapper">
      <h1>Add New Note</h1>

      <div className="form-wrapper">
        <input
          name="addTodo"
          placeholder="Enter Todo Name"
          onChange={handleOnChange}
          value={notesName}
        />
        <button disabled={notesName.trim() === ''} onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddNewNote;
