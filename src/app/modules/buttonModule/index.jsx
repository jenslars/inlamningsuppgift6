import Button from 'react-bootstrap/Button';

//Modul för submit-knapp importerad från Bootstrap

function SuccessButton({ type }) {
    return (
      <>
        <Button variant="success" type={type}>Spara film</Button>{' '}
      </>
    );
}

export default SuccessButton;