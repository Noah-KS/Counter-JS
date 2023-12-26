export const ProgressBar = ({ progressDone }) => {
    return (
      <div className="container">
        <div className="filler" style={{ width: `${progressDone}%` }}>
        </div>
      </div>
    );
  };
  

export default ProgressBar
