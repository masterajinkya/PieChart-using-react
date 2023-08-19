import React, { useEffect, useState } from 'react'
import Chart from "chart.js/auto"

function Piechart() {

    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [error, setError] = useState('')

    const handleData1 = (e) =>{
        setData(e.target.value)
    }

    useEffect(() =>{
        if(data !== ''){
            setData2(100 - Number(data))
        }
    }, [data])

    const handleData2 = (e) =>{
        setData2(e.target.value)
    }

    useEffect(() =>{
        if(data2 !== ''){
            setData(100 - Number(data2))
        }
    }, [data2])


    const handleChart = (e) => {
        e.preventDefault()
        const handleChart = document.getElementById("chart");
        if (!error & data !== '') {
            new Chart(handleChart, {
                type: 'pie',
                data: {
                    labels: ["data", "data2"],
                    datasets: [{
                        label: "Chart Data",
                        data: [data, data2],
                        backgroundColor: ['green', 'red'],
                    }]
                },
            });
        } else {

        }
    }

    useEffect(() => {
        if (data > 100 || data2 > 100) {
            setError('Please enter proper value.')
        } else {
            setError('')
        }
    }, [data, data2])

    const styles = {height:'600px', width:'450px', margin: '30px auto'}
  return (
    <>

        <form onSubmit={handleChart}>
            <div className=' row d-flex mt-3'>
                <div className='form-group col-sm-3'>
                    <label>Box1</label>
                    <input value={data} onChange={handleData1} type='text' id='box1' className='form-control'/>
                    <p className='text-danger'>{error}</p>
                </div>

                <div className='form-group col-sm-3'>
                    <label>Box2</label>
                    <input  value={data2} onChange={handleData2} type='text' id='box2' className='form-control'/>
                </div>

                <div className='col-sm-2 text-center mt-4'>
                    <button className='btn btn-primary ' type='submit'>Create Chart</button>
                </div>
            </div>
        </form>


        <div style={styles}>
            <canvas id='chart'>

            </canvas>
        </div>
    </>
  )
}

export default Piechart
