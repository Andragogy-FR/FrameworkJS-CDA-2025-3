import { describe, expect, test } from "vitest"
import { render, screen } from '@testing-library/react'
import WelcomeMessage from "./WelcomeMessage"
/*
- Welcome Message Component
--- Say Welcome
*/
describe('Welcome Message Component', () => {
    test('Say Welcome', () => {
        render(<WelcomeMessage />)
        expect(screen.getByText(/Bienvenue/i)).toBeDefined()
    })
    test('Say Hello', () => {
        render(<WelcomeMessage />)
        expect(screen.findAllByText("Bonjour")).not.toBe()
    })
    test('Say Welcome to someone', () => {
        render(<WelcomeMessage namePeople="someone"/>)
        expect(screen.getByText(/Bienvenue/i)).toBeDefined()
        expect(screen.getByText(/someone/i)).toBeDefined()
    })
})
