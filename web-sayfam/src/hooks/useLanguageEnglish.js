import useLocalStorage from './useLocalStorage'

const useLanguageEnglish = (initialState) => {
  const [english, setEnglish] = useLocalStorage('english', initialState)

  return [english, setEnglish]
}

export default useLanguageEnglish
