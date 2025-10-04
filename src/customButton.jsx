export default function CustomButton({ text, onClick, variant = 'primary' }) {
  return (
    <button className={`customButton ${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}
