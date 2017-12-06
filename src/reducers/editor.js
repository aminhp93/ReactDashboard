export default (state = {}, action) => {
	switch(action.type){
		case 'EDITOR_PAGE_LOADED':
			return {
				...state,
				articleSlug: action.payload ? action.payload.article.slug : '',
				title: action.payload ? action.payload.article.title : '',
				description: action.payload ? action.payload.article.description : '',
				body: action.payload ? action.payload.article.body : '',
				tagList: action.payload ? action.payload.article.tagList : '',
				tagInput: ''
			}
		case 'EDITOR_PAGE_LOADED':
			return {}
		case 'ARTICLE_SUBMITTED':
			return {
				...state,
				inProgress: null,
				errors: action.error ? action.payload.errors : null
			}
		case 'ASYNC_START':
			if (action.subtype === 'ARTICLE_SUBMITTED'){
				return {
					...state,
					inProgress: true
				}
			}
			return state
		case 'ADD_TAG':
			return {
				...state,
				tagList: state.tagList.concat([state.tagInput]),
				tagInput: ''
			};
		case 'REMOVE_TAG':
			return {
				...state,
				tagList: state.tagList.filter(tag => tag !== action.tag)
			}
		case 'UPDAT_FIELD_EDITOR':
			return {
				...state,
				[action.key]: action.value
			}
	}
	return state
}