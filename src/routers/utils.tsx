import * as Loadable from 'react-loadable';
import Loading from 'Components/Loading';

interface Options<Props> {
    webpack?: () => number[];
    modules?: string[];
    timeout?: number | false | null;
    delay?: number | false | null;
    loader(): Promise<React.ComponentType<Props> | { default: React.ComponentType<Props> }>;
}

/**
 * 生成异步组件
 */
const AsyncComponent = (options: Options<any>) => {
    return Loadable({
        loading: Loading,
        ...options
    });
};

export default AsyncComponent;
