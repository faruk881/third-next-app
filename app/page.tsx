import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database/event.model";
import { events } from "@/lib/constants"
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const Page = async () => {
    'use cache';
    cacheLife('hours');
    const response = await fetch(`${BASE_URL}/api/events`);
    const {events} = await response.json();
    return (
        <section>
            <h1 className="text-center">The Hub For every dev<br/> Event you can't miss</h1>
            <p className="text-center mt-5">All things together</p>
            <ExploreBtn/>
            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent) => (
                        <li className="list-none" key={event.title}>
                        <EventCard {...event}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    
  )
}

export default Page