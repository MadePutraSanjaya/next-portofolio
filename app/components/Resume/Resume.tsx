import React from 'react'
import ListResume from './ListResume';

const Resume = () => {
  return (
    <div className="container mx-auto" id="resume">
      <p className="text-3xl text-center font-semibold my-4">
        My resume 
      </p>
      <p className="text-gray-400 text-center w-96 mx-auto mb-9">
        My resume democratizes how long I have worked at the company
      </p>

    <div className="flex justify-center">
        <ListResume />
    </div>

    </div>
  )
}

export default Resume
