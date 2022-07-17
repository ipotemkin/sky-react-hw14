import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { AddTodo } from "."
import { store } from "../../app/store"


describe('<AddTodo />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(
            <Provider store={store}>
                <AddTodo />
            </Provider>
        )

        expect(view).toMatchSnapshot()
    })
})
