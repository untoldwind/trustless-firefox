import {Identity} from "../models";
import {Dispatch} from "redux";
import {State} from "../reducers";
import {createCommand, sendMessage} from "./messaging";

export type UPDATE_IDENTITIES = 'UPDATE_IDENTITIES';
export const UPDATE_IDENTITIES: UPDATE_IDENTITIES = 'UPDATE_IDENTITIES';

export type UpdateIdentitiesAction = {
    type: UPDATE_IDENTITIES,
    identities: Identity[]
}

function updateIdentities(identities: Identity[]): UpdateIdentitiesAction {
    return {
        type: UPDATE_IDENTITIES,
        identities: identities
    }
}

export function doUpdateIdentities() {
    return (dispatch: Dispatch<State>) => {
        sendMessage(createCommand('identities'), (response: Identity[]) => {
            dispatch(updateIdentities(response));
        });
    }
}