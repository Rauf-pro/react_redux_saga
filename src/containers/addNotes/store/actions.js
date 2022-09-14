


//action is simply a javascript function
//type: mandatory
//additional parameter that you can pass to that particular action

import {INIT_SAVE_NOTES_VALUE, SAVE_NOTES_VALUE_FAILED, SAVE_NOTES_VALUE_SUCCESSFULL} from './actionTypes'

export function initSaveNotesValue(noteValue){
    return {
        type: INIT_SAVE_NOTES_VALUE,
        noteValue
    }
}

export function initSaveNotesValueSuccesfull(success){
    return {
        type: SAVE_NOTES_VALUE_SUCCESSFULL,
        success
    }
}

export function initSaveNotesValueFailed(failed){
    return {
        type: SAVE_NOTES_VALUE_FAILED,
        failed
    }
}