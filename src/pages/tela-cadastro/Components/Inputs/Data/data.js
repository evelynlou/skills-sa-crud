import './data.css'

const Data = (props) => {

  const handleDateChange = () => {
    props.onDateUpdate(document.getElementById('data_nascimento').value)
  };

  return (
    <div className='data'>
      <p id='p-title-data'>Data de nascimento:</p>
      <input
        type="date"
        id="data_nascimento"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Data;