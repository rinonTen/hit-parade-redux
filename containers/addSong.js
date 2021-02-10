import { connect } from 'react-redux';
import { addSong } from '../actions';
import FormComponent from '../Components/FormComponent';

const mapDispatchToState  = {
    handleForm: addSong
}
  
export default connect(null, mapDispatchToState) (FormComponent);