import { TodoList } from "."
import { render } from "../../test-utils"


describe('<TodoList />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(<TodoList />)

        expect(view).toMatchSnapshot()
    })
})
