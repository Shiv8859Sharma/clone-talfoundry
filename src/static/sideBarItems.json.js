const profileItems = [
  { dataTab: 'tab1', label: 'My Profile' },
  { dataTab: 'tab2', label: 'Password and Security' },
  { dataTab: 'tab3', label: 'Get Paid' },
  { dataTab: 'tab4', label: 'Membership' },
  { dataTab: 'tab5', label: 'Tax Information' },
  { dataTab: 'tab6', label: 'Notifications Settings' },
];

const jobItems = [
  { dataTab: 'tab1', label: 'All Jobs' },
  { dataTab: 'tab2', label: 'Active Jobs' },
  { dataTab: 'tab3', label: 'Ongoing Jobs' },
  { dataTab: 'tab4', label: 'Completed Jobs' },
  { dataTab: 'tab5', label: 'Saved Drafts' },
];

const cloudExpertItems = [
  { dataTab: 'tab1', label: 'All Cloud Experts' },
  { dataTab: 'tab2', label: 'My Hires' },
  { dataTab: 'tab3', label: 'Saved Cloud Expert' },
];

const jobDetailItems = [
  { dataTarget: 'panel-1', label: 'Job Title' },
  { dataTarget: 'panel-2', label: 'Description' },
];

const defaultItems = [
  { dataTarget: 'Default Tab 1', label: 'Default Content 1' },
  { dataTarget: 'Default Tab 2', label: 'Default Content 2' },
  { dataTarget: 'Default Tab 3', label: 'Default Content 3' },

]

let sideBarItems = { profileItems, jobItems, cloudExpertItems, jobDetailItems, default: defaultItems }

export default sideBarItems