import type { NextPage } from 'next'
import Link from 'next/link'

const Game: NextPage = () => {
  return(
    <div>
      Hello World
      <Link href={"/"}>
        Go Back
      </Link>  
    </div>

  )
}

export default Game;