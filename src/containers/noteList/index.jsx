import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initGetListData } from './store/actions'
import './style.css'



const NoteList = ()=>{

    const dispatch = useDispatch();
    const {notesList, isNotesDataFetching} = useSelector(state => state.NotesListReducer);
    
    //dispatch action to get data from api

    useEffect(()=>{

        dispatch(initGetListData())

    },[]) //run only once on page load -> componentdidmount

    if(isNotesDataFetching) {
        return (
            <div>Notes data is loading! please wait</div>
        )
    }



    return(
        <div className="notes-list-wrapper">

            <h1>Notes List</h1>

            <ul>
            {notesList && notesList.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
         

            </ul>
        </div>
    )
}

export default NoteList;