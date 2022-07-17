import { AddTodo } from "."
import { render } from "../../test-utils"


describe('<AddTodo />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(<AddTodo />)

        expect(view).toMatchSnapshot()
    })
})
