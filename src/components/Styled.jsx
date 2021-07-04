export const Styled = () => {
  return (
    <>
      <div className="container">
        <p className="text"> Styled JSX </p>
        <button className="button">OK</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 1px #392eff;
          border-radius: 10px;
          padding: 10px;
          margin: 10px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .text {
          margin: 0;
          color: #ffe000;
        }
        .button {
          background: #ff0000;
          border: none;
          color: #ffffff;
          padding: 6px;
          margin: 6px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};
