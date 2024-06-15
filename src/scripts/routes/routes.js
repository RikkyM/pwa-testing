import Home from '../views/pages/home'
// import Favorite from '../views/pages/favorite'
import Like from '../views/pages/like'
import Detail from '../views/pages/detail'

const routes = {
  '/': Home,
  '/like': Like,
  '/detail/:id': Detail
}

export default routes
