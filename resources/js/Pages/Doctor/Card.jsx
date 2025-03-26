import React from 'react'

const Card = ({ icon, color, count, text }) => (
    <div className="p-12 bg-[#1a1d21] rounded-2xl  flex flex-col gap-4 text-white">
      <h1 className="text-4xl items-center flex gap-1">
        <span>
          <i className={`hgi hgi-stroke ${icon} ${color}`}></i>
        </span>
        <span>{count}</span>
      </h1>
      <p>{text}</p>
    </div>
    );

export default Card
