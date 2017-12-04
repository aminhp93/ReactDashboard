import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';

import ArticleList from '../ArticleList';


const mapStateToProps = state => ({
	// articles: state.articleList.articles
	...state.articleList,
	token: state.common.token
})

const TagFilterTag = props => {
	if (!props.tag){
		return null;
	}

	return (
		<li className="nav-item">
			<a href="" className="nav-link active">
				<i className="ion-pound"></i>{props.tag}
			</a>
		</li>
	)
}


const YourFeedTab = props => {
	console.log(15, props)
	if (props.token){
		const clickHandler = e => {
			e.preventDefault();
			props.onTabClick('feed', agent.Articles.feed());
		}

		return (
			<li className="nav-item">
				<a href=""
					className={ props.tab === 'feed' ? 'nav-link active' : 'nav-link' }
					onClick={clickHandler}>
					Your feed
				</a>
			</li>
		)
	}
	return null
}

const GlobalFeedTab = props => {
	console.log('Global', props)
	const clickHandler = e => {
		e.preventDefault();
		props.onTabClick('all', agent.Articles.all())
	}

	return (
		<li className="nav-item">
			<a href=""
				className={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
				onClick={clickHandler}>
				Glabal feed
			</a>
		</li>
	)
}

const mapDispatchToProps = dispatch => ({
	onTabClick: (tab, payload) => dispatch({
		type: 'CHANGE_TAB',
		tab,
		payload
	})
})

const MainView = props => {
	return (
		<div className="col-md-9">
			<div className="feed-toggle">
				<ul className="nav nav-pills outline active">

					<YourFeedTab
						token={props.token}
						tab={props.tab}
						onTabClick={props.onTabClick}/>

					<GlobalFeedTab
						tab={props.tab}
						onTabClick={props.onTabClick}/>

					<TagFilterTag
						tag={props.tag}/>
				</ul>
			</div>
			<ArticleList articles={props.articles}/>
		</div>
	);
	
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)