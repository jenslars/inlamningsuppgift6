import Form from 'react-bootstrap/Form';
import SuccessButton from '../buttonModule';

//Modul för enkät som lägger till filmer

function AddMovieForm({ createMovie }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const rating = event.target.elements.rating.value;

    if (!title && rating === '0') {
      alert("Filmen måste ha ett betyg och en titel.");
  } else if (!title) {
      alert("Filmen måste ha en titel.");
  } else if (rating === '0') {
      alert("Filmen måste ha ett betyg.");
  } else { 
      createMovie(title, rating);
      event.target.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Titel:</Form.Label>
        <Form.Control name="title" type="text" placeholder="Namn på film..." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Betyg:</Form.Label>
        <Form.Select name="rating">
          <option value="0">Select a rating...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <SuccessButton type="submit">Add Movie</SuccessButton>
    </Form>
  );
}

export default AddMovieForm;
