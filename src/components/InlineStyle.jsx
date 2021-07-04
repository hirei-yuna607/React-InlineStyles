export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #392eff",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titlerStyle = {
    margin: "0",
    color: "#ffe000"
  };
  const buttonStyle = {
    background: "#ff0000",
    border: "none",
    color: "#ffffff",
    padding: "6px",
    margin: "6px",
    borderRadius: "10px"
  };
  return (
    <div style={containerStyle}>
      <p style={titlerStyle}> Inline Styles </p>
      <button style={buttonStyle}>OK</button>
    </div>
  );
};
