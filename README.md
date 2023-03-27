# React Testing Framework

There are three types of Testing: Integration, unit and e2e
Jest is the Testing Framework

## Basic Test

```` 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
````
## Script for running the test
### npm test

## Wrrting test with 3 A's
3 As

Arrange: set up the testdata, test conditions and test envrironment
Act: Run logic that should be tested(eg exectution function)
Assert (compare execution results with expected results)


## Test Suites and Test cases

## Async Test check
I need to check whether my components behave correctly 







