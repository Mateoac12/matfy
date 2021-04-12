import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from './hook'

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())
    
    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should stay a same default language and rating', () => {
    const { result } = renderHook(() => useForm())

    expect(result.current.lang).toBe('en')
    expect(result.current.rating).toBe('g')
})