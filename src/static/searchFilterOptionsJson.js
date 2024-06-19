let searchFilterOptionsJson = [
    {
        label: 'Location',
        inputType: 'select',
        placeholder: 'Select Country',
        name: 'location',
        options: ['India', 'Pakistan', 'Bhutan']
    },
    {
        label: 'Job category',
        inputType: 'checkbox',
        labelCountKey: 'job_category',
        fields: [
            { label: 'Engineers', value: 'engineers', checked: false, type: 'checkbox', name: 'job_category' },
            { label: 'Developers', value: 'developer', checked: false, type: 'checkbox', name: 'job_category' },
            { label: 'Designers', value: 'designer', checked: false, type: 'checkbox', name: 'job_category' },
            { label: 'Architects', value: 'architects', checked: false, type: 'checkbox', name: 'job_category' },
        ]
    },
    {
        label: 'Platforms',
        inputType: 'checkbox',
        labelCountKey: 'platforms',
        fields: [
            { label: 'Salesforce', value: 'salesforce', checked: false, type: 'checkbox', name: 'platforms' },
            { label: 'AWS', value: 'aws', checked: false, type: 'checkbox', name: 'platforms', countKey: 'Amazon' },
            { label: 'Oracle', value: 'oracle', checked: false, type: 'checkbox', name: 'platforms' },
            { label: 'MS Azure', value: 'MS Azure', checked: false, type: 'checkbox', name: 'platforms' },
            { label: 'Google Cloud', value: 'Google Cloud', checked: false, type: 'checkbox', name: 'platforms' },
        ]
    },
    {
        label: 'Experience Level',
        inputType: 'checkbox',
        labelCountKey: 'experience_level',
        fields: [
            { label: 'Beginner', value: 'fresher', checked: false, type: 'checkbox', name: 'experience_level', countKey: 'Fresher' },
            { label: 'Intermediate', value: 'intermediate', checked: false, type: 'checkbox', name: 'experience_level' },
            { label: 'Expert', value: 'expert', checked: false, type: 'checkbox', name: 'experience_level' },
        ]
    },
    {
        label: 'Certification',
        inputType: 'checkbox',
        labelCountKey: 'certification',
        fields: [
            { label: 'Required', value: 'Required', checked: false, type: 'checkbox', name: 'certification' },
            { label: 'Not required', value: 'Not required', checked: false, type: 'checkbox', name: 'certification' },
        ]
    },
    {
        label: 'Job Type',
        inputType: 'checkbox',
        labelCountKey: 'job_type',
        fields: [
            {
                label: 'Hourly', value: 'hourly', checked: false, type: 'checkbox', name: 'job_type',
                nestedInput: {
                    label: 'Less than $10 - $100+', value: 'hourly', min: "0", max: "100", step: "10", type: 'range', name: 'job_hourly_range'
                }
            },
            {
                label: 'Fixed-Price', value: 'fixed price', checked: false, type: 'checkbox', name: 'job_type',
                nestedInput: {
                    type: 'radio',
                    fields: [
                        { label: 'Less than $100', value: 'Less than $100', checked: false, type: 'radio', name: 'job_fixed_range' },
                        { label: 'Less than $500', value: 'Less than $500', checked: false, type: 'radio', name: 'job_fixed_range' },
                        { label: '$500 - $1k', value: '$500 - $1k', checked: false, type: 'radio', name: 'job_fixed_range' },
                        { label: '$1k - $5k', value: '$1k - $5k', checked: false, type: 'radio', name: 'job_fixed_range' },
                        { label: '$5k+', value: '$5k+', checked: false, type: 'radio', name: 'job_fixed_range' },
                    ]
                }
            },
        ]
    },
    {
        label: 'Number of Proposals',
        inputType: 'checkbox',
        labelCountKey: 'number_of_proposals',
        fields: [
            { label: 'Less than 5', value: 'Less than 5', checked: false, type: 'checkbox', name: 'number_of_proposals' },
            { label: '5 to 10', value: '5 to 10', checked: false, type: 'checkbox', name: 'number_of_proposals' },
            { label: '10 to 15', value: '10 to 15', checked: false, type: 'checkbox', name: 'number_of_proposals' },
            { label: '15 to 20', value: '15 to 20', checked: false, type: 'checkbox', name: 'number_of_proposals' },
            { label: '20 to 50', value: '20 to 50', checked: false, type: 'checkbox', name: 'number_of_proposals' },
        ]
    },
    {
        label: 'Client payment info',
        inputType: 'checkbox',
        labelCountKey: 'client_info',
        fields: [
            { label: 'Payment verified clients', value: 'Payment verified clients', checked: false, type: 'checkbox', name: 'client_info' },
            { label: 'Previous client', value: 'Previous client', checked: false, type: 'checkbox', name: 'client_info' },
        ]
    },
    {
        label: 'Project length',
        inputType: 'checkbox',
        labelCountKey: 'project_length',
        fields: [
            { label: 'Less than 1 month', value: 'Less than 1 month', checked: false, type: 'checkbox', name: 'project_length' },
            { label: '1 - 3 months', value: '1 - 3 months', checked: false, type: 'checkbox', name: 'project_length' },
            { label: '3 - 6 months', value: '3 - 6 months', checked: false, type: 'checkbox', name: 'project_length' },
            { label: 'More than 6 months', value: 'More than 6 months', checked: false, type: 'checkbox', name: 'project_length' },

        ]
    },
    {
        label: 'Time requirement',
        inputType: 'checkbox',
        labelCountKey: 'time_requirement',
        fields: [
            { label: 'Less than 40 hours', value: 'Less than 40 hours', checked: false, type: 'checkbox', name: 'time_requirement' },
            { label: 'More than 40 hours', value: 'More than 40 hours', checked: false, type: 'checkbox', name: 'time_requirement' },
        ]
    },
    {
        label: 'Client time zones',
        inputType: 'timeZone',
        name: 'time_zone',
        placeholder: 'Select time zone',
        options: []
    },
]

export default searchFilterOptionsJson