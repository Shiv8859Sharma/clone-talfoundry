
const sign_up_validation_rules = {
    first_name: /^[a-zA-z\s]+$/,
    last_name: /^[a-zA-z\s]+$/,
    email : '',
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
    location: '',
    confirm_password: '',
    projectTermCondn: '',
    projectAgree: ''
}
const sign_up_error_message = {
    first_name: {
        wrong_value_message: 'Please enter a valid First Name'
    },
    last_name: {
        wrong_value_message: 'Please enter a valid Last Name'
    },
    password: {
        wrong_value_message: `Make sure it's at least 8 characters including a number, a lowercase & uppercase letter and a special character.`,
    },
    projectTermCondn: {
        null_value_message: "You must agree Talfoundry terms & conditions.",
    },
    projectAgree: {
        null_value_message: "Please check this checkbox.",
    }
}

const login_validation_rules = {
    email : '',
    password: '',
}

export let rules = {
    sign_up_validation_rules,
    sign_up_error_message,
    login_validation_rules,
    
}