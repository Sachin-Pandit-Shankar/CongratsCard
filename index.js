const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="main-card">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="name">Kiran V</h1>
      <p className="text">
        Vishnu institute of Computer Education and Technology
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
