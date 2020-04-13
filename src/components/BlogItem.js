import React from 'react'
import Button from './Button';

export default function BlogItem({onDelete, blog:{title, author, subject, article, objectId}}) {
    return (
        
            <div className="ui card" style={{width:"75%", padding:'20px'}}>
						<div className="content">
							<div className="header">{title}</div>
                            {/* <p>Index: {i + 1 } objectId: {objectId}</p> */}
							<br/>
							<div className="meta">Author: {author}</div>
							<div className="meta">Subject: {subject}</div>
							<hr/>
							<div className="description">{article}
							</div>
                            
                            <Button 
                            className="ui primary button"
                            style={{ margin: '10px 15px'}}
                            onClick={() => {
                                return onDelete(objectId);
                            }}
                            >
                                Delete
                            </Button>
                            <Button 
                            className="ui primary button"
                            style={{ backgroundColor: 'green'}}
                            onClick={() => {
                                return console.log(objectId);
                            }}
                            >
                                Update
                            </Button>
						</div>
				</div>
        
    )
}
