import { noteModel } from "../models/model";

export function createNote(data) {
    const newNote = new noteModel(data);
    return newNote.save()
}


export function updateNoteByID(id, data){
    data["HistoryNote"] =  new Date()
    console.log(data)
    return noteModel.findByIdAndUpdate(id, data)
}

export function deleteNoteByID(id){
    return noteModel.findByIdAndRemove(id)
}

export function findManyNote(query) {
    let baseQuery = {};
    if (query.search) {
        baseQuery = {
            ...baseQuery,
            ...{
                Note: {
                    $regex: new RegExp(query.search, 'i')
                }
            }
        }
    } 
    if (query.customer) {
        baseQuery = {
            ...baseQuery,
            ...{
                Customer: {
                    $regex: new RegExp(query.customer, 'i')
                }
            }
        }
    }
    if (query.catagory) {
        baseQuery = {
            ...baseQuery,
            ...{
                CatagoryNote: {
                    $regex: new RegExp(query.catagory, 'i')
                }
            }
        }
    }
    return noteModel.find(baseQuery);
}
