import React, { useState } from "react";

export const Tags = (props) => {
    const [tags, setTags] = useState({all: props.tags ? props.tags : []});
    
    const removeTags = indexToRemove => {
      setTags({all: [...tags.all.filter((_, index) => index !== indexToRemove)]});
    };

    const addTags = event => {
      console.log("Adding tag")
      if (event.target.value !== "") {
        setTags({all: [...tags.all, event.target.value]});
        props.selectedTags([...tags.all, event.target.value]);
        event.target.value = "";
      }
    };
    return (
      <div className="tags-input">
        <ul id="tags">
          {tags.all.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="col-12 signup-boxes"
          onKeyUp={event => event.keyCode == 32 ? addTags(event) : null}
          placeholder="Press enter to add tags"
        />
      </div>
    );
  };
