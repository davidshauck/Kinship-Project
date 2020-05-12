
import React from "react";
import "./tags.css";

class Tags extends React.Component {
    constructor() {
      super();
      
      this.state = {
        tags: [
        ]
      };
    }
    
    removeTag = (i) => {
      const newTags = [ ...this.state.tags ];
      newTags.splice(i, 1);
      this.setState({ tags: newTags });
    }
  
    inputKeyDown = (e) => {
      const val = e.target.value;
      if (e.key === 'Enter' && val || e.key === "," && val ) {
        if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
          return;
        }
        this.setState({ tags: [...this.state.tags, val]});
        this.tagInput.value = null;
        this.tagInput = "";
      } else if (e.key === 'Backspace' && !val) {
        this.removeTag(this.state.tags.length - 1);
      }
    }
  
    render() {
      const { tags } = this.state;
  
      return (
        <div className="input-tag">
          <ul className="input-tag__tags">
            { tags.map((tag, i) => (
              <li key={tag}>
                {tag}
                <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
              </li>
            ))}
            <li className="input-tag__tags__input"><input type="text" placeholder="Add search tags (e.g., Italian, kids, etc.)" onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
          </ul>
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <InputTag />,
//     document.getElementById('content')
//   );

export default Tags;
  