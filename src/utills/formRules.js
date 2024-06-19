
const sign_up_validation_rules = {
    first_name: /^[a-zA-z\s]+$/,
    last_name: /^[a-zA-z\s]+$/,
    email: '',
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
    email: '',
    password: '',
}

const SendInvationForm_validation_rules = {
    job: '',
    inviteText: '',
}

const SendInvationForm_error_message = {
    job: {
        null_value_message: "Please select a job.",
    },
    inviteText: {
        null_value_message: "This field can't be blank.",
    }
}

const HireFreelancerForm_validation_rules = {
    job: '',
    rateType: '',
}

const HireFreelancerForm_error_message = {
    job: {
        null_value_message: "Please select a job.",
    },
    rateType: {
        null_value_message: "Please select a job type.",
    }
}

export let rules = {
    sign_up_validation_rules,
    sign_up_error_message,
    login_validation_rules,
    SendInvationForm_validation_rules,
    SendInvationForm_error_message,
    HireFreelancerForm_validation_rules,
    HireFreelancerForm_error_message
}