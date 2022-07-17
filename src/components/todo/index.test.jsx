import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Todo } from "."
import { store } from "../../app/store"

const todo = {
        id: 1,
        content: "test",
        completed: false
}


describe('<Todo />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(
            <Provider store={store}>
                <Todo todo={todo}/>
            </Provider>
        )

        expect(view).toMatchSnapshot()
    })

    it('should show a task content', () => {
        render(
            <Provider store={store}>
                <Todo todo={todo}/>
            </Provider>
        )

        expect(screen.getByText('test')).toBeInTheDocument()
    })

    it('should show ⏳', () => {
        render(
            <Provider store={store}>
                <Todo todo={todo}/>
            </Provider>
        )

        expect(screen.getByText('⏳')).toBeInTheDocument()
    })

    it('should show ✅', () => {
        const todo = {
            id: 1,
            content: "test",
            completed: true
        }
    
        render(
            <Provider store={store}>
                <Todo todo={todo}/>
            </Provider>
        )

        expect(screen.getByText('✅')).toBeInTheDocument()
    })

})
