import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <div>
      <div className="title-group">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h3>Subscribe for updates</h3>
        <p>
          Enter your details below to receive service alerts and product updates
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Header;
