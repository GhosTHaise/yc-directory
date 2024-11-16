'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';

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

      <div>
        <label
          htmlFor="description"
          className='startup-form_label'>
          Description
        </label>
        <Textarea
          id='description'
          name='description'
          required
          placeholder='Startup Title'
          className='startup-form_textarea' />

      {
        errors.description && (
          <p className='startup-form_error'>
            {errors.description}
          </p>
        )
      }
      </div>

      <div>
        <label
          htmlFor="category"
          className='startup-form_label'>
          Category
        </label>
        <Input
          id='category'
          name='category'
          required
          placeholder='Startup Category (Teach, Health, Education ...)'
          className='startup-form_input' />

      {
        errors.category && (
          <p className='startup-form_error'>
            {errors.category}
          </p>
        )
      }
      </div>

      <div>
        <label
          htmlFor="link"
          className='startup-form_label'>
          Image URL
        </label>
        <Input
          id='link'
          name='link'
          required
          placeholder='Startup Image URL'
          className='startup-form_input' />

      {
        errors.link && (
          <p className='startup-form_error'>
            {errors.link}
          </p>
        )
      }
      </div>
    </form>
  )
}

export default StartupForm
