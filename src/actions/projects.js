import { GET_PROJECTS } from './types'
import { db } from '../firestore'

export const getProjects = () => async dispatch => {
    try {
        const subscribe = await db.collection('projects').orderBy('level').get()
        const data = subscribe.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        const rdata = data.reverse()

        dispatch({
            type: GET_PROJECTS,
            payload: rdata
        }) 
    } catch (error) {
        console.log(error)
    }

}
