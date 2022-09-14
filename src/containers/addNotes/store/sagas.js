import {takeEvery, call, put} from 'redux-saga/effects';
import { INIT_SAVE_NOTES_VALUE } from './actionTypes';
import axios from 'axios'
import { initSaveNotesValueFailed, initSaveNotesValueSuccesfull } from './actions';




//watcher saga
//put -> put value into your action and then this will dispatch the value to action->reducer
//call -> calling any api
//takevery, takelatest


export default function* AddNotesSaga(){
    yield takeEvery(INIT_SAVE_NOTES_VALUE , saveNotesSaga )
}



function* saveNotesSaga(action){
    //api call and get response back from api

    const headerParams = {
        'content-type' : 'application/json'
    }

    const createFinalNotesData = {
        name : action.noteValue,
        id : Math.floor(Math.random()*100)
    }
    console.log(createFinalNotesData);

    try{
        const response = yield call(axios.post, 'https://react-notes-app-2022-2c59d-default-rtdb.firebaseio.com/notesList.json',createFinalNotesData, {headers : headerParams})
        
        if(response.status === 200) {
            yield put(initSaveNotesValueSuccesfull(true))
        }
        console.log(response);
    }

    catch(error){
        //check our errors if any
        yield put(initSaveNotesValueFailed(true))
    }
}