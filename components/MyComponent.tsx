"use client"

import { useEffect } from "react"
import { toast } from "sonner"

const MyComponent = () => {
    useEffect(() => {
        toast.success("This is the toast that will be shown.")
    }, [])
    return (
        <div>
            <button className="bg-blue-500 text-stone-50 border-2 border-slate-900 py-2 px-4 rounded-lg mt-4" onClick={() => toast.info('You clicked the button.')}>Show toast</button>
        </div>
    )
}

export default MyComponent