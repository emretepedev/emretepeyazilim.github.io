/* eslint-disable camelcase */

import { extend } from 'vee-validate'

import {
    required,
    email,
    max,
    min,
    oneOf,
    is_not,
    integer,
} from 'vee-validate/dist/rules'

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
