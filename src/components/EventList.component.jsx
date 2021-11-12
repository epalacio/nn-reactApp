import { Fragment } from 'react';

export default function EventList({ events, handleClick }) {
    return (
        <div>
            {events.map((event) => (
                <Fragment key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleClick(event.id)}>delete event</button>
                </Fragment>
            ))}
        </div>
    )
}
