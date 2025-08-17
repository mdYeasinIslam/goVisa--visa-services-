'use client'
import React, { useState } from 'react'
import Steps from './stepsTracker/Steps'
import FirstForm from './firstForm/FirstForm'

export default function FormPage() {
    const [current,setCurren] = useState(1)
  return (
      <div>
          <Steps current={current} />
          <FirstForm/>
    </div>
  )
}
