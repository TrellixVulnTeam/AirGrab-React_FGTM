import React from 'react'

export default function Demo() {
  const [count, setCount] = React.useState(0)
  // console.log(count, setCount);
  const add = () => { setCount(count + 1) }
  return (
    <div>
      <h2>
        {count}
      </h2>
      <button onClick={add}>add</button>
    </div>
  )
}


