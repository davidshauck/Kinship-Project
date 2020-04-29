import React from "react";
import { FormBtn } from "../Form";
import { SearchConsumer } from '../../SearchProvider'
import {withRouter} from 'react-router';
import "./searchForm.css";

function SearchForm() { 
  
  return (
    <form className="search">
      <div className="form-group input-field">
        <SearchConsumer>
          {context => (
          <React.Fragment>

          <input
            value={context.state.search}
            onChange={context.state.handleInputChange}
            name="category"
            list="categories"
            type="text"
            className={"search-bar"}
            placeholder="Find info for...."
            id="category"
          />
          <datalist id="categories">
            {context.state.categories.map(category => (
              <option value={category} key={category} />
            ))}
          </datalist>
          {/* <Link to={"/students/"}> */}
          <FormBtn 
            button={context.state.button}
            className={context.state.className}
            value={context.state.search}
            onClick={context.state.handleFormSubmit}
            // onClick={this.state.history.push('/students')}
          />
          </React.Fragment>
          )}
        </SearchConsumer>
      </div>
    </form>
  );
}

export default withRouter(SearchForm);
