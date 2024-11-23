/** @format */

import "./App.css";

function App() {
  return (
    <main>
      <h1>
        400 <span>.000</span>
      </h1>{" "}
      <form>
        <div className="basic">
          <input type="text" placeholder={"20000 Mobile"} />
          <input type="datetime-local"></input>
        </div>
        <div className="description">
          <input type="text" placeholder={"description"}></input>
        </div>
        <button>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Headphones</div>
            <div className="description">
              It was the time to buy new headphones , old were damaged
            </div>
          </div>
          <div className="right">
            <div className="price red">3000</div>
            <div className="datetime">01-2024</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Headphones</div>
            <div className="description">
              It was the time to buy new headphones , old were damaged
            </div>
          </div>
          <div className="right">
            <div className="price green">3000</div>
            <div className="datetime">01-2024</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Headphones</div>
            <div className="description">
              It was the time to buy new headphones , old were damaged
            </div>
          </div>
          <div className="right">
            <div className="price red">3000</div>
            <div className="datetime">01-2024</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Headphones</div>
            <div className="description">
              It was the time to buy new headphones , old were damaged
            </div>
          </div>
          <div className="right">
            <div className="price green">3000</div>
            <div className="datetime">01-2024</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
