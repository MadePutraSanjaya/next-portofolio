import React from 'react'

const Experience = () => {
  return (
    <>
      <div className="flex gap-9 justify-start mb-9">
        <div className="flex">
          <div className="bg-bgColor transition ease-in-out hover:-translate-y-1 py-4 px-6 rounded-md ">
            <div className="grid">
              <p className="font-semibold text-center text-2xl mb-2">3+</p>
              <div className="content-center grid ">
                <p className="text-sm font-light" target="_blank">
                  Years Of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-bgColor transition ease-in-out hover:-translate-y-1 py-4 px-6 rounded-md ">
            <div className="grid">
              <p className="font-semibold text-center text-2xl mb-2">20+</p>
              <div className="content-center grid ">
                <p className="text-sm font-light" target="_blank">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-bgColor transition ease-in-out hover:-translate-y-1 py-4 px-6 rounded-md ">
            <div className="grid">
              <p className="font-semibold text-center text-2xl mb-2">30+</p>
              <div className="content-center grid ">
                <p className="text-sm font-light" target="_blank">
                  Projects Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience
