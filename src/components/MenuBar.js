import React from 'react'


const MenuBar = (props) => {

      /*

      The 'a' tags below are the menu items. Think about the way a menu
      should work. When you click a menu item, the button typically becomes
      'active' to indicate that it is currently selected. How could we achieve
      this programatically? What other behavior do we expect when we click
      on a menu item? Do we need state in this component, and if not, how can
      this component be made aware of what is currently the active menu item?

      */


	const setActive = (event) => {
		props.setStatus(event.target.id)
		// event.target.className = "item active"
	}

	return (
      <div className="ui four item menu">
            <a className={`item ${props.status === "profile" ? "active" : ""}`} id="profile" onClick={setActive}>
            	<i className="user large icon"/>
            </a>

            <a className={`item ${props.status === "photo" ? "active" : ""}`} id="photo" onClick={setActive}>
            	<i className="photo large icon"/>
            </a>

            <a className={`item ${props.status === "cocktail" ? "active" : ""}`} id="cocktail" onClick={setActive}>
            	<i className="cocktail large icon"/>
            </a>

            <a className={`item ${props.status === "pokemon" ? "active" : ""}`} id="pokemon" onClick={setActive}>
            	<i className=" themeisle large icon"/>
            </a>
      </div>
      )

}

export default MenuBar
