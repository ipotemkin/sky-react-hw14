import React from 'react'
import { Provider } from 'react-redux'
import { render } from "@testing-library/react"


import { store } from './app/store'
import './index.css'

export const AllProviders = ({ children }) =>
    <Provider store={store}>{children}</Provider>


export const customRender = (ui, options) =>
    render(ui, { wrapper: AllProviders, ...options })

// reexport all from @testing-library/react
export * from "@testing-library/react"

// override render method
export { customRender as render }
