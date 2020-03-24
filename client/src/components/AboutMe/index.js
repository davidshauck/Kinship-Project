import React, { Component } from "react";
import Dave from "./dave.jpg"
import "./aboutme.css";
class AboutMe extends Component {

  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-4">
            <img className="headshot" alt="..." src={Dave} />
          </div>
          <div className="col-8 main-header">
            <h2>Intelligent. Creative. Driven.</h2>
            <div className="subhead">These are adjectives. Dave Hauck knows these adjectives. He knows how to spell them. He knows how to pronounce them. And he knows how to use them in complete sentences. He knows many other adjectives, too. Like thick. And plaid. And unflinchingly. Actually that's an adverb; he struggles a bit with adverbs. But he also knows lots of nouns and some family-friendly verbs, too. If you are looking for a project manager or web developer with a background in design, editing and management, who knows lots of words, Dave is your man.
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default AboutMe;
