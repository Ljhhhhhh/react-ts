import * as React from 'react'
import { withRouter } from 'react-router-dom'

const Basic = (props: any) => {
  const { children } = props;

  return (
    <div>
      <h2>空白布局</h2>
      {children}
    </div>
  )
}

export default withRouter(Basic);