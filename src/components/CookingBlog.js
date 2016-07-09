import React from 'react';
import { fromJS } from 'immutable';
import moment from 'moment';

class CookingBlog extends React.Component {
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

    if(!blog || !blog.size) {
      return null;
    }



    return <div className='bg--color-blue'>
      { this.renderBlog() }
    </div>
  }

  renderBlog() {
    const blog = this.props.dinnerBlog;
    const posts = blog.get('posts');

    if(!posts || !posts.size) {
      return null;
    }
    return <div className='full-page'>
      <div className='cover--eggs'>
        <div className='section half-page'>
          <div className='u-p u-pt++'>
            <h1 className="u-mv0 text--color-white">
              I love to cook!
            </h1>
            <h4 className='u-m0'>
              <a className='u-p-- text--color-white ' href={blog.getIn(['blog', 'url'])}>
                <i className='icon-tumblr'></i>  { blog.getIn(['blog', 'title']) }
              </a>
            </h4>
            <div className='layout layout--small'>
              { posts.map(post => this.renderBlogEntry(post), this) }
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  renderBlogEntry(post) {
    return <div className='layout__item u-1/3 u-1/1-palm u-mt' key={post.get('id')}>
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
    </div>
  }
};

export default CookingBlog;
