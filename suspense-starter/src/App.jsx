import { useState } from "react"
import Header from "./components/Header"
import PostsList from "./components/PostsList"

function App() {
  const [currentUserId, setCurrentUserId] = useState(0)

  return (
    <>
      <Header
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <PostsList currentUserId={currentUserId} />
    </>
  )
}

export default App
