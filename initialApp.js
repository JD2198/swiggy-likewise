// React code

      // creating h1 tag inside react

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 */    

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")] // giving two elements as siblings in array form
    )
);

    //   const heading = React.createElement(
    //     "h1", 
    //     {id: "heading"}, 
    //     "Hello world from React"
    // );
    // react.createElement is a object
    //   console.log(heading); // this will give object, heading is a react element, a normal js object 

      // we have to put h1 inside our dom into our browser so that we will use reactDOM lib to create root method
      const root = ReactDOM.createRoot(document.getElementById("root")); // root is the place where all the react code runs

    //   root.render(heading); // rendering heading inside root

 root.render(parent);   