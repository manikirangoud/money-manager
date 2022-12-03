import { EventActions } from "../../constants.tsx";
import { addDoc, getDocs } from 'firebase/firestore';
import { EventsRef } from "../../helpers/firebase";

// To fetch all evnets data
const getEvents = (events) => ({
    type: EventActions.GET_EVENTS,
    data: events
})

export const getEventsInit = () => {
    return async function(dispatch){
        const eventsData = await getDocs(EventsRef);
        const events = []
        eventsData.docs.map(doc => {
            events.push({...doc.data(), id: doc.id});
        })
        dispatch(getEvents(events));
    }
}

// To add event to firestore
const addEvent = () => ({
    type: EventActions.ADD_EVENT,
})

export const addEventInit = (event) => {
    return function(dispatch){
        addDoc(EventsRef, event);
        dispatch(addEvent());
    }
}