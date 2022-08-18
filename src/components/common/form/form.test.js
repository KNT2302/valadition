import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wait } from '@testing-library/user-event/dist/utils'
import { act } from 'react-dom/test-utils'
import App from '../../../App'

describe("Form should work exactly", () => {
  test("submit button is", async () => {
    render(<App />)
    userEvent.type(screen.getByRole("textbox", { name: "Text" }), "text")
    userEvent.type(screen.getByRole("textbox", { name: "Number" }), "1000")
    userEvent.type(screen.getByRole("textbox", { name: "Number phone" }), "123456789")
    userEvent.type(screen.getByRole("textbox", { name: "Email" }), "email@gmail.com")
    userEvent.click(screen.getByRole("checkbox", { name: "Checkbox 1" }))


    await waitFor(() => {
      expect(screen.getByRole("button")).toBeDisabled()
    })

    screen.debug()
  })
})
