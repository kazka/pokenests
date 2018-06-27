import React from 'react'
import { Spinner } from "@blueprintjs/core";

const Loading = ({}) => (
  <div className="loading-area">
    <Spinner className="pt-large" />
    <p className="loading-text">Loading...<br/>This may take a while.</p>
  </div>
)

export default Loading