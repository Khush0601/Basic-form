import React, { memo } from 'react'

const ChildMemo = () => {
    console.log('child component')
  return (
    <div>ChildMemo</div>
  )
}

export default memo(ChildMemo)