import defaultlogo from './../assets/images/logo.svg'
import bonuslogo from './../assets/images/logo-bonus.svg'
import Image from 'next/image'
const Score = ({ game, score }) => {
  return (
    <div className='score bg-success'>
      <div className="score-components">
        {
          game.value === 'default' && (
            <Image src={defaultlogo} alt='Default game logo' />
          )
        }
        {
          game.value === 'full' && (
            <Image src={bonuslogo} alt='Bonus game logo' />
          )
        }
      </div>
      <div className="score-diplay">
        <span>SCORE</span>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default Score