const Component1 = ({ age }) => {
  console.log(age); // This goes OUTSIDE the return

  return (
    <div>
      <h2>This is Component 1</h2>
      <p>Age is: {age}</p>
    </div>
  );
};

export default Component1;
