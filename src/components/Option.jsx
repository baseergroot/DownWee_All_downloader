// src/components/Option.jsx
const Option = ({closeDisplay}) => {
  return (
    <div className="option" style={{display: closeDisplay}}>
        <h3>Menu</h3>
        <div>
            <a href="#home">Home</a>
            <a href="#how">How to download</a>
            <a href="#aboutdev">About Developer</a>
        </div>
    </div>
  );
};

export default Option;
