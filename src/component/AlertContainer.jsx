
function AlertContainer({ alertType, message }) {

    const alertClass = 'alert alert-'+alertType

  return (
    <div className={alertClass} role="alert">
        {message}
    </div>
  )
}

export default AlertContainer