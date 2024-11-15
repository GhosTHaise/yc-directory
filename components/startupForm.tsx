'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  return (
    <form action={() => { }} className='startup-form'>
      <div>
        <label
          htmlFor="title"
          className='startup-form_label'>
          Title
        </label>
        <Input
          id='title'
          name='title'
          required
          placeholder='Startup Title'
          className='startup-form_input' />

      {
        errors.title && (
          <p className='startup-form_error'>
            {errors.title}
          </p>
        )
      }
      </div>
    </form>
  )
}

export default StartupForm
