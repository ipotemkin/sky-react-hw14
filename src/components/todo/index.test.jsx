import { screen } from "@testing-library/react"
import { render } from "../../test-utils"
import { Todo } from "."

const todo = {
        id: 1,
        content: "test",
        completed: false
}


describe('<Todo />', () => {
    it('should render successfully and match snapshot', () => {
        const view = render(<Todo todo={todo}/>)

        expect(view).toMatchSnapshot()
    })

    it('should show a task content', () => {
        render(<Todo todo={todo}/>)

        expect(screen.getByText('test')).toBeInTheDocument()
    })

    it('should show ⏳', () => {
        render(<Todo todo={todo}/>)

        expect(screen.getByText('⏳')).toBeInTheDocument()
    })

    it('should show ✅', () => {
        const todo = {
            id: 1,
            content: "test",
            completed: true
        }
    
        render(<Todo todo={todo}/>)

        expect(screen.getByText('✅')).toBeInTheDocument()
    })

})
