import React, { useState } from 'react'

export default () => {
  const [greet, setGreet] = useState('')

  return (
    <div className="page">
      <div className="title">To whom am I speaking?</div>
      <input type="text" name="search" onChange={(event) => { setGreet(event.target.value) }} value={greet} />
      <div className="greet">{greet}</div>
    </div>
  )
}
