import { call, takeEvery, put } from "@redux-saga/core/effects";
import { INIT_GET_LIST_DATA } from "./actionTypes";
import axios from "axios";
import { initFetchingGetListData, initFetchingGetListDataSuccessfull } from "./actions";






export default function* NoteListSaga(){
    yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga)

}

function* getNotesListSaga() {

    //loading state to check whether data is loading or not

    yield put(initFetchingGetListData());
    
    try{
      const response = yield call(axios.get, 'https://react-notes-app-2022-2c59d-default-rtdb.firebaseio.com/notesList.json');

      if(response && response.status === 200){
        const {data} = response;

        const createData = [];

        for(const key in data){
            createData.push(data[key])
        }

        yield put(initFetchingGetListDataSuccessfull(createData))
      }
      
    }
    catch(error) {

    }
}