
import { useState } from "react";

function User() {
    const [name, setName] = useState('ruz')
    const [lastname, setLastname] = useState('sal')
    const [age, setAge] = useState('16')
    const [count, setCount] = useState(0)
    const [ban, setBan] = useState(false)
    const [nm, setNm] = useState('kmwkd')
    const [ls, setLs] = useState('dncj')
    const [cnt, setCnt] = useState(0)
    const [banned, setBanned] = useState(false)
    const [year, setYear] = useState(0)
    const [far, setFar] = useState(0)
    const [val1, setVal1] = useState(0)
    const [val2, setVal2] = useState(0)
    const [val3, setVal3] = useState(0)
    const [val4, setVal4] = useState(0)
    const [val5, setVal5] = useState(0)
    const [val6, setVal6] = useState(0)
    const [val7, setVal7] = useState(0)
    const [result, setResult] = useState(0)
    const [fdate, setFdate] = useState(Date.now())
    const [sdate, setSdate] = useState(Date.now())
    const [result2, setResult2] = useState(0)
    const [val8, setVal8] = useState(0)
    const [val9, setVal9] = useState(0)
    const [val10, setVal10] = useState(0)
    const [val111, setVal111] = useState(0)
    const [val12, setVal12] = useState(true)
    const [val13, setVal13] = useState('ian')
    const [checked, setChecked] = useState(true)
    const [val14, setVal14] = useState(true)
    const [val15, setVal15] = useState(0)
    const [val16, setVal16] = useState('hello, user, have you 18 years old??')
    const [result3, setResult3] = useState('')
    const [val17, setVal17] = useState(true)
    const [val18, setVal18] = useState('Moskow')
    const [val19, setVal19] = useState('Moskow')
    const [val20, setVal20] = useState()
    const [val21, setVal21] = useState(1)
    const [val23, setVal23] = useState('prog')

    function clickHandler(){
        setCount(count+1)
    }
    function val11(event) {
        setNm(event.target.value)
    }
    function val22(event) {
        setLs(event.target.value)
    }
    function length(len) {
        setCnt(len.target.value.length)
    }
    function handleChange1(event) {
        setVal1(event.target.value)
    }
    function handleChange2(event) {
        setVal2(event.target.value)
    }
    function handleChange3(event) {
        setVal3(event.target.value)
    }
    function handleChange4(event) {
        setVal4(event.target.value)
    }
    function handleChange5(event) {
        setVal5(event.target.value)
    }
    function counting(num) {
        console.log(num)
        let sum = 0;
        let arr = num.split('');
    
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i]
        }
        console.log(sum)
        return <p>{sum}</p>
    }
    function counting2(number) {
        for (var i = 1; i <= number; i++) {
            if (number % i === 0 && number !== number && number !== 1) {

            }
        }
    }
    function checking(bool) {
        if (bool === true){
            return <p>Hello</p>
        }
        else {
            return ''
        }
    }
    const towns = ['Moskow', 'Sankt-Peterburg', 'Krasnodar']
    const options = towns.map((town, index) => {
        return <option key={index}>{town}</option>
    })
    const years = ['0-12', '13-17', '18-25', '25 and more']
    const option = years.map((year, index) => {
        return <option key={index}>{year}</option>
    })


    return (
      <div className="user">
        task 1
        <p>User name: {name}</p>
        <p>User lastname: {lastname}</p>
        <p>User age: {age}</p>
        task 2
        <p><button onClick={() => setName('eribh')}>Click me!</button></p>
        <p><button onClick={() => setLastname('eryviuv')}>Click me2!</button></p>
        task 3
        <p>{ban ? 'user banned' : 'user unbanned'}</p>
        task 4, 5
        <p><button onClick={() => setBan(!ban)}>ban!</button></p>
        task 6
        <p><span>{count}</span>
        <button onClick={clickHandler}>Count</button></p>
        task 7
        <p><input value={nm} onChange={val11} /></p>
        <p><input value={ls} onChange={val22} /></p>
        <p>{nm}</p>
        <p>{ls}</p>
        task 8
        <p><button onClick={() => setNm('iuvjknre')}>Click me!</button></p>
        <p><button onClick={() => setLs('iovweds')}>Click me!</button></p>
        task 9
        <p><input onChange={length}/></p>
        <p>{cnt}</p>
        <p><button onClick={() => setBanned ? 'display: inline' : 'display: none'} >Banning!</button></p>
        task 10
        <input onChange={event => setYear(2023 - event.target.value)}/>
        <p>{year}</p>
        task 11
        <input onChange={event => setFar((event.target.value - 32) * 5 / 9)}/>
        <p>{far}</p>
        task 12
        <p>
            <input value={val1} onChange={handleChange1}/>
            <input value={val2} onChange={handleChange2}/>
            <input value={val3} onChange={handleChange3}/>
            <input value={val4} onChange={handleChange4}/>
            <input value={val5} onChange={handleChange5}/>
        </p>
        <p>{(+val1 + +val2 + +val3 + +val4 + +val5) / 5}</p>
        task 13
        <p>
            <input value={val6} onChange={event => setVal6(event.target.value)} />
            <input value={val7} onChange={event => setVal7(event.target.value)} />
            <button onClick={() => setResult(Number(val6) + Number(val7))}>but</button>
            <button onClick={() => setResult(Number(val6) * Number(val7))}>but</button>
            <p>{result}</p>
        </p>
        task 14, 15
        <p>
            <input type="date" value={fdate} onChange={event => setFdate(event.target.value)} />
            <input type="date" value={sdate} onChange={event => setSdate(event.target.value)} />
            <button onClick={() => setResult2(
                (Math.ceil(Math.abs(new Date(fdate) - new Date(sdate)) / (1000 * 60 * 60 * 24)))
            )}>button</button>
            <p>{result2}</p>
        </p>
        task 16
        <p><input value={val8} onChange={event => setVal8(event.target.value)}  onBlur={counting(val8)} /></p>
        task 17
        <p><input value={val10} onBlur={event => setVal111(event.target.value)} /></p>
        <p>{counting2(val111)}</p>
        task 18 
        <input type="checkbox" checked={val12} onClick={() => setVal12(!val12)}/>
        <button onClick={() => setVal13(val12 ? 'Привет как дела' : 'Пока!')}>efjn</button>
        <p>{val13}</p>
        task 19 
        <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)}/>html <br />
        <input type="checkbox" checked={!checked} onClick={() => setChecked(checked)}/>css <br />
        <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)}/>js <br />
        <p>{checked}</p>
        Task 20
        <input type="checkbox" checked={val15} onClick={() => setVal15(!val15)}/>
        <button onClick={() => setVal16(val15 ? '<div>Привет!<div>' : 'Тебе нет 18!')}>efjn</button>
        <p>{val16}</p>
        Task 21
        <input type="checkbox" checked={val17} onClick={() => setVal17(!val17)}/>
        <p>{checking(val17)}</p>
        Task 22
        <p>
            <select value={val18} onChange={event => setVal18(event.target.value)}>
                <option>Moskow</option>
                <option>Sankt-Peterburg</option>
                <option>Krasnodar</option>
            </select>
        </p>
        <p>You select: {val18}</p>
        Task 23
        <p>
            <select value={val19} onChange={event => setVal19(event.target.value)}>
                {options}
            </select>
        </p>
        <p>You select: {val19}</p>
        Task 24
        <p>
            <select value={val20} onChange={event => setVal20(event.target.value)}>
                {option}
            </select>
        </p>
        Task 25
        <input type="radio" name="radio" value="1" checked={val21 === 1 ? true : false} onChange={event => setVal21(event.target.value)}/>
        <input type="radio" name="radio" value="2" checked={val21 === 2 ? true : false} onChange={event => setVal21(event.target.value)}/>
        <input type="radio" name="radio" value="3" checked={val21 === 3 ? true : false} onChange={event => setVal21(event.target.value)}/>
        <p>{val21}</p>
        Task 26
        <input type="radio" name="radio" value="JavaScript" checked={val23 === "JavaScript" ? 'Молодей! Ты топ!' : false} onChange={event => setVal23(event.target.value)}/>
        <input type="radio" name="radio" value="Python" checked={val23 === "Python" ? true : false} onChange={event => setVal23(event.target.value)}/>
        <input type="radio" name="radio" value="C++" checked={val23 === 'C++' ? true : false} onChange={event => setVal23(event.target.value)}/>
        <p>{val23}</p>
      </div>
    );
  }
  
  export default User;