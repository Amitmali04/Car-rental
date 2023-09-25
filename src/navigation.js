export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
];


export const customerNavOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "booking",
    label: "Booking List",
    path: "/bookinglist",
  },
];

export const adminNavOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "adminList",
    label: "All Cars",
    path: "/agent-view/all-cars",
  },
  {
    id: "adminNewCar",
    label: "Add New New",
    path: "/agent-view/add-car",
  },
  {
    id: "adminUserList",
    label: "User List",
    path: "/agent-view/user-list",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "agent",
        label: "Agent",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];


