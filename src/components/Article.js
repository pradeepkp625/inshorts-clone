import React from 'react';
const propTypes = {};

const defaultProps = {};

class Article extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        let {data} = this.props
        return <div>
            {data.map((item)=>{
                        return    <div className="post__wrapper">
                            <div className="image__wrapper">
                                <img src={item.urlToImage} alt='logo'/>
                            </div>
                            <div className="details__wrapper">
                                <h2>{item.title}</h2>
                                <div className="artricle__informtation">
                                    <b>Short</b> by {item.author}/{item.publishedAt}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
            })}
        </div>;
    }
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;
// #endregion

export default Article;