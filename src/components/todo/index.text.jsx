import { render } from "@testing-library/react"
import { Todo } from "."


describe('<Todo />', () => {
    it('should render successfully and match snapshot', () => {
        const container = render(<Todo />)

        expect(container).toMatchSnapshot()
    })
})
