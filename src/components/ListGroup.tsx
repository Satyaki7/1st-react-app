//import { Fragment } from "react/jsx-runtime"; ----> there is another way

function ListGroup() {
  const items = ["Hello", "Hi", "This is working"];
  return (
    //React.createElement('h1'); erokom type er js execute hoi background e
    //<Fragment> we can use a <div> too and fragment too using fragment removes the unecessary div.
    // just using <> </> means that you are using fragment without importing it and telling js to wrap this children elements
    <>
      {/* you cant use for loop in jsx */}
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("working")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
