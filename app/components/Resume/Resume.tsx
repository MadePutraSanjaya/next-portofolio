import React from 'react'
import ListResume from './ListResume';

const Resume = () => {
  return (
    <div className="section container mx-auto">
      <p className="text-3xl text-center font-semibold my-4">
        My resume 
      </p>
      <p className="text-gray-400 text-center w-96 mx-auto">
        My resume democratizes how long I have worked at the company
      </p>

    <div className="flex">
        <ListResume />
    </div>

    </div>
  )
}

export default Resume
