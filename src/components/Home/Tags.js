import React from 'react';
import agent from '../../agent';


const Tags = props => {
	const tags = props.tags;
	if (tags) {
		return (
			<div classname="tag-list">
				{
					tags.map(tag => {
						const handleClick = e =>{
							e.preventDefault();
							props.onClickTag(tag, agent.Articles.byTag(tag));
						}

						return (
							<a href=""
								classname="tag-default tag-pill"
								key={tag}
								onClick={handleClick}>
								{tag}
							</a>
						)
					})
				}
			</div>
		)
	} else {
		return (
			<div>Loading tags...</div>
		)
	}
}

export default Tags;