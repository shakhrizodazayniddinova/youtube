import { render } from "@testing-library/react";
import Header from "../Header";

// Snapshot test for the Header component using test() instead of it()
test('Header component should match the snapshot', () => {
    const {container} = render(<Header/>);

    // Take a snapshot of the rendered component
    expect(container).toMatchSnapshot();
});