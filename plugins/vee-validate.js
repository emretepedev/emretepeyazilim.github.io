import { extend, setInteractionMode } from 'vee-validate'
import {
    required,
    alpha_dash,
    max,
    min,
    email,
    oneOf,
    regex,
} from 'vee-validate/dist/rules'

setInteractionMode('eager')

extend('required', {
    ...required,
    message: 'The {_field_} field is required.',
})

extend('alpha_dash', {
    ...alpha_dash,
    message:
        'The {_field_} must only contain letters, numbers, dashes and underscores.',
})

extend('max', {
    ...max,
    message: 'The {_field_} must not be greater than {length} characters.',
})

extend('min', {
    ...min,
    message: 'The {_field_} must be at least {length} characters.',
})

extend('email', {
    ...email,
    message: 'The {_field_} must be a valid email address.',
})

extend('oneOf', {
    ...oneOf,
    message: 'The selected {_field_} is invalid.',
})

extend('regex', {
    ...regex,
    message: 'The {_field_} format is invalid.',
})
