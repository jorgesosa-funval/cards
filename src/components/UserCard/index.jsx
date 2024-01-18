import React from 'react'

export default function UserCard() {
    return (

        <div
            class="block w-64 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    class="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                    alt="" />
            </div>
            <div class="p-6">
                 <h3><b>Name:</b> {}</h3>
                 <h3><b>Email:</b>{}</h3>
                 <div className='flex justify-between items-center'><span><b>Age:</b>{}</span> <span><b>ID:</b>{}</span></div>
            </div>
        </div>
    )
}
