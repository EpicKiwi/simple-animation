class Agent {

	constructor(agentElement){

		if(! (agentElement instanceof HTMLElement)){
			throw new Error("Element provided is not an HTML element")
		}

		this.el = agentElement

		this.$setDefaultCss()
	}

	goTo(x,y){
		let bb = this.el.getBoundingClientRect()
		this.el.style.transform = `translateX(${x - bb.width / 2}px) translateY(${y - bb.height / 2}px)`
	}

	goToElement(target, position = Agent.CENTER){

		if(! (target instanceof HTMLElement)){
			throw new Error("Target is not an HTML element")
		}

		let coords = this.$getElementPosition(target,position)
		this.goTo(coords.x,coords.y)

	}

	//// INTERNAL FUNCTIONS ////

	$setDefaultCss(){
		let s = this.el.style
		s.transition = "ease 500ms transform"
		s.position = "absolute"
		s.left = 0
		s.top = 0
	}

	$getElementPosition(target,position = Agent.CENTER){
		let bb = target.getBoundingClientRect()

		switch(position){

			case Agent.CENTER:
				return {
					x: bb.left + bb.width / 2,
					y: bb.top + bb.height / 2
				}

			case Agent.NORTH:
				return {
					x: bb.left + bb.width / 2,
					y: bb.top
				}

			case Agent.SOUTH:
				return {
					x: bb.left + bb.width / 2,
					y: bb.top + bb.height
				}

			case Agent.WEST:
				return {
					x: bb.left,
					y: bb.top + bb.height / 2
				}

			case Agent.EAST:
				return {
					x: bb.left + bb.width,
					y: bb.top + bb.height / 2
				}

			case Agent.NORTHWEST:
				return {
					x: bb.left,
					y: bb.top
				}

			case Agent.NORTHEAST:
				return {
					x: bb.left + bb.width,
					y: bb.top
				}

			case Agent.SOUTHWEST:
				return {
					x: bb.left,
					y: bb.top + bb.height
				}

			case Agent.SOUTHEAST:
				return {
					x: bb.left + bb.width,
					y: bb.top + bb.height
				}

		}

	}

}

Agent.NORTH = "north"
Agent.SOUTH = "south"
Agent.WEST = "west"
Agent.EAST = "east"
Agent.NORTHWEST = "northwest"
Agent.NORTHEAST = "northeast"
Agent.SOUTHWEST = "southwest"
Agent.SOUTHEAST = "southeast"
Agent.CENTER = "center"
