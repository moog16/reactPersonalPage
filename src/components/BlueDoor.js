import React from 'react';
import { fromJS } from 'immutable';
import moment from 'moment';

class BlueDoor extends React.Component {
  componentWillMount() {
    this.props.fetchDinnerBlog();
  }

  stripHtml(post) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = post;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  render() {
    const blog = this.props.dinnerBlog;
    const posts = blog && blog.size && blog.get('posts');

    if(!posts) {
      return null;
    }
    
    return (
      <div className='full-page'>
        <div className='cover--blue-door'>
          {
            posts && posts.size ?
            <div className='section'>
              <div className='u-p u-pt++'>
                <h1 className="u-mv0">
                  I love to cook!
                </h1>
                <a className='bg--color-opaque--white-7 u-p--' href={blog.getIn(['blog', 'url'])}>
                  <i className='icon-tumblr'></i>  {blog.getIn(['blog', 'title'])}
                </a>
                <div className='layout layout--small'>
                  {
                    posts.map(post => {
                      return (<div className='layout__item u-9/12 u-1/1-palm u-mt' key={post.get('id')}>
                        <div className='content-row u-p'>
                          <a target="_blank" href={post.get('post_url')} className='text--heavy text--color-black'>
                            <h4 className='u-mt0 u-mb- u-p0'>
                              {post.get('title')}
                            </h4>
                            <div>
                              {moment(post.get('date')).format('ll')}
                            </div>
                            <div className='ellipsis'>
                              {this.stripHtml(post.get('body'))}
                            </div>
                          </a>
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
