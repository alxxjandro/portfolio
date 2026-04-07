export default function CustomButton({ text, onClick, variant = 'primary' }) {
  return (
    <button type="button" className={`customButton ${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}
