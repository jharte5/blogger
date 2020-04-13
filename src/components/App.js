import React, {Component} from 'react';
import blogs from '../data/data';
import Search from './Search'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'
// function searchIt(term){
//     return function(item) {
//         return item.subject.toLowerCase().includes(term.toLowerCase());
//     };
// }
let searchIt = term => item => item.subject.toLowerCase().includes(term.toLowerCase());

class App extends Component{
    // state = { blogs };
    
    constructor() {
        super();
        this.state = {
            blogs,
            searchTerm: '',
        };
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id){
        const updatedBlogs = this.state.blogs.filter((item) => item.objectId !== id);
        // this is how to update your state
        this.setState({blogs: updatedBlogs});
        console.log('Delete item with id:', id);
    }
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value}, () => {
            console.log(this.state.searchTerm)
        });
    };

    handleCreateBlogSubmit = (event,blog) => {
        event.preventDefault()
        let updatedBlogs= [blog, ...this.state.blogs];
        this.setState({
            blogs: updatedBlogs
        },
        () => {
            console.log(this.state.blogs)
        }
        )
    }
    

    render() {
        console.log(this.state)
		return (
			<div style={{
				marginTop:'100px', 
				display:'flex', 
				justifyContent:'center', 
				alignItems:'center', 
				flexDirection:'column'}}>
                    <Search  
                    handleChange={this.handleChange} 
                    searchTerm={this.state.searchTerm}/>
                    <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />
                    <Blogs blogs={this.state.blogs} searchTerm={this.state.searchTerm} onDelete={this.onDelete} />
                {/* <form className="ui form">
                    <div className="field">
                        <input
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Search.."
                            value={this.state.searchTerm}/>
                    </div>
                </form> */}
			</div>
		)
	}
}

export default App;