import type { NextPage } from 'next'
import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import Link from 'next/link'

const Game: NextPage = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [userGuess, setUserGuess] = useState(0);

  useEffect(() => {
    generateRandomNumber();
  }, [])

  const generateRandomNumber = (): void => {
    let newRandomNumber: number = Math.floor(Math.random() * 10) + 1;
    setRandomNumber(newRandomNumber);
  }

  const getUserGuess = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserGuess(event.target.valueAsNumber)
  }

  const checkUserGuess = (): void => {
    if (userGuess === randomNumber) {
      alert('CORRECT')
    } else {
      alert('TRY AGAIN')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>Guess A Number Between 1 - 10</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            onChange={(e) => getUserGuess(e)}
            min={1}
            max={10}
            type={'number'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={() => checkUserGuess()}>Guess</button>
        </div>
      </div>
      {/* <Link href={"/"}>
        <button>
          Go Back
        </button>
      </Link>   */}
    </div>
  )
}

export default Game
