import React from 'react'

function successPage({appointment}) {
    console.log(appointment)
  return (
    <main className="full-screen w-full flex flex-col items-center p-12 bg-[#13161a] gap-44">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <img src="./assets/logo.png" alt="CarePulse Logo" />
      <span className="font-plus text-neutral-200"></span>
    </div>

    {/* Confirmation Message */}
    <div className="flex text-neutral-200 flex-col items-center gap-4 justify-center font-medium font-plus">
      <div>
        <i className="hgi hgi-stroke hgi-checkmark-circle-01 text-green-500 text-7xl"></i>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl max-w-3xl text-center">
          Your <span className="text-green-500">appointment request</span> has been successfully submitted!
        </h1>
        <p>We'll be in touch shortly to confirm.</p>

        {/* Appointment Details */}
        <div className="flex items-center gap-5 p-12 border-t border-b border-b-neutral-800 border-t-neutral-800">
          <p>Requested appointment details:</p>
          <span className="border border-neutral-800 bg-[#1a1e21] flex gap-2 w-fit px-2 rounded py-1 items-center text-xs font-bold">
            <span className="inline-flex size-8 rounded-full bg-white"></span>
            <span>{appointment.doctor}</span>
          </span>
          <span className="flex items-center gap-2">
            <span>
              <i className="hgi hgi-stroke hgi-calendar-03 text-[#ffd147]"></i>
            </span>
            <span>{appointment.dateRendezVous}</span>
          </span>
        </div>
      </div>
    </div>
  </main>

  )
}

export default successPage