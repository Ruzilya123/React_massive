import React from 'react'
import { useState } from 'react';

function Massive() {

    const [notes1, setNotes1] = useState([1, 2, 3, 4, 5])
    const [notes2, setNotes2] = useState([1, 2, 3, 4, 5])
    const [notes3, setNotes3] = useState([1, 2, 3, 4, 5])
    const [notes4, setNotes4] = useState([1, 2, 3, 4, 5])
    const [notes5, setNotes5] = useState(['a', 'b', 'c', 'd', 'e'])
    const [value5, setValue5] = useState('')
    const [notes6, setNotes6] = useState(['a', 'b', 'c', 'd', 'e'])
    const [notes7, setNotes7] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [notes8, setNotes8] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
    const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [editNum2, setEditNum2] = useState(null)
	const [value, setValue] = useState('')


    const result1 = notes1.map((note, index) => {
        return <p key={index} onClick={() => remItem1(index)}>{note}</p>
    })
    function remItem1(index) {
        setNotes1([...notes1.slice(0, index), ...notes1.slice(index + 1)])
    }
    const result2 = notes2.map((note, index) => {
        return <p key={index} onClick={() => remItem2(index)}>{note}</p>
    })
    function remItem2() {
        setNotes2([...notes2, 6])
    }
    const result3 = notes3.map((note, index) => {
        return <p key={index} onClick={() => remItem3(index)}>{note}</p>
    })
    function remItem3(index) {
        setNotes3([...notes3.slice(0, index), '!', ...notes3.slice(index + 1)])
    }
    const result4 = notes4.map((note, index) => {
        return <p key={index} onClick={() => remItem4()}>{note}</p>
    })
    function remItem4() {
        let copy = Object.assign([], notes4)
        copy.reverse()
        setNotes4(copy)
    }
    const result5 = notes5.map((note, index) => {
        return <li key={index}>
                    {note}
                    <input value={value5} 
                    onChange={event => setValue5(event.target.value)} />
                    <button onClick={() => setNotes5([...notes5, value5, setValue5('')])}>ADD</button>
                </li>
    })
    const result6 = notes6.map((note, index) => {
        return <li key={index}>
                    {note}
                    <button onClick={() => setNotes6([...notes6.slice(0, index), ...notes6.slice(index + 1)])}>DELETE</button>
                </li>
    })
    function getSum(arr) {
        let sum = 0
        for (const elem of arr) {
            sum += +elem
        }
        return sum / 9
    }
	const result8 = notes8.map((note, index) => {
		return <li key={index} onClick={() => setEditNum(index)}>
			{note}
            <button onClick={() => setNotes8([...notes8.slice(0, index), 'hello', ...notes8.slice(index + 1)])}>Edit</button>
		</li>;
	});
	function changeItem(event) {
		setNotes8([...notes8.slice(0, editNum), event.target.value, ...notes8.slice(editNum + 1)]);
	}
	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => setEditNum(index)}>
			{note}
		</p>
	})
	function changeItem(event) {
		setNotes([...notes.slice(0, editNum2), event.target.value,...notes.slice(editNum2 + 1)]);
	}
	function stopEdit() {
		setEditNum2(null);
	}
	function changeValue(event) {
		setValue(event.target.value)
	}
	function addItem() {
		setNotes([...notes, value]);
	}
	let input;
	if (editNum2) {
		input = <input
			value={notes[editNum2]}
			onChange={changeItem}
			onBlur={stopEdit}
		/>
	} else {
		input = <input
			value={value}
			onChange={changeValue}
			onBlur={addItem}
		/>
	}
    return (
        <div>
            Task 1 при нажатии на цифру, появляется 6
            {result2}
            Task 2 при нажатии на цифру, она удаляется
            {result1}
            Task 3 при нажатии на цифру, она меняется на !
            {result3}
            Task 4 при нажатии на цифру, массив переворачивается
            {result4}
            Task 5, 6
            <ul>
                {result5}
            </ul>
            Task 7
            <ul>
                {result6}
            </ul>
            Task 8
            <p>{getSum(notes7)}</p>
            Task 9, 10
            {result8}
            <p><input value={editNum ? notes8[editNum] : ''} onChange={changeItem} /></p>
            Task 11
            {result}
		    {input}
        </div>
    )
}

export default Massive;