// src/components/MenuIcon.jsx
const MenuIcon = ({menuDisplay}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={{display: menuDisplay}}
    >
      <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
    </svg>
  );
};

export default MenuIcon;
