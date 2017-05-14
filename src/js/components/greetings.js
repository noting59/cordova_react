import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { news } from '../actions/newsAction';
import map from 'lodash/map';

class Greetings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: {},
            count: ''
        };
    }

    createArticle(obj) {
        let newsId = '/news/' + obj.id;

        return (
            <div className="card hoverable small">
              <div className="card-image">
                <img src={obj.img}ss/>
              </div>
              <div className="card-content">
                <div>{obj.text.substring(0, obj.text.indexOf("<br>"))}</div>
              </div>
              <div className="card-action">
                <Link to={newsId}>Читать подробнее</Link>
              </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.news().then(
            (res) => {
                this.setState({count: res[0]});
                res.shift();
                let articles = [];
                let count = 0;
                for (let i of res) {
                    articles[count] = {id: i.id, text: i.text, img: i.attachment.photo.src_big, date: i.date };
                    count++;
                }
                this.setState({articles: articles});
            },
            (err) => {

            }
        );
    }

    render() {
        const articles = map(this.state.articles, (obj) =>
            this.createArticle(obj)
        );

        return (
            <div>
                <div className="container background-home"></div>
                <div className="container">
                    <div className="col s12 center-align">
                        <div className='row'>
                          <div className='col s12'>
                          </div>
                        </div>
                        <h3>Последние новости клуба</h3>
                    </div>

                    {articles}

                </div>
            </div>
        );
    }
}

Greetings.propTypes = {
    news: React.PropTypes.func.isRequired
};

export default connect(null, { news })(Greetings);
