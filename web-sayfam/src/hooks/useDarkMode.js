import useLocalStorage from './useLocalStorage'

const useTheme = (initialState) => {
  const [theme, setTheme] = useLocalStorage(
    localStorage.getItem('mode') === 'dark' ? 'dark' : 'light'
  )

  return [theme, setTheme]
}

export default useTheme
