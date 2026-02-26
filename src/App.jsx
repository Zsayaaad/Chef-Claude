import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   );
// }

export const App = () => {
  const signUp = (formData) => {
    // e.preventDefault();
    // const formElements = e.target;
    // const formData = new FormData(formElements);

    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employmentStatus");
    // const employeeSkills = formData.getAll("skills");
    // const favColor = formData.get("favColor");

    // QUICK SHORTCUT TO GET ALL FORMS FROM ONE LINE
    const data = Object.fromEntries(formData);
    const employeeSkills = formData.getAll("skills");

    const allData = { ...data, skills: employeeSkills };

    console.log(allData);
  };

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
          defaultValue="joe@schmoe.com"
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="password123"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              value="unemployed"
              defaultChecked={true}
            />
            Unemployed
          </label>

          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>

          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Employee Skills:</legend>
          <label>
            <input type="checkbox" name="skills" value="web-development" />
            Web Development
          </label>
          <label>
            <input type="checkbox" name="skills" value="graphic-design" />
            Graphic Design
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="data-analysis"
              defaultChecked={true}
            />
            Data Analysis
          </label>
        </fieldset>

        <label htmlFor="favColor">What is yr fav color?</label>
        <select name="favColor" id="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
};

// export const App = () => {
//   const [contact, setContact] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (212) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false,
//   });

//   let starIcon = contact.isFavorite ? "/star-filled.png" : "/star-empty.png";

//   function toggleFavorite() {
//     setContact((prevContact) => ({
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite,
//     }));
//   }

//   return (
//     <main>
//       <article className="card">
//         <img
//           src="/user.png"
//           className="avatar"
//           alt="User profile picture of John Doe"
//         />
//         <div className="info">
//           <button
//             onClick={toggleFavorite}
//             aria-pressed={contact.isFavorite}
//             aria-label={
//               contact.isFavorite ? "Remove from favorites" : "Add to favorites"
//             }
//             className="favorite-button"
//           >
//             <img
//               src={starIcon}
//               alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
//               className="favorite"
//             />
//           </button>
//           <h2 className="name">
//             {contact.firstName} {contact.lastName}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//         </div>
//       </article>
//     </main>
//   );
// };

// export const App = () => {
//   const [myFavoriteThings, setMyFavoriteThings] = useState([]);

//   const allFavoriteThings = [
//     "💦🌹",
//     "😺",
//     "💡🫖",
//     "🔥🧤",
//     "🟤🎁",
//     "🐴",
//     "🍎🥧",
//     "🚪🔔",
//     "🛷🔔",
//     "🥩🍝",
//   ];

//   const thingsElements = myFavoriteThings.map((thing) => (
//     <p key={thing}>{thing}</p>
//   ));

//   function addFavoriteThing() {
//     // not recommended to edit on the stat `myFavoriteThings` or any reference on it like in call back here `prevFavThings`
//     // don't do => prevFavThings.push()
//     // the way we can update the array in react is by providing a brand new arr includes all of previous states and the current one also

//     setMyFavoriteThings((prevFavThings) => [
//       ...prevFavThings,
//       allFavoriteThings[prevFavThings.length],
//     ]);
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">{thingsElements}</section>
//     </main>
//   );
// };

// export const App = () => {
//   const [isGoingOut, setIsGoingOut] = useState(false);

//   const handleChangeMind = () => {
//     // setIsGoingOut((prev) => !prev);
//     setIsGoingOut(!isGoingOut);
//   };

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button
//         onClick={handleChangeMind}
//         className="value"
//         aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
//       >
//         {isGoingOut ? "Yes" : "No"}
//       </button>
//     </main>
//   );
// };

// export const App = () => {
//   const [count, setCount] = useState(0);

//   const add = () => {
//     setCount(count + 1);
//   };

//   const sub = () => {
//   // using callback func
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className="minus" aria-label="Decrease count" onClick={sub}>
//           -
//         </button>
//         <h2 className="count">{count}</h2>
//         <button className="plus" aria-label="Increase count" onClick={add}>
//           +
//         </button>
//       </div>
//     </main>
//   );
// };

// export const App = () => {
//   const handleClick = () => {
//     console.log("onMouseOver");
//   };
//   return (
//     <main>
//       <button onMouseOver={handleClick}>Hover me</button>
//     </main>
//   );
// };

export default App;
