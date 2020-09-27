import {connect} from 'react-redux';
import {submitCalcForm} from '../../actions/calcFormActions';
import {Form} from '../../components/calc/Form';
import {IRootState} from '../../types/IRootState';

const mapStateToProps = (state: IRootState) => ({
  data: state.calcForm.data
});

const mapDispatchToProps = (dispatch: any) => ({
  onSubmit: (data: any) => dispatch(submitCalcForm(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
