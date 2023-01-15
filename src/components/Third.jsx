import React, { useState } from 'react'



function Third() {

	const initNotes = [
		{
			id: 'GYi9G_uC4gBF1e2SixDvu',
			prop1: 'value11',
			prop2: 'value12',
			prop3: 'value13',
		},
		{
			id: 'IWSpfBPSV3SXgRF87uO74',
			prop1: 'value21',
			prop2: 'value22',
			prop3: 'value23',
		},
		{
			id: 'JAmjRlfQT8rLTm5tG2m1L',
			prop1: 'value31',
			prop2: 'value32',
			prop3: 'value33',
		},
	]

    const [notes1, setNotes1] = useState(initNotes)
	const id = 'W2i1joiIJOiwqj2ioj3'

    const result1 = notes1.map(note => {
		
        return <p key={note.id}>
				<span>{note.prop1}</span>
				<span>{note.prop2}</span>
				<span>{note.prop3}</span>
				<button onClick={delete1(id)}>Delete</button>
			</p>
    })
	function delete1(id) {
		setNotes1(notes1.filter(note => note.id !== id))
	}
	

  return (
    <div>
        {result1}
    </div>
  )
}

export default Third;