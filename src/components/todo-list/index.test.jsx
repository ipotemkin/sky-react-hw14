import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { TodoList } from "."
import { store } from "../../app/store"


describe('<TodoList />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        )

        expect(view).toMatchSnapshot()
    })
})
