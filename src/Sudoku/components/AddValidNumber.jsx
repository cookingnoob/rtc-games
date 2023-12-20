import useSubmitValues from "../hooks/useSubmitValues";

const AddValidNumber = () => {
  const {handleSubmit} = useSubmitValues()

  return <button onClick={() => handleSubmit()}>Colocar numero</button>;
};

export default AddValidNumber;

