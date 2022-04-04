import React from "react";
import Post from "./Post";

import { ThreeDots } from "svg-loaders-react";

 const openInNewTab = (url) => {
   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
   if (newWindow) newWindow.opener = null;
 };

const query = `
    {
      user(username: "scriptsandtags") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class Blog extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();

    // console.log(ApiResponse.data.user.publication.posts);
    this.setState({
      posts: ApiResponse.data.user.publication.posts,
      loading: false,
    });
  };

  render() {
    if (this.state.loading)
      return (
        <div className='spinner'>
          <ThreeDots fill='steelblue' strokeOpacity='.125' />
        </div>
      );

    return (
      <div id='blog' className='blogs'>
        <div className='blog-container'>

          <h1 className='intro-to-blog'>Blog Posts</h1>

          <div className='blog-post'>
            
            {this.state.posts.map((post, index) => (
              <a
                onClick={() =>  openInNewTab(`https://blog.scriptsandtags.com/${post.slug}`)}
                key={index}
              >
                <Post post={post} />
              </a>
            ))}

          </div>

        </div>
      </div>
    );
  }
}

export default Blog;
