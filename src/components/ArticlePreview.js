import React from 'react';

const ArticlePreview = props => {
	const article = props.article;
	return (
		<div>
			<div className="article-preview">
				<a><img src={article.author.image} /></a>
			</div>
			<div className="info">
				<a className="author">{article.author.username}</a>
			</div>
			<span className="date">
				{new Date(article.createdAt).toDateString()}
			</span>
			<div className="pull-xs-right">
				<button className="btn btn-sm btn-outline-primary">
					<i className="ion-heart">{article.favoritesCount}</i>
				</button>
			</div>
			<a to={`article/${article.slug}`} className="preview-link">
				<h1>{article.title}</h1>
				<p>{article.description}</p>
				<span>Read more...</span>
				<ul className="tag-list">
					{article.tagList.map(tag => {
						return (
							<li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
						)
					})}
				</ul>
			</a>
		</div>
	)
	
}

export default ArticlePreview;