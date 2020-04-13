import React from 'react'
import {searchIt} from '../services/search';
import BlogItem from './BlogItem'

const Blogs  = (props) => {
    return (
        <div>
            {props.blogs.filter(searchIt(props.searchTerm)).map((blog,i)=>{
				return(
                    <BlogItem onDelete={props.onDelete} blog={blog} key={blog.objectId} />
					// <div key={objectId} className="ui card" style={{width:"75%", padding:'20px'}}>
					// 	<div className="content">
					// 		<div className="header">{title}</div>
                    //         {/* <p>Index: {i + 1 } objectId: {objectId}</p> */}
					// 		<br/>
					// 		<div className="meta">Author: {author}</div>
					// 		<div className="meta">Subject: {subject}</div>
					// 		<hr/>
					// 		<div className="description">{article}
					// 		</div>
                    //         <button 
                    //         className="ui primary button"
                    //         style={{ margin: '10px 15px'}}
                    //         onClick={() => {
                    //             return props.onDelete(objectId);
                    //         }}
                    //         >
                    //             Delete
                    //         </button>
					// 	</div>
					// </div>
				)
			})}
        </div>
    )
}

export default Blogs