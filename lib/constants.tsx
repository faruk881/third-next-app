export type EventItem = {
    image: string,
    title: string,
    slug: string;
    location: string;
    date: string;
    time: string;
};

// Curated list of upcoming/popular events.
// Image assets live under public/images and can be used directly with next/image
// via paths like */images/event1.png.

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React summit us 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "9:00 AM",
    },
    {
        image: "/images/event1.png",
        title: "React summit us 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "9:00 AM",
    },
    {
        image: "/images/event1.png",
        title: "React summit us 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "9:00 AM",
    },
    {
        image: "/images/event1.png",
        title: "React summit us 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-11-07",
        time: "9:00 AM",
    }
]