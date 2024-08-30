const Hours = () => {
  return (
    <div className="card">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <div className="main-content text-center">
        <h1>Hours</h1>
        <h2>
          Monday - Friday
        </h2>
        <p>8:00am - 6:00pm</p>
        <h2>
          Saturday
        </h2>
        <p>9:00am - 5:00pm</p>
        <h2>
          Sunday
        </h2>
        <p>Closed</p>
      </div>
    </div>
  );
};

export default Hours;