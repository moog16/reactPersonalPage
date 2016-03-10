import React from 'react';
import { fromJS } from 'immutable';
import moment from 'moment';

class BlueDoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };

    this.fetchTumblrPosts();
  }

  fetchTumblrPosts() {
    fetch('/v1/tumblr/52dinners').then(res => {
      res.json().then( blog => this.setState({blog: fromJS(blog)}) );
    });
  }

  render() {
    const blog = this.state.blog;
    const posts = blog && blog.size && blog.get('posts');
    return (
      <div className='full-page'>
        <div className='cover--blue-door'>
          {
            posts && posts.size ?
            <div className='section'>
              <div className='u-p'>
                <h2 className="u-mv0">
                  I love to cook!
                </h2>
                <a className='bg--color-opaque--white-7' href={blog.getIn(['blog', 'url'])}>
                  {blog.getIn(['blog', 'title'])}
                </a>
                <div className='layout layout--small'>
                  {
                    posts.map(post => {
                      return (<div className='layout__item u-9/12 u-1/1-palm u-mt' key={post.get('id')}>
                        <div className='bg--color-opaque--white-7 u-p'>
                          <a href={post.get('post_url')}>
                            {post.get('title')}
                          </a>
                          <div>
                            {moment(post.get('date')).format('ll')}
                          </div>
                          <div className='ellipsis'>
                            {post.get('body')}
                          </div>
                        </div>
                      </div>)
                    }, this)
                  }
                </div>
              </div>
            </div> : null
          }
        </div>
      </div>
    )
  }
};

export default BlueDoor;
