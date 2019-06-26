const schema = {
  id: {
    name: 'id',
    label: 'Visit ID',
  },
  logNumber: {
    name: 'logNumber',
    label: 'Log Number',
  },
  status: {
    name: 'status',
    label: 'Status',
    options: [
      { value: 'draft', label: 'draft' },
      { value: 'pending', label: 'Pending' },
      { value: 'completed', label: 'Completed' },
    ],
  },
  fiscalYear: {
    required: true,
    name: 'fiscalYear',
    label: 'Fiscal Year',
  },
  visitStartDate: {
    required: true,
    name: 'visitStartDate',
    label: 'Visit Start Date',
  },
  visitEndDate: {
    required: true,
    name: 'visitEndDate',
    label: 'Visit End Date',
  },
  visitTime: {
    required: true,
    name: 'visitTime',
    label: 'Visit Time',
  },
  onGoing: {
    required: true,
    name: 'onGoing',
    label: '24/7 On Going',
    options: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' },
    ],
  },
  contactPrimary: {
    required: true,
    name: 'contactPrimary',
    label: 'Primary Contact',
  },
  contactSecondary: {
    required: true,
    name: 'contactSecondary',
    label: 'Secondary Contact',
  },
  campus: {
    required: true,
    name: 'campus',
    label: 'Campus',
    options: [
      { value: 'campus-1', label: 'campus-1' },
      { value: 'campus-2', label: 'campus-2' },
      { value: 'campus-3', label: 'campus-3' },
    ],
  },
  room: {
    required: true,
    name: 'room',
    label: 'Room / Location',
    options: [
      { value: 'room-1', label: 'room-1' },
      { value: 'room-2', label: 'room-2' },
      { value: 'room-3', label: 'room-3' },
    ],
  },
  roomOther: {
    name: 'roomOther',
    label: 'Other Room / Location',
  },
  accessArea: {
    required: true,
    name: 'accessArea',
    label: 'Access Area',
    options: [
      { value: 'room-1', label: 'room-1' },
      { value: 'room-2', label: 'room-2' },
      { value: 'room-3', label: 'room-3' },
    ],
  },
  accessAreaOther: {
    name: 'accessAreaOther',
    label: 'Other Access Area',
  },
  companyName: {
    required: true,
    name: 'companyName',
    label: 'Company Name',
  },
  visitReason: {
    required: true,
    name: 'visitReason',
    label: 'Visit Reason',
    tag: 'textarea',
  },
  specialInstructions: {
    name: 'specialInstructions',
    label: 'Special Instructions',
    tag: 'textarea',
  },
  visitors: {
    name: 'visitors',
    visitorNumber: {
      name: 'visitorNumber',
      label: 'Visitor Number',
    },
    visitorName: {
      required: true,
      name: 'visitorName',
      label: 'Visitor Name',
    },
    securedArea: {
      name: 'securedArea',
      label: 'Secured Area',
      options: [
        { value: 'none', label: 'None' },
        { value: 'custodial', label: 'Custodial' },
        { value: 'tmsBasic', label: 'TMS Basic' },
        { value: 'tmsPremium', label: 'TMS Premium' },
        { value: 'vendor', label: 'Vendor' },
      ],
    },
    badgeType: {
      required: true,
      name: 'badgeType',
      label: 'Badge Type',
      options: [
        { value: 'badge', label: 'Badge' },
        { value: 'sticky', label: 'Sticky' },
      ],
    },
  },
};

export default schema;
