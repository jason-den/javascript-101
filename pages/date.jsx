import React from 'react'
const _ = require('lodash')

const OOP = () => {
  // date and time
  const date1 = () => {
    let now = new Date()
    console.log(now)
  }
  // create date

  const randomIntInRange = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomDateAroundToday = (low, high) => {
    let d = new Date()
    d.setDate(d.getDate() + randomIntInRange(low, high))
    return d
  }

  const date2 = () => {
    let d = randomDateAroundToday(-30, 30)
    console.log(d)
  }
  const date3 = () => {
    let ds = [randomDateAroundToday(-100, 100), randomDateAroundToday(-100, 100)]
    let d1 = _.min(ds)
    let d2 = _.max(ds)
    console.log(d1, d2, d1 < d2)
  }

  return (
    <div>
      <button onClick={date1}>date1</button>
      <button onClick={date2}>date2</button>
      <button onClick={date3}>date3</button>
    </div>
  )
}

export default OOP
