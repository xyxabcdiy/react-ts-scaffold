import * as React from 'react';
import './index.scss';

interface Props extends LoadableExport.LoadingComponentProps {
}

export default class Loading extends React.Component<Props> {
    render() {
        return (
            <div className="overlay overlay-active">
                <span className="preloader" />
            </div>
        );
    }
}
