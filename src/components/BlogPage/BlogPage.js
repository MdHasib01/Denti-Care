import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import Blogs from '../Blogs/Blogs';

const BlogPage = () => {
    const {blogId} = useParams();
    const [blogs] = useFetch();
    return (
        <div>
            {
                blogs.filter(blog=> blog.id === blogId).map((blog, index)=><div 
                key={index}
                >
                     <div className="container">
                     <h2 className="heading-txt text-center my-5">{blog.title}</h2>
                    <img width="100%" height="400px" src={blog.image} alt="" />
                    <h2>{blog.title}</h2>
                    <p>{blog.discription}</p>
                    <Blogs></Blogs>
                     </div>
                </div>)
            }
            
        </div>
    );
};

export default BlogPage;