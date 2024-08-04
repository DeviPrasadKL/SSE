import React, { useEffect, useState } from 'react'

export default function EventSourceComponent() {
    const [text, setText] = useState("");

    useEffect(()=>{
        const eventSource = new EventSource('http://localhost:5000/events')

        eventSource.onmessage = (e)=>{
            setText(prev => prev + " " + e.data)
        }

        return(()=>{
            eventSource.close();
        })
    },[])

    return (
        <div>{text}</div>
    )
}
