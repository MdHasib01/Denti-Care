import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs] = useFetch();
    return (
        <div className="blogs-sectoin my-5">
             <div className="container">
           <div className="text-center mb-5">
                <h2 className="my-3 heading-txt">Latest Clinic News</h2>
                <p>Stay tuned for our up-to-date news and events in dentistry written by our specialists at Denteeth Clinic Center.</p>
            </div>
            <Row xs={1} md={3} className="g-4">
            {
                blogs.map(blog=><Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
            <div className="col">
            {
                blogs.map(blog=><div
                    key={blog.id}
                >
                    <div className="mb-5">
                    <h2 className="blog-card-title">{blog.title}</h2>
                    <small>{blog.date}</small>
                    
                    <Link to={`/blog/${blog.id}`}><p>Read more <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    
                    </div>
                    <hr />
                </div>)
            }
           
            </div>
            
            </Row>
            
        </div>
        </div>
       
    );
};

export default Blogs;