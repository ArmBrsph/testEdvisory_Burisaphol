import { Router, query ,request, response } from "express";
import { createNote, deleteNoteByID, findManyNote, getAllNote, updateNoteByID } from "./service";

export const noteRouter = Router();


noteRouter.post('/notes', async (request, response) => {
    try {
        const note = await createNote(request.body);
        response.send(note);
    } catch (error) {
        response.status(500).send(error);
    }
})


noteRouter.patch('/notes/:id', async (request, response) => {
    try {
        const updated = await updateNoteByID(request.params.id, request.body)
        response.send(updated);
    } catch (error) {
        response.status(500).send(error);
    }
})

noteRouter.delete('/notes/:id', async (request, response) => {
    try {
        await deleteNoteByID(request.params.id)
        response.send({Deleted : request.params.id});
    } catch (error) {
        response.status(500).send(error);
    }
})


noteRouter.get('/notes', async (request, response) => {
    try {
        const list = await findManyNote(request.query);
        response.send(list)
    } catch (error) {
        response.status(500).send(error);
    }
});