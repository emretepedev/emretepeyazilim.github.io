/* eslint-disable camelcase */

import { defineNuxtPlugin } from '@nuxtjs/composition-api'

import { extend } from 'vee-validate'

import {
  email,
  integer,
  is_not,
  max,
  max_value,
  min,
  min_value,
  oneOf,
  required,
} from 'vee-validate/dist/rules'

export default defineNuxtPlugin(() => {
  extend('required', {
    ...required,
    message: 'The {_field_} field is required.',
  })

  extend('email', {
    ...email,
    message: 'The {_field_} must be a valid email address.',
  })

  extend('max', {
    ...max,
    message: 'The {_field_} must not be greater than {length} characters.',
  })

  extend('min', {
    ...min,
    message: 'The {_field_} must be at least {length} characters.',
  })

  extend('oneOf', {
    ...oneOf,
    message: 'The {_field_} must be included in the list of values.',
  })

  extend('is_not', {
    ...is_not,
    message:
      'The {_field_} must not be included in the given list of values. `{other}`',
  })

  extend('integer', {
    ...integer,
    message: 'The {_field_} must be numbers only.',
  })

  extend('min_value', {
    ...min_value,
    message: 'The {_field_} must be {min} or more.',
  })

  extend('max_value', {
    ...max_value,
    message: 'The {_field_} must be {max} or less.',
  })

  extend('decimal', {
    validate: (value, { decimals = '*', separator = '.' } = {}) => {
      if (value === null || value === undefined || value === '') {
        return {
          valid: false,
        }
      }
      if (Number(decimals) === 0) {
        return {
          valid: /^-?\d*$/.test(value),
        }
      }
      const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`
      const regex = new RegExp(
        `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
      )

      return {
        valid: regex.test(value),
      }
    },
    message: 'The {_field_} must contain only decimal values',
  })
})
