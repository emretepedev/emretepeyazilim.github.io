import { extend, setInteractionMode } from 'vee-validate'

import {
    required,
    max,
    min,
    oneOf,
    regex,
    is_not,
    integer,
} from 'vee-validate/dist/rules'

setInteractionMode('aggressive')

extend('required', {
    ...required,
    message: 'The {_field_} field is required.',
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

extend('regex', {
    ...regex,
    message: 'The {_field_} must not match the regular expression. `{regex}`',
})

extend('integer', {
    ...integer,
    message: 'The {_field_} must be numbers only.',
})

extend('is_not', {
    ...is_not,
    message:
        'The {_field_} must not be included in the given list of values. `{other}`',
})
