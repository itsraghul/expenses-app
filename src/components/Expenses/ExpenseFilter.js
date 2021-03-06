import './ExpenseFilter.css';



const ExpenseFilter =(props)=>{
    const filterChangeHandler =(event)=>{
        props.onSaveFilterYear(event.target.value);
    };
    return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter By Year</label>
          <select value= {props.selected} onChange={filterChangeHandler}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>
      </div>
    );
};

export default ExpenseFilter;