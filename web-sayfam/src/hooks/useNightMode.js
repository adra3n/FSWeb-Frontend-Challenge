import useLocalStorage from './useLocalStorage'

const useNightMode = (initialState) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialState)

  return [darkMode, setDarkMode]
}

export default useNightMode
