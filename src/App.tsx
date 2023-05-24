import * as S from './styles'

const App = () => {
  const username = sessionStorage.getItem('user')
  
  return (
    <S.Home>
      <h1>Oi, {username}</h1>
    </S.Home>
  )
}

export default App
