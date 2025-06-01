export default function Alert({ show }) {
  return (
    <>
      <div className={`alert alert-success my-2 ${show}`} role="alert">
        Form inviato con successo!
      </div>
    </>
  );
}
