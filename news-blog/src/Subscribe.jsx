// import React from 'react'

export const Subscribe = () => {
  return (
    <div className="flex bg-gray-100 w-[80vw] h-[20vh] items-center mx-[190px] justify-between rounded-xl">
        <div className="flex flex-col mx-11 items-start space-y-2">
            <h3>GET FIRST UPDATE</h3>
            <p className="font-bold text-3xl">Get the news in front line by</p>
            <p className="font-bold text-3xl"><span className="text-red-600">subscribe</span> our latest updates</p>
        </div>
        <form className="mx-[100px] space-x-4">
            <input placeholder="Your email" className="h-[50px] w-[400px] rounded p-2"></input>
            <button className="bg-red-600 text-white rounded h-[50px] w-[150px] text-xl">Subscribe</button>
        </form>
    </div>
  )
}
