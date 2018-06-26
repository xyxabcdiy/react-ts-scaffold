import * as React from 'react';
import { match } from 'react-router';

interface Props extends React.Props<Topic> {
    match: match<{ topicId: string }>
}

export default class Topic extends React.Component<Props> {
    render() {
        const { match } = this.props;
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        );
    }
}
