import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const COMMENT = {
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64'
    },
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!'
};

class AvatarInfo extends React.Component {
    render() {
        return <img src={this.props.author.avatarUrl} alt={this.props.author.name} />;
    }
}

AvatarInfo.propTypes= {
    author: PropTypes.object
};

class DateInfo extends React.Component {
    render() {
        return <div>{this.props.date}</div>;
    }
}

DateInfo.propTypes= {
    date: PropTypes.string
};

class TextInfo extends React.Component {
    render() {
        return <div>{this.props.text}</div>;
    }
}

TextInfo.propTypes= {
    text: PropTypes.string
};

class AuthorInfo extends React.Component {
    render() {
        return (
            <div>
                <AvatarInfo author={this.props.author}/>
                <div>{this.props.author.name}</div>
            </div>
        );
    }
}

AuthorInfo.propTypes = {
    author: PropTypes.object
};

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

Welcome.propTypes = {
    name: PropTypes.string
};

class Comment extends React.Component {
    render() {
        return (
            <div>
                <AuthorInfo author={this.props.author}/>
                <TextInfo text={this.props.text} />
                <DateInfo date={this.props.date} />
            </div>
        );
    }
}

Comment.propTypes = {
    author: PropTypes.object,
    text: PropTypes.string,
    date: PropTypes.string
};

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <Comment
                author={COMMENT.author}
                text={COMMENT.text}
                date={COMMENT.date}
            />
        </div>
    );
}

function tick() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(tick,1000);