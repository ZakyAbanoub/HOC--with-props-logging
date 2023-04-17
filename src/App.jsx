import "./App.css";

const withPropsLogging = (WrappedComponent) => {
  return function WithPropsLogging(props) {
    console.log(props);
    console.log(`component was given props: ${JSON.stringify(props)}`);
    return <WrappedComponent {...props} />;
  };
};

const MyComponent = (props) => `<Text>${props?.name}</Text>`;

const MyComponentWithLogging = withPropsLogging(MyComponent);

MyComponentWithLogging({ name: "foo" }); // logs the string: 'component was given props: {"name": "foo"}'
MyComponentWithLogging({ name: "bar" }); // logs the string: 'component was given props: {"name": "bar"}'
MyComponentWithLogging(); // logs the string: 'component was given props: undefined'

function App() {
  return (
    <div className="App">
      <MyComponentWithLogging name="Foo bar" />
    </div>
  );
}

export default App;
