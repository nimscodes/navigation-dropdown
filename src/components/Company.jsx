import Dropdown from "./Dropdown";

const Company = () => {
  const list = [
    { text: 'History' },
    { text: 'Our Team' },
    { text: 'Blog' },
  ];
  return <Dropdown label="Company" options={list} pos='left-0' />;
};

export default Company;
