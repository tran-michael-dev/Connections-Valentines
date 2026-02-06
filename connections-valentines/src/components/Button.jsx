import './Button.css'

function Button({ name, func }) {

  return (
    <button 
    onClick={func}
    className='btn'
    >
      <p className='btn-name'>{name}</p>
    </button>
  )
}

export default Button